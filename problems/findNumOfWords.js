var text = "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.";

/** Count each word in the string is repeated how many times
*
JavaScript 2
is 2
the 2
programming 1
language 1
of 1
HTML 1
and 1
Web. 1
easy 1
to 1
learn 1
*/

var textArray = text.split(" ");

console.log(textArray);

for(var i =0; i < textArray.lenght; i++) {

  var newArray = textArray.filter(function(item){
    return textArray[i] === item;
  });
  console.log(textArray[i], newArray.length);
}
