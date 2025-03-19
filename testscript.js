myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "36px";
}
//Make the text green and larger when clicked

myitem.addEventListener("mouseout", onMouseOut);

function onMouseOut() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}
//Return the text to its original state when the mouse is no longer hovering over it

thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    otheritem.style.color = "red";  
}
//Make the text red when the button is clicked

button2 = document.getElementById("button2");
otheritem2 = document.getElementById("buttontest2");

button2.addEventListener("click", onButtonClick2);

function onButtonClick2() {
    otheritem2.style.backgroundColor = "lightblue";
}
//Make the background light blue when the button is clicked

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
//Change the text to whatever is entered in the text box

resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", onReset);

function onReset() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
    otheritem.style.color = "";
    otheritem2.style.backgroundColor = "";
    otheritem.innerHTML = "For example, Alexander the Great, who led his army across much of the world and conquered it in the name of the Roman Empire. This resulted in several nations having to drastically change their way of life, and later in history, influenced how their culture developed. On the other side of the debate, it is commonly agreed that the fall of the Roman Empire was caused by economic instability, social decline, and invasions from other tribes. These factors seem like a combination of different problems that no one individual may have caused, and that is correct in my opinion. However, I think it is possible that due to the Roman Empire expanding so rapidly and widely, that it began to stretch itself too thin. Eventually, several problems began to arise as a result of the empire being too spread thin to properly manage all of its territories. Other nations may have seen this weakness as well and eventually invaded.";
    myinput.value = "";
}
//Reset all changes made by the buttons and text entry box

// Add event listener for expandimage
expandImage = document.getElementById("expandimage");

expandImage.addEventListener("click", toggleImageSize);

function toggleImageSize() {
    expandImage.classList.toggle("expanded");
}


