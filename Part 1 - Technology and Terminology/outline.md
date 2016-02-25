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

* So front end technologies are super powerful.  What can't they do?  If we can do all that on the front end, why do we need back end developers at all?
	* Because I'm one and I need to get paid.
	* The backend of a web application is a great place for sensitive data that you wouldn't want to expose to the client (medical/banking/etc)
	* It's a good place to store proprietary technology (google's algorithm, it's the secret sauce)
	* Significantly more giggling compared to front end

* Just like front end refers to everything that happens on the client (not a singular thing), back end refers to everything that happens on the server side.

* Databases
	* A database is a program that stores and retrieves information.
	* SQL/Relational
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
		* The above example lets us refer to a specific car by ID, but also get ALL cars that share certain properties (get all cars with green paint, made by lexus)

	* NoSQL/Schema-less
		* Names: MongoDB, CouchDB, RethinkDB, Cassandra
		* What is it good for: Storing and retrieving data that isn't a good fit for relational databases
		* What does it look like:
		```
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

* Languages
	* Much like JavaScript is used to provide interactivity to the front end of things, back end languages handle interactivity on the back end.

	* Names: PHP, JavaScript (Node.js), Java, Ruby on Rails
	* What do they look like?

	* PHP:
	```
	<?PHP
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

	* JavaScript/Node.js:
	```
	// this is a comment that describes what this code does
	const oneThing = "hello";
	const anotherThing = "world";
	const newThing = `${oneThing} ${anotherThing}`;
	console.log(newThing);
	```
	* PHP was originally created in 1994, and powers many well established web sites.
		* Facebook
		* Wikipedia
		* Wordpress
