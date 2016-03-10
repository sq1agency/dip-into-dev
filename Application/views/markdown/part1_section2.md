### Front End
* Web application structure
  * HTML - Basic outline and structure of a web page
  * CSS - Make it look all pretty
  * JavaScript - Make it do cool things

---

### Front End - HTML
* HTML controls the structure of the web application.
  * Do you want to type a sentence and make a _strong_ point about a word or phrase?
	{{#code "html"}}<strong>Word or Phrase</strong>{{/code}}
  * Do you want to take several sentences and make them into a _paragraph_?
	{{#code "html"}}<p>Several Sentences Go Here</p>{{/code}}
  * Do want to group several paragraphs into their own section, or _division_?
	{{#code "html"}}<div>Several Paragraphs Go Here</div>{{/code}}
  * That and everything else goes in the _body_ of the page.
	{{#code "html"}}<body>Everything Goes Here</body>{{/code}}
  * HTML is nothing but tags with information inside of them.

---

### Front End - HTML

{{#code "html"}}
<html>
	<head>
		<title>Example Web Page</title>
	</head>
	<body>
		<div>
			<p>Paragraph 1 goes here, and there's <strong>strong</strong> text.</p>
			<p>Paragraph 2 goes here, and there's <strong>strong</strong> text too.</p>
		</div>
	</body>
</html>
{{/code}}


---

### Front End - CSS
* CSS controls the look and feel of the web application
	* Do you want to make that _strong_ text from earlier red?
	{{#code "css"}}color: red;{{/code}}
	* Do you want to center a _paragraph_?
	{{#code "css"}}text-align: center;{{/code}}
	* Do you want to make the entire _body_ of the web application blue?
	{{#code "css"}}background-color: blue;{{/code}}
	* CSS is a collection of properties that we can give HTML tags to change their look and feel.
	* Show example and explain how properties can be grouped by element or class?

---

### Front End - CSS

{{#code "css"}}
strong {
	/* color: #FF0000; */
	color: red;
}

p {
	/* color: #FFFFFF */
	color: white;
	text-align: center
}

body {
	/* background-color: #0000FF */
	background-color: blue;
}
{{/code}}


---

### Front End - JavaScript
* JavaScript (JS) controls interactivity in the web application
	* Do you want to assign a word to a thing (variable) that you can use in place of it?
	{{#code "javascript"}}const oneThing = "hello";{{/code}}
	* Do you want to take one thing (string/int) and combine it with another?
	{{#code "javascript"}}let newThing = oneThing + anotherThing;{{/code}}
	* Do you want to tell the user about that new thing? (talk concatenation?)
	{{#code "javascript"}}alert("Check out this thing! --> " + newThing);{{/code}}

---

### Front End - JavaScript

{{#code "javascript"}}
const oneThing = "hello";
const anotherThing = "world";

let newThing = oneThing + ' ' + anotherThing;

alert(newThing);
{{/code}}

---

### Front End - JavaScript

* JavaScript is wonderful, but not always terribly concise.  HTMl and CSS and great for single one line examples of basic functionality, but that's not something JavaScript excels at.  Stay tuned for more examples.

---
