### Back End

* So front end technologies are super powerful.  What can't they do?  If we can do all that on the front end, why do we need back end developers at all?
	* Because I'm one and I need to get paid.
	* The backend of a web application is a great place for sensitive data that you wouldn't want to expose to the client (medical/banking/etc)
	* It's a good place to store proprietary technology (google's algorithm, it's the secret sauce)
	* Significantly more giggling compared to front end

---

### Back End

* Just like front end refers to everything that happens on the client (not a singular thing), back end refers to everything that happens on the server side.

---

### Back End - Databases

* A database is a program that stores and retrieves information.

---

### Back End - Databases - SQL/Relational
* Names: MySQL, MSSQL, Postgres, MariaDB
* What is it good for: Storing and retrieving data that is related to other data

---

### Back End - Databases - SQL/Relational
* What does that look like:
<pre>
Car Table:
 - ID: 18354
 - Mfg: 3
 - Color: 1
 - Year: 143
</pre>
<pre>
Mfg Table:
...
# 2: Honda
# 3: Toyota
# 4: Lexus
...
</pre>
<pre>
Color Table:
# 1: Red
# 2: Blue
# 3: Green
...
</pre>
<pre>
Year Table:
...
# 142: 2011
# 143: 2012
# 144: 2013
...
</pre>

---

### Back End - Databases - SQL/Relational
* The previous example lets us refer to a specific car by ID, but also get ALL cars that share certain properties (get all cars with green paint, made by Lexus)

---

### Back End - Databases - NoSQL/Schema-less
* Names: MongoDB, CouchDB, RethinkDB, Cassandra
* What is it good for: Storing and retrieving data that isn't a good fit for relational databases

---

### Back End - Databases - NoSQL/Schema-less
* What does it look like:

{{#code "json"}}
{
	"car": {
		"mfg": "Toyota",
		"color": "Red",
		"year": 2012
	}
}
{{/code}}


---

### Back End - Databases - NoSQL/Schema-less
* The previous example describes the same car, but in JSON.  Cars happen to not be a great example, but here we are.
* Proper uses would be things that are constantly changing, or different every time (draw something).

---

### Back End - Languages
* Much like JavaScript is used to provide interactivity to the front end of things, back end languages handle interactivity on the back end.
* Names: PHP, JavaScript (Node.js), Java, Ruby on Rails
* What do they look like?

---

### Back End - Languages - PHP
* PHP was originally created in 1994, and powers many well established web sites.
	* Facebook
	* Wikipedia
	* Wordpress

{{#code "php"}}
<?php
	// this is a comment that describes what this code does
	$oneThing = "hello";
	$anotherThing = "world";
	$newThing = $oneThing . " " . $anotherThing;

	echo $newThing;
?>
{{/code}}


---

### Back End - Languages - JavaScript/Node.js
* Node.js was originally created in 2009, and is used by many major corporations.
	* IBM
	* Netflix
	* Walmart

{{#code "javascript"}}
// this is a comment that describes what this code does
const oneThing = "hello";
const anotherThing = "world";
const newThing = `${oneThing} ${anotherThing}`;

console.log(newThing);
{{/code}}


---

### Back End - Languages - Java

{{#code "java"}}
String oneThing = "hello";
String anotherThing = "world";
String newThing = oneThing + " " + anotherThing;

System.out.println(newThing);
{{/code}}



### Back End - Languages - Ruby
{{#code "ruby"}}
def helloWorld
	@oneThing = 'hello'
	@anotherThing = 'world'
	@newThing = "#{oneThing} #{anotherThing}"
end

<h1><%= @newThing %></h1>
{{/code}}


---

### Back End - Languages
* There are a bunch of backend languages, but PHP and Node.js are the two major ones we use here.
* Most of them look similar, and all kind of do the same things.  Each has advantages and disadvantages, but that's outside the scope of this training.

---
