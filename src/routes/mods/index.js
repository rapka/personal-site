import React from 'react';
import Header from '../../Header';
import DolphinMod from './DolphinMod';
import mods from './modData';

function App() {
  const modComponents = mods.map((mod, i) => <DolphinMod {...mod} />);

  return (
    <div>
      <Header />
      <h3>Dolphin Emulator Texture Packs</h3>
      <h5>Installation</h5>
      Installation instructions:
      https://forums.dolphin-emu.org/Thread-how-to-install-texture-packs-custom-textures-info If
      you're using these alongside another texture pack (like Hypatia's Viewtiful Joe textures),
      move all the files inside a folder called 000 so that the handmade textures will be loaded on
      top of the AI-generated ones.
      <h5>Download Links</h5>
      <br />
      {modComponents}

      <br />
      N64 (Virtual Console)
      <a href="https://mega.nz/#!OZ1RUKAQ!l225vo2KmIg6yCRUNQQqeeVgyK6RT4zxKxIHpwgSipY">
        ] Pokemon Snap (NAKE01)
      </a>
      <a href="https://mega.nz/#!TJ0jjIZA!UQh8r_luF9RekfPbOfNa-Cj9Qgjxj83uOjCPfhXNsgQ">
        Wave Race 64 (NAIE01)
      </a>
      <a href="https://mega.nz/#!uBFV0KRZ!9M6SROjZJ5Z3RlGMJu9UHSp1RYIZk4KfmGnssGwDkWg">
        [] Mario Kart 64 (NAME01)
      </a>
      TODO: screenshot comparisons (export comparison tool?)
      <h3>Turok 2: Seeds of Evil (Steam)</h3>
      https://www.nexusmods.com/turok2/mods/4
    </div>
  );
}

export default App;
