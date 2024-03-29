import React from 'react';
import Header from '../components/Header';
import Scope from '../components/viz/Scope';
import ProjectTitle from '../components/dev/ProjectTitle';

import './Dev.scss';

function Dev() {
  return (
    <div className="devPage">
      <Header />
      <h2 className="devPage-pageTitle">development work</h2>
      <ul className="devPage-itemList">
        <li className="devPage-item">
          <ProjectTitle
            title="collegehill.io"
            url="https://collegehill.io"
            githubUrl="personal-site"
            year="2022-present"
          />
          <ul className="devPage-details">
            <li className="devPage-detail">My personal website. You&apos;re on it right now!</li>
            <li className="devPage-detail">
              Hosted on
              {' '}
              <a href="https://pages.github.com/">GitHub Pages</a>
              {' '}
              with dynamically
              generated pages for photo albums and music releases
            </li>
            <li className="devPage-detail">
              built with
              {' '}
              <code>Node</code>
              ,
              {' '}
              <code>React</code>
              ,
              {' '}
              <code>Sass</code>
              , and
              {' '}
              <code>Gatsby</code>
            </li>
          </ul>
        </li>
        <li className="devPage-item">
          <ProjectTitle
            title="grimearchive.org"
            url="https://grimearchive.org"
            githubUrl="grimearchive"
            year="2015-present"
          />
          <ul className="devPage-details">
            <li className="devPage-detail">
              a website for hosting and cataloging recording of live grime performances and radio
              shows
            </li>
            <li className="devPage-detail">
              uses a
              {' '}
              <a href="https://github.com/rapka/id3_reader">custom fork</a>
              {' '}
              of the
              {' '}
              <code>id3_reader</code>
              {' '}
              npm module that adds support for writing album art
            </li>
            <li className="devPage-detail">
              built with
              {' '}
              <code>Node</code>
              ,
              {' '}
              <code>MongoDB</code>
              ,
              {' '}
              <code>Express</code>
              ,
              {' '}
              <code>Pug</code>
              , and
              <code>JQuery</code>
            </li>
          </ul>
        </li>
        <li className="devPage-item">
          <ProjectTitle
            title="wordlebookmarks.app"
            url="https://wordlebookmarks.app"
            githubUrl="wordle-list"
            year="2022-present"
          />
          <ul className="devPage-details">
            <li className="devPage-detail">
              a single page app for keeping track of daily Wordle games
            </li>
            <li className="devPage-detail">
              built with
              {' '}
              <code>React</code>
              {' '}
              and
              {' '}
              <code>Rollup</code>
            </li>
          </ul>
        </li>
        <li className="devPage-item">
          <ProjectTitle
            title="webgl audio visualizer"
            url=""
            githubUrl="spin-viz"
            year="2021-present"
          />
          <ul className="devPage-details">
            <li className="devPage-detail">used for creating YouTube videos</li>
            <li className="devPage-detail">
              built with
              {' '}
              <code>react</code>
              {' '}
              and
              {' '}
              <code>webgl</code>
            </li>
            <li className="devPage-scope">
              <Scope />
            </li>
          </ul>
        </li>
        <li className="devPage-item">
          <ProjectTitle
            title="ESRGAN scripting tools for batch texture upscaling"
            url=""
            githubUrl="dolphin-textures"
            year="2019"
          />
          <ul className="devPage-details">
            <li className="devPage-detail">
              <code>node</code>
              -based scripts used for mass upscaling game textures with ESRGAN
            </li>
            <li className="devPage-detail">developed logic to upscale alpha layers in textures</li>
            <li className="devPage-detail">See <a href="/mods">mods page</a> for more info</li>
          </ul>
        </li>
        <li className="devPage-item">
          <ProjectTitle
            title="bloodfrenzy.club"
            url="https://bloodfrenzy.club"
            githubUrl="frenzy"
            year="2016-2018"
          />
          <ul className="devPage-details">
            <li className="devPage-detail">website for the Blood Frenzy record label</li>
            <li className="devPage-detail">
              includes a
              {' '}
              <span className="devPage-bloody">bloody</span>
              {' '}
              real time fluid-based music
              visualizer
            </li>
            <li className="devPage-detail">
              Originally built with
              {' '}
              <code>Node</code>
              ,
              {' '}
              <code>Express</code>
              ,
              {' '}
              <code>Pug</code>
              , and
              {' '}
              <code>WebGL</code>
            </li>
            <li className="devPage-detail">
              Converted to a static
              {' '}
              <code>html5</code>
              , site in 2022
            </li>
            <li className="devPage-detail">
              Fluid simulation logic originally written by
              {' '}
              <a href="https://29a.ch/" target="_blank" rel="noreferrer">
                Jonas Wagner
              </a>
            </li>
          </ul>
        </li>
        <li className="devPage-item">
          <ProjectTitle
            title="hyperbreeder"
            url="https://rapka.github.io/hyperbreeder/"
            githubUrl="hyperbreeder"
            year="2021-present"
          />
          <ul className="devPage-details">
            <li className="devPage-detail">an idle game. currently a WIP pre-alpha</li>
            <li className="devPage-detail">
              built with
              {' '}
              <code>Svelte</code>
              ,
              {' '}
              <code>Rollup</code>
              ,
              {' '}
              <code>Sass</code>
              , and
              {' '}
              <code>Electron</code>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Dev;
