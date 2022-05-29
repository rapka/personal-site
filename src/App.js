import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import VirutalPhotography from './routes/virtual-photography';
import GalleryPage from './routes/virtual-photography/GalleryPage';
import Landing from './routes/landing';
import Resume from './routes/resume';
import Mods from './routes/mods';
import Music from './routes/music';

import './App.css';

function PersonalSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="virtual-photography/:galleryKey" element={<GalleryPage />} />
        <Route path="virtual-photography" element={<VirutalPhotography />} />
        <Route path="resume" element={<Resume />} />
        <Route path="mods" element={<Mods />} />
        <Route path="music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PersonalSite;
