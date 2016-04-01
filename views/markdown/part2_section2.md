### Exercise 1 - HTML

In this exercise, we'll be learning how to create a basic web page in HTML

---

### Exercise 1 - HTML

Everything in HTML is based on "tags".  Tags are almost always seen in sets, or as an _opening tag_ and a _closing tag_.  When we talk about tags, we are typically talking about the set of them, not the single one.

{{#code "html"}}
<html>
	<head>
		<!--content goes here-->
	</head>
	<body>
		<!--and also here-->
	</body>
</html>
{{/code}}

Webpages typically consist of an html, head, and body tag (as seen above).

Note: Talk about comments and their purpose.

---

### Exercise 1 - HTML

The head section of a website typically contains the most important information on a website, because it gets sent to the client first.

{{#code "html"}}
<html>
	<head>
		<!--meta information will go here-->
		<!--styling (CSS) will go here-->
		<!--some javascript (Interactivity) will go here-->
		<!--the __title__ of the website will go here-->
	</head>
	<body>
		<!--and also here-->
	</body>
</html>
{{/code}}

Note: Point out the title tag section, as it will be used in the example.  Also talk about the meta section and what it's used for.  Perhaps talk about how the page is loaded in order from top to bottom?

---

### Exercise 1 - HTML

The body section of a website typically contains everything else.  Most of what you see on a typical website is stored in the body.  Talk about what a title tag is, and where you see it on a webpage

{{#code "html"}}
<html>
	<head>
		<!--meta information will go here-->
		<!--styling (CSS) will go here-->
		<!--some javascript (Interactivity) will go here-->
		<!--the __title__ of the website will go here-->
	</head>
	<body>
		<!--and also here-->
	</body>
</html>
{{/code}}

Note: This slide is buggy, you shouldn't remove this note.

---

### Exercise 1 - HTML

#### Question

* If we wanted to add a title to our example web page, where would we add that?
* What would it look like?

Add a title to the example web page, it can say anything you'd like.

Note: They should attempt to do this for a small period of time, and then we'll review the answer

---

### Exercise 1 - HTML

#### Answer

The title of a web page is fairly important, which is why it goes in the _head_ section.

{{#code "html"}}
<html>
	<head>
		<title>Example Web Page</title>
	</head>
	<body>

	</body>
</html>
{{/code}}

Keep in mind that _title_ is like most tags in that it has an opening and a closing tag.

---

### Exercise 1 - HTML

Now that we've added a title, let's add some content.  We talked previous about separating content into sections, or _divisions_ using the _div_ tag.

Note: TODO: replace with a H1 tag and briefly explain the reason for having it.

---

### Exercise 1 - HTML

#### Question

* If we wanted to add a single _division_ to our page, would we put that in the _body_ or the _head_, and why?

Add an empty _division_ to the sample page.

Note: They should attempt to do this for a small period of time, and then we'll review the answer

---

### Exercise 1 - HTML

#### Answer

Divisions in a webpage typically go in the _body_ because they aren't as important and don't need to be loaded first.

{{#code "html"}}
<html>
	<head>
		<title>Example Web Page</title>
	</head>
	<body>
		<div>

		</div>
	</body>
</html>
{{/code}}

Note: Now might be a good time to talk about tabbing and why we do it (because tags have opening and closing tags, nesting can become confusing)
