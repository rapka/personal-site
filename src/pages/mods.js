import React from 'react';
import Header from '../components/Header';
import DolphinMod from '../components/mods/DolphinMod';
import mods from '../modData';

import './Mods.scss';

function App() {
  const modComponents = mods.map((mod) => <DolphinMod key={mod.gameId} {...mod} />);

  return (
    <div>
      <Header />
      <section className="modSection">
        <h2 className="modSection-title">Dolphin Emulator Texture Packs</h2>
        <h3>Installation</h3>
        <p className="modSection-p">
          Extract all images in each texture pack to
          {' '}
          <code>Dolphin Emulator\Load\Textures\GAME_ID</code>
          {' '}
          where
          <code>GAME_ID</code>
          {' '}
          is the id of the game (
          <code>GM8E01</code>
          {' '}
          for example).
        </p>
        <p className="modSection-p">
          If you&apos;re using these textures alongside other texture packs(such as
          {' '}
          <a href="https://onthegreatsea.tumblr.com/post/133505457500/hypatias-viewtiful-joe-mod-download-link">
            Hypatia&apos;s Viewtiful Joe textures
          </a>
          ), create a new folder inside
          {' '}
          <code>Textures\GAME_ID</code>
          {' '}
          named
          {' '}
          <code>000</code>
          {' '}
          and
          move all the texture inside it. This will ensure that any other textures packs will be
          loaded afther the AI-generated ones and replace them.
        </p>
        <a
          className="modSection-installInfo"
          href="https://forums.dolphin-emu.org/Thread-how-to-install-texture-packs-custom-textures-info"
        >
          (click here for more info on installation)
        </a>
        <h3>Download Links</h3>
        <br />
        {modComponents}
        <br />
        <h2 className="modSection-title">Other Texture Packs</h2>
        <div className="modSection-turok">
          <h3>Turok 2: Seeds of Evil (Steam)</h3>
          <a
            href="https://www.nexusmods.com/turok2/mods/4"
            className="modSection-download"
            target="_blank"
            rel="noreferrer"
          >
            Download via Nexusmods
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
