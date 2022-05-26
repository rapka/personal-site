import _ from 'lodash';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

import flickr from './json/landscapes.mjs';

const conf = {
	title: flickr.photoset.title,
	images: [],
};

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

_.each(flickr.photoset.photo, photo => {
	console.log('hihi', photo.title);
	conf.images.push({
		url: photo.url_o,
		thumbnail: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
		title: photo.title,
		description: photo.description,
	});

});

fs.writeFileSync(path.join(__dirname, 'output.json'), JSON.stringify(conf, null, 2));

