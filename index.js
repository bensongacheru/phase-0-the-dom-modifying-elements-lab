const mainElement = document.getElementById("main");
mainElement.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name or desired text

document.body.appendChild(newHeader); // Append newHeader to the document body or any desired location


     
// Write your code here!