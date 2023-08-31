// Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("SPAN");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myNodeList[i].appendChild(span);
}



// Click on a close button to hide the current list item
function myFunction() {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
     
    }; 
  }
}
myFunction();


// Add a "checked" symbol when clicking on a list item
function checkedFunction() {
  let list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}
checkedFunction();

//Change the color of the header to grey when hovered over
document.getElementById("header").addEventListener("mouseover", mouseOver);
document.getElementById("header").addEventListener("mouseout", mouseOut);
function mouseOver() {
  document.getElementById("header").style.color = "grey";
}
function mouseOut() {
  document.getElementById("header").style.color = "black";
}

// Create a new list item when clicking on the "Add" button
function newItem() {
  var li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Please type to add to the list!");
  } else {
    document.getElementById("ul-items").appendChild(li);
  }
}
  function lastFunction() {
  document.getElementById("input").value = "";
  let span = document.createElement("SPAN");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  document.getElementById('ul-items').window.li.appendChild(span);
  };


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
      }
  }
lastFunction();
newItem();


  
  



