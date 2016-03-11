"use strict";

const config = require('../config.json');

let user = null;

module.exports.partOne = function* partOne(){
  yield this.render('part1', {
		layout: "slides.hbs",
		title: config.site.name,
		background: "reveal-parallax-1.jpg"
	});
}

module.exports.partTwo = function* partTwo(){
  yield this.render('part2', {
		layout: "slides.hbs",
		title: config.site.name,
		background: "reveal-parallax-2.jpg"
	});
}
