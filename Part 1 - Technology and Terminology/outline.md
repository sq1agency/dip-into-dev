# Part 1 - Technology and Terminology Outline

## Section 1 - Overview
* What's the purpose of this training?
	* Help everyone do their jobs better
	* Make better and more informed choices

* What will we be covering?
	* Technology and terminology
	* What they mean
	* Why it matters
	* How it's used

* What is "front end" and "back end", besides an excuse to giggle in meetings?
	* Client <--> Cloud <--> Server
	* Front End refers to things that happen on the client's side
	* Back End refers to things that happen on the server's side
	* Cloud refers to everything in between

* So wait, I saw the picture, but what do you mean the "client" and "server"
	* When a user visits a web page, that users's computer can read data, format that data, and perform actions with that data
	* Front End developers deal with things that happen exclusively on the client's computer (or the front end)
	* Back End developers deal with things that happen on the server.

* You guys all look the same, so if I need a developer, I can just grab one, right?
	* Nope!
	* We typically differentiates ourselves according to our specialties
	* Front End, Back End, Full Stack

* Why can't you just get good at all of it?
	* There's just too much!
	* There's more all the time!
	* Our brains can't fit it all.
	* Keeping up with our specialty is really hard.

* So what does you guys do? Sit on the couches and play games all day?
	* I wish!
	* We do development, which means that we take mockups, ideas, and concepts and turn them into products.
	* Our products happen to be web applications or web sites (we'll use these terms interchangeably)

* What's a web application?
	* It's a collection of text files that computers can understand.
	* Aren't there images and fonts too? Yes.  Don't be smart.

* Text files?  That's not very descriptive.  What kind of text files?
	* Well that depends on the "stack" that you are using.  (LAMP/MEAN/etc)
	* What stack do WE use? (leads into front end)

## Section 2 - Front End

* Web application structure
	* HTML
	* CSS
	* JavaScript

* HTML controls the structure of the web application.
	* Do you want to type a sentence and make a _strong_ point about a word or phrase?  Use the `<strong>` tag.
	* Do you want to take several sentences and make them into a _paragraph_?  Use the `<p>` tag.
	* Do want to group several paragraphs into their own section, or _division_?  Use the `<div>` tag.
	* That and everything else goes in the _body_ of the page and is wrapped in a `<body>` tag.
	* HTML is nothing but tags with information inside of them.
	* Show example and talk about closing tags and possibly indention?

```
<body>
	<div>
		<p>
		Paragraph 1 goes here, and here's some <strong>strong</strong> text.
		</p>
		<p>
		Paragraph 2 goes here, and here's some <strong>strong</strong> text in it too.
		</p>
	</div>
</body>
```

* CSS controls the look and feel of the web application
	* Do you want to make that _strong_ text from earlier red? Use `color: red;`.
	* Do you want to center a _paragraph_? Use `text-align: center;`.
	* Do you want to make the entire _body_ of the web application blue? Use `background-color: blue;`.
	* CSS is a collection of properties that we can give HTML tags to change their look and feel.
	* Show example and explain how properties can be grouped by element or class?

```
strong {
	color: red;
}

p {
	text-align: center
}

body {
	background-color: blue;
}
```

* JavaScript (JS) controls interactivity in the web application
	* Do you want to take one thing (string/int) and combine it with another? Use `newThing = oneThing + anotherThing;`
	* Do you want to tell the user about that new thing? Use `alert("Check out this thing! --> " + newThing);` (talk concatenation?)

## Section 3 - Back End
