## Front End

* Web application structure
  * HTML - Basic outline and structure of a web page
  * CSS - Make it look all pretty
  * JavaScript - Make it do cool things

---

### Front End - HTML
* HTML controls the structure of the web application.
  * Do you want to type a sentence and make a _strong_ point about a word or phrase?  Use the `<strong>` tag.
  * Do you want to take several sentences and make them into a _paragraph_?  Use the `<p>` tag.
  * Do want to group several paragraphs into their own section, or _division_?  Use the `<div>` tag.
  * That and everything else goes in the _body_ of the page and is wrapped in a `<body>` tag.
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
	* Do you want to make that _strong_ text from earlier red? Use `color: red;`.
	* Do you want to center a _paragraph_? Use `text-align: center;`.
	* Do you want to make the entire _body_ of the web application blue? Use `background-color: blue;`.
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
