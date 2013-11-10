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

	<input type='button' id='myButton' value='Click here' />


#####Notice the class of the div element: it is "notify", and it should be for every notification you'll create

You want to display a notification if you click it:

	$('#myButton').click(function(){
		$.fn.notify(options);
	});

Et voilà!

####Types
You have three choices to make your style:
* default notification, that is the default style
* success notification, adding the class "notify-succes"
* error notification, adding the class "notify-error"

There are two ways to make it working:
#####HTML

	<div id='notification' class='notify notify-success'>Great! You won!</div>

#####Javascript
	$.fn.notify({
		'type': 'success'
	});

#####Remember that if you change the type as a plugin attribute, it'll have the priority on the class.

###Available options
But... let's edit something. These are the available options:
* position: a dictionary that contains the absolute coordinates of your notification. Default {'top': '5%', 'left': '75%'}
* type: the style of the notification. Default {'type': 'default'}
* duration: the durate of the notification on the page in ms

Say you want to display a succesfull notification in the center of the page, that lasts 5 seconds:

#####HTML
	<input type='button' id='myButton' value='Click here' />
	<div id='notification' class='notify'>This is a default notification</div>

#####Javascript
	Let's examine the available options:

	$(document).ready(function(){
		$('#myButton').click(function(){
			$.fn.notify({
				'type': 'success',
				'position': {'top': '40%', 'left': '35%'},
				'duration': 5000,
				'close_button': true,
				'text': 'This is my notification!'
			});
		});
	});

#####Well done! Too simple!
