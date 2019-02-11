// var liElements = document.getElementsByTagName("li");
// console.log(liElements);

// var howManyLi = liElements.length;
// console.log(howManyLi);

//  for (var i = 0; i < howManyLi; i++) {
//      if (liElements[i].innerHTML === "") {
//      liElements[i].innerHTML = "My name is";
//      }
//      }



//       var parentNode = document.getElementById("ol");
//  var nodeList = parentNode.childNodes;
//  console.log(nodeList);

//  var howManyKids = nodeList.length;
//  console.log(howManyKids);




// //   var numberPics = 0;
// //  for (var i = 0; i < howManyKids; i++) {

// //  if (nodelist[i].nodeName.toLowerCase() === "img") {
// //  numberPics++;
// //  }
// //  }



//  var target = document.getElementById("p1");
//  var hasClass = target.hasAttribute("class");



//  var target = document.getElementById("p1");
//  var hasClass = target.hasAttribute("class");
//  console.log(hasClass);

// var target = document.getElementById("ol");
// var attVal = target.getAttribute("id");
// console.log(attVal);



// var list = document.getElementsByTagName("p");
// console.log(list);



// var list = document.getElementById("p1").childNodes;
// console.log(list)



// var list = document.getElementById("p1").attributes;
// console.log(list)



// var nodeToAdd = document.createElement("p");
// console.log(nodeToAdd)



// var imgNodeToAdd = document.createElement("img");
// console.log(imgNodeToAdd)


 var parentDiv = document.getElementById("div1");
 var newParagraph = document.createElement("h1");
 var t = document.createTextNode("Todo App");
 newParagraph.appendChild(t);
 parentDiv.appendChild(newParagraph);
var x = document.createElement("BUTTON");

//  console.log(parentDiv);



//  var parentDiv = document.getElementById("div1");
//  var newParagraph = document.createElement("");
//  var t = document.createTextNode("Hello world!");
//  newParagraph.appendChild(t);
//  paragraph1 = parentDiv.firstChild;
//  parentDiv.insertBefore(newParagraph, paragraph1);



// var myVar = document.getElementById("div1")
// var myButton = document.createElement("BUTTON")
// var text = document.createTextNode("CLICK ME")
// myButton.appendChild(text)
// document.body.appendChild(myButton);



var x = document.createElement("BUTTON");
var t = document.createTextNode("Click me");
x.appendChild(t);
document.body.appendChild(x);


// var rizwan = document.getElementById("d");
// var btn = document.createElement("BUTTON");
// var t = document.createTextNode("CLICK ME");
// btn.appendChild(t);
// document.body.appendChild(btn);