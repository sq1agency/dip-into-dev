# Part 1 - Technology and Terminology Outline

`HELLO WORLD!`

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
	* Front End refers to things that happen on the client's side (the browser)
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
	* We also collaborate and bounce ideas off of each other so we do tend to talk a lot

* What's a web application?
	* It's a collection of text files that computers can understand.
	* Aren't there images and fonts too? Yes.  Don't be smart.

* Text files?  That's not very descriptive.  What kind of text files?
	* Well that depends on the "stack" that you are using.  (LAMP/MEAN/etc)
	* What stack do WE use? (leads into front end)

## Section 2 - Front End

* Web application structure
	* HTML - Basic outline and structure of a web page
	* CSS - Make it look all pretty
	* JavaScript - Make it do cool things

### HTML
* HTML controls the structure of the web application.
	* Do you want to type a sentence and make a _strong_ point about a word or phrase?  Use the `<strong>` tag.
	* Do you want to take several sentences and make them into a _paragraph_?  Use the `<p>` tag.
	* Do want to group several paragraphs into their own section, or _division_?  Use the `<div>` tag.
	* That and everything else goes in the _body_ of the page and is wrapped in a `<body>` tag.
	* HTML is nothing but tags with information inside of them.
	* Show example and talk about closing tags and possibly indention?

```html
<html>
	<head>
		<title>Example Web Page</title>
	</head>
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
</html>
```

### CSS
* CSS controls the look and feel of the web application
	* Do you want to make that _strong_ text from earlier red? Use `color: red;`.
	* Do you want to center a _paragraph_? Use `text-align: center;`.
	* Do you want to make the entire _body_ of the web application blue? Use `background-color: blue;`.
	* CSS is a collection of properties that we can give HTML tags to change their look and feel.
	* Show example and explain how properties can be grouped by element or class?

```css
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
```

### JavaScript
* JavaScript (JS) controls interactivity in the web application
	* Do you want to assign a word to a thing (variable) that you can use in place of it? Use `const oneThing = "hello";`
	* Do you want to take one thing (string/int) and combine it with another? Use `newThing = oneThing + anotherThing;`
	* Do you want to tell the user about that new thing? Use `alert("Check out this thing! --> " + newThing);` (talk concatenation?)
	* JavaScript is wonderful, but not always terribly concise.  HTMl and CSS and great for single one line examples of basic functionality, but that's not something JavaScript excels at.  Stay tuned for more examples.

```javascript
const oneThing = "hello";
const anotherThing = "world";

let newThing = oneThing + ' ' + anotherThing;

alert(newThing);
```

## Section 3 - Back End

* So front end technologies are super powerful.  What can't they do?  If we can do all that on the front end, why do we need back end developers at all?
	* Because I'm one and I need to get paid.
	* The backend of a web application is a great place for sensitive data that you wouldn't want to expose to the client (medical/banking/etc)
	* It's a good place to store proprietary technology (google's algorithm, it's the secret sauce)
	* Significantly more giggling compared to front end

* Just like front end refers to everything that happens on the client (not a singular thing), back end refers to everything that happens on the server side.

### Databases

* A database is a program that stores and retrieves information.

#### SQL/Relational
* Names: MySQL, MSSQL, Postgres, MariaDB
* What is it good for: Storing and retrieving data that is related to other data
* What does that look like:
```
Car Table:
 - ID: 18354
 - Mfg: 3
 - Color: 1
 - Year: 143

Mfg Table:
...
# 2: Honda
# 3: Toyota
# 4: Lexus
...

Color Table:
# 1: Red
# 2: Blue
# 3: Green
...

Year Table:
...
# 142: 2011
# 143: 2012
# 144: 2013
...
```
* The above example lets us refer to a specific car by ID, but also get ALL cars that share certain properties (get all cars with green paint, made by Lexus)

#### NoSQL/Schema-less
* Names: MongoDB, CouchDB, RethinkDB, Cassandra
* What is it good for: Storing and retrieving data that isn't a good fit for relational databases
* What does it look like:
```json
{
	"car": {
		"mfg": "Toyota",
		"color": "Red",
		"year": 2012
	}
}
```
* The above example describes the same car, but in JSON.  Cars happen to not be a great example, but here we are.
* Proper uses would be things that are constantly changing, or different every time (draw something).

### Languages
* Much like JavaScript is used to provide interactivity to the front end of things, back end languages handle interactivity on the back end.

* Names: PHP, JavaScript (Node.js), Java, Ruby on Rails
* What do they look like?

##### PHP:
```php
<?php
	// this is a comment that describes what this code does
	$oneThing = "hello";
	$anotherThing = "world";
	$newThing = $oneThing . " " . $anotherThing;

	echo $newThing;
?>
```
* PHP was originally created in 1994, and powers many well established web sites.
	* Facebook
	* Wikipedia
	* Wordpress

##### JavaScript/Node.js:
```javascript
// this is a comment that describes what this code does
const oneThing = "hello";
const anotherThing = "world";
const newThing = `${oneThing} ${anotherThing}`;

console.log(newThing);
```
* Node.js was originally created in 2009, and is used by many major corporations.
	* IBM
	* Netflix
	* Walmart

#### All the others (Java, Ruby on Rails, etc.)

##### Java
```java
String oneThing = "hello";
String anotherThing = "world";
String newThing = oneThing + " " + anotherThing;

System.out.println(newThing);
```

##### Ruby
* See Pierce Moore
```ruby
def helloWorld
	@oneThing = 'hello'
	@anotherThing = 'world'
	@newThing = "#{oneThing} #{anotherThing}"
end
```
```html
<h1><%= @newThing %></h1>
```

* There are a bunch of backend languages, but PHP and Node.js are the two major ones we use here.
* Most of them look similar, and all kind of do the same things.  Each has advantages and disadvantages, but that's outside the scope of this training.

## Section 4 - Other Tools

### Text Editor
* So if code is all just text files anyway, I can just use Word, right?
[ Insert picture of source code written in Word]
* That's pretty horrible.
* There are text editors out there specifically for writing code.
	* Names: Sublime, Atom, PHPStorm/WebStorm
* Explain syntax highlighting
[ Insert picture of the same code, but in Atom]

### Version Control

* Names: Git, Mercurial, SVN, Team Foundation Server
* Why do we need it: It makes it almost impossible to ever lose work by savings *EVERY* change to *EVERY* file in a project.
	* Want to blame someone for your project breaking over the weekend?  Version control can do that.
	* Want to see how something worked because someone broke it?  Version control can do that.
	* Want to completely undo your changes that totally worked on your local machine but totally don't work anywhere else?  Version control can do that.

* GitHub
	* GitHub is the site we use to store all of our projects.
	* Most of our projects are closed source (for only us to see and use), but some are open source (open for the community to use).
	* Including this one!
	* Give out link.

## Section 5 - Wrap Up / Questions

* Recap / Give out link
* Questions?
