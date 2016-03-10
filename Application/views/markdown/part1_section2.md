## Front End

* Web application structure
  * HTML - Basic outline and structure of a web page
  * CSS - Make it look all pretty
  * JavaScript - Make it do cool things

---

### HTML
* HTML controls the structure of the web application.
  * Do you want to type a sentence and make a _strong_ point about a word or phrase?  Use the `<strong>` tag.
  * Do you want to take several sentences and make them into a _paragraph_?  Use the `<p>` tag.
  * Do want to group several paragraphs into their own section, or _division_?  Use the `<div>` tag.
  * That and everything else goes in the _body_ of the page and is wrapped in a `<body>` tag.
  * HTML is nothing but tags with information inside of them.

---

### HTML

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
