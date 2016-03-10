"use strict";

const hbs = require('koa-hbs');
const Handlebars = require('handlebars');
const config = require('../config.json');
const fs = require('fs');

hbs.registerHelper('if_eq', function(a, b, opts) {
  if(a == b) // Or === depending on your needs
    return opts.fn(this);
  else
    return opts.inverse(this);
});

hbs.registerHelper('copyright_year', function(opts) {
  return new Date().getFullYear();
});

hbs.registerHelper('get_name', function(opts) {
  return config.site.name;
});

hbs.registerHelper('get_analytics', function(opts) {
  if (config.site.analytics){
    return config.site.analytics;
  }
});

hbs.registerHelper('has_analytics', function(opts) {
  let fnTrue=opts.fn, fnFalse=opts.inverse;
  return (config.site.analytics && config.site.analytics !== false) ? fnTrue() : fnFalse();
});

hbs.registerHelper("markdown", function markdown(partial, opts) {
	// we don't need any data for now
	const data = {};
	const rawFile = fs.readFileSync(`views/markdown/${partial}.md`, "utf8");
	// we have to manually replace escaped quotes because of marked
	// https://github.com/chjj/marked/issues/269
	const template = Handlebars.compile(rawFile);
	const final = template(data);
	return final;
});

Handlebars.registerHelper('code', function(language, options) {
	// the raw code we're passing in
	const rawCode = options.fn(this);
	let convertedCode = rawCode;
	// remove the < and > tags
	convertedCode = convertedCode.replace(/</g, "&lt;");
	convertedCode = convertedCode.replace(/>/g, "&gt;");
	// convert tabs to spaces
	convertedCode = convertedCode.replace(/\t/g, "  ");
	const returnCode = `<pre><code class="${language}" data-notrim>${convertedCode}</pre></code>`;
  return returnCode;
});
