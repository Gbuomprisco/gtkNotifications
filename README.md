=== gtkNotifications ===

A JQuery Plugin to make awesome notifications based on Ubuntu style.

== Needed files ==
	
	css/notifications.css
	js/notifications.js
	js/jquery-1.9.1.js or lower

== How to run it ==

After you imported the script and the css style, let's make some notification:

say you have a button:
	
	<input type='button' id='myButton' />

and a text you wish to display as a notification:
	
	<div id='notification' class='notify'>This is my first notification!</div>

You want to display a notification if you click it:

	$('#myButton').click(function(){
		$('#notification').notify();
	});

You'll see your notification appear!

But... let's edit something. These are the available options.