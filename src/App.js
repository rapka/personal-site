import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import VirutalPhotography from "./routes/virtual-photography";
import GalleryPage from "./routes/virtual-photography/GalleryPage.js";
import Landing from "./routes/landing";
import Resume from "./routes/resume";
import Mods from "./routes/mods";
import Music from "./routes/music";

import './App.css';

function PersonalSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      <Route path="virtual-photography" element={<VirutalPhotography />}>
        <Route path=":galleryKey" element={<GalleryPage />} />
      </Route>
        <Route path="resume" element={<Resume />} />
        <Route path="mods" element={<Mods />} />
        <Route path="music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  );
}

PersonalSite.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};


export default PersonalSite;
