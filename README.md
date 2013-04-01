#gtkNotifications
-----------------

###What is it
A JQuery Plugin to make awesome notifications based on Ubuntu style.

###Needed files
	
	css/notifications.css
	js/notifications.js
	js/jquery-1.9.1.js or lower

###How to run it

After you imported the script and the css style, let's make some notification:

say you have a button:
	
	<input type='button' id='myButton' />

and a text you wish to display as a notification:
	
	<div id='notification' class='notify'>This is my first notification!</div>

You want to display a notification if you click it:

	$('#myButton').click(function(){
		$('#notification').notify();
	});

Et voilà!

####Types
You have three choices to make your style:
*default notification, that is the default style
*success notification, adding the class "notify-succes"
*error notification, adding the class "notify-error"

There are two ways to make it working:
*HTML
	<div id='notification' class='notify notify-success'>Great! You won!</div>

*Javascript
	$('#notification').notify({
		'type': 'success'
	});
#####Remember that if you change the type as a plugin attribute, it'll has the priority on the class.

###Available options
But... let's edit something. These are the available options:
* position: a dictionary that contains the absolute coordinates of your notification. Default {'top': '5%', 'left': '75%'}
* type: the style of the notification. Default {'type': 'default'}
* duration: the durate of the notification on the page