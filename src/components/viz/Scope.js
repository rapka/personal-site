import React from 'react';
import PropTypes from 'prop-types';
import hexRgb from 'hex-rgb';
import times from 'lodash/times';
import sum from 'lodash/sum';
import hsvToRgb from './util/hsvToRgb';

import './Scope.css';

const isBrowser = typeof window !== 'undefined';

const PADDING = 50 * 2; // 50px on each side
let WIDTH = 1920 / 2;
let HEIGHT = 1080;
let H = 0;

class Scope extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.player = React.createRef();
    this.playEvent = (event) => {
      // Space bar
      if (event.keyCode === 32) {
        event.preventDefault();
        this.setState({ playing: !this.state.playing });
      }
    };
    this.audioCtx = null;

    if (isBrowser) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  componentDidMount() {
    if (!isBrowser) {
      return;
    }
    // Add spacebar hotkey
    document.addEventListener('keydown', this.playEvent, false);

    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth - PADDING;
    const audioElement = this.player.current;
    const { audioCtx } = this;

    const analyser = audioCtx.createAnalyser();

    const canvas = document.getElementById('canvas');
    const canvasCtx = canvas.getContext('2d');

    const source = audioCtx.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 2048;
    analyser.minDecibels = -80;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const bassArray = new Uint8Array(bufferLength);

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    // const artistElem = document.getElementById('artist');
    // const albumElem = document.getElementById('album');
    const bgElem = document.getElementById('scope-icon');
    const overlayElem = document.getElementById('scope-blurtext');

    const draw = () => {
      const { colors, rotationOffset, rotateColors } = this.props;
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth - PADDING;

      if (this.state.playing) {
        H = (H + 0.5) % 360;
      }

      canvasCtx.canvas.width = WIDTH;
      canvasCtx.canvas.height = HEIGHT;
      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);
      analyser.getByteFrequencyData(bassArray);

      let bassValue = (bassArray[0] + bassArray[1] + bassArray[2] + bassArray[3]) / 4;
      bassValue = Math.max(0, 10 * (Math.exp(bassValue * 0.02) - 2));
      const bassNormalized = Math.min(bassValue / 1500, 1) / 2;

      const highValue = sum(bassArray.slice(768)) / 256;
      const midValue = sum(bassArray.slice(512)) / 512;

      window.bassNormalized = bassNormalized;
      bgElem.style.transform = `scale(${1 + bassValue * 0.00005})`;
      bgElem.style.filter = `blur(${bassValue * 0.004}px)`;
      overlayElem.style.filter = `blur(${bassValue * 0.0015}px)`;
      overlayElem.style.transform = `translateY(${midValue * 0.15}px)`;

      canvasCtx.fillStyle = 'rgba(200, 200, 200, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
      canvasCtx.lineWidth = Math.max(bassValue / 100, 2);

      const Y_OFFSET = 180;

      times(colors.length, (index) => {
        const rotatedH = ((H + rotationOffset) * index) % 360;

        let rgb = hsvToRgb(rotatedH / 360, 1, 1);

        if (rotateColors) {
          rgb = hsvToRgb(rotatedH / 360, 1, 1);
          canvasCtx.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${
            0.8 - bassNormalized * 1.33
          })`;
        } else {
          rgb = hexRgb(colors[index]);
          canvasCtx.strokeStyle = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${
            0.8 - bassNormalized * 1.33
          })`;
        }

        canvasCtx.beginPath();
        const sliceWidth = (WIDTH * 1.0) / bufferLength;
        let x = 0;
        let y = 0;
        let v = 0;

        for (let i = 0; i < bufferLength; i++) {
          v = dataArray[i] / 128.0;
          y = (v * HEIGHT) / 4;

          if (i === 0) {
            canvasCtx.moveTo(x, y + (Y_OFFSET - index * 5));
          } else {
            canvasCtx.lineTo(x, y + (Y_OFFSET - index * 5));
          }

          x += sliceWidth;
        }

        canvasCtx.stroke();
      });
    };

    draw();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isBrowser) {
      return;
    }

    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth - PADDING;

    if (!prevState.playing && this.state.playing) {
      this.audioCtx.resume().then(() => {
        this.player.current.play();
      });
    } else if (prevState.playing && !this.state.playing) {
      this.player.current.pause();
    }
  }

  componentWillUnmount() {
    if (!isBrowser) {
      return;
    }

    document.removeEventListener('keydown', this.playEvent, false);
  }

  render() {
    return (
      <div className="viz-container">
        <canvas id="canvas" />
        <img id="scope-icon" src="/public/favicon.png" />
        <div id="scope-blurtext">blurs on beat!</div>
        <audio ref={this.player} src={this.props.audioSrc} type="audio/mpeg" preload="auto" loop />
      </div>
    );
  }
}

Scope.propTypes = {
  rotateColors: PropTypes.bool, // flag to auto cycle thru the rainbow
  rotationOffset: PropTypes.number, // hue offset between scopes (in degrees) with rotateColors
  colors: PropTypes.arrayOf(PropTypes.string), // static color for each scope
  audioSrc: PropTypes.string,
};

Scope.defaultProps = {
  rotateColors: true,
  rotationOffset: 180,
  colors: ['#FFFFFF', '#FFFFFF', '#888888'],
  audioSrc: '/public/ww.mp3',
};

export default Scope;
