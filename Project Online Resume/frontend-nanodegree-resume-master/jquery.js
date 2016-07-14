$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

// add
microsoft
<head>
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.2.min.js"></script>
</head>


Google CDN:
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
</head>

Basic syntax is: $(selector).action()

A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
Examples:

$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".


//
/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList


navList = $('.nav-list');
var firstitem = navList.children().first();
var a = firstitem.find('a');
a.attr('href' , '#1');
// change value according to whatevere we r typing

$('#input').on('change',function(){
  var val,h1;
  val = $('#input').val();
  h1 = $('.articles').children('h1');
  h1.text(val);
});

/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item");
var u1 = articleItems.find('ul');
u1.remove();
