import React from 'react';
import PropTypes from 'prop-types';

import './Bandcamp.scss';

const ARTIST_SLUGS = {
  'college-hill': 'collegehill',
  'fury': 'collegehill',
  'morphologist': 'collegehill',
}

function SoundcloudEmbed({ trackId, title, artist, trackSlug, artistName, slug, size }) {
  let height;
  if (size === 's') {
    height = 20;
  } else if (size === 'm') {
    height = 166;
  } else {
    height = 300;
  }

// <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/124336542&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/collegehill" title="College Hill" target="_blank" style="color: #cccccc; text-decoration: none;">College Hill</a> · <a href="https://soundcloud.com/collegehill/150-style-pt-4" title="150 Style Pt. 4" target="_blank" style="color: #cccccc; text-decoration: none;">150 Style Pt. 4</a></div>
  let iframeUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}` +
    `&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&inverse=true` +
    `&show_user=true&show_reposts=false&show_teaser=true`;
  let link;

  if (size !== 's') {
    iframeUrl += '&visual=true';
    link = (
      <div style={{
          fontSize: '10px',
          color: '#cccccc',
          lineBreak: 'anywhere',
          wordBreak: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          FontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
          fontWeight: 100,
        }}>
          <a
            href={`https://soundcloud.com/${artist}`}
            title={artistName}
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}>
              {artistName}
          </a>
            {' · '}
            <a
              href={`https://soundcloud.com/${ARTIST_SLUGS[artist]}/${slug}`}
              title={title}
              target="_blank"
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              {title}
            </a>
          </div>

      );
  }

  return (
    <div className="soundcloudEmbed">
      <iframe
        width="100%"
        height={height}
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={iframeUrl} />
        {link}
    </div>
  );
}

SoundcloudEmbed.propTypes = {
  trackId: PropTypes.string.isRequired,
  title: PropTypes.string,
  artist: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  size: PropTypes.string,
};

SoundcloudEmbed.defaultProps = {
  title: '',
  size: 'm'
};

export default SoundcloudEmbed;
