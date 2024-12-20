//practicing how to manipulate the dom
const h1 = document.querySelector("h1");

h1.textContent = "practicals";

console.log(h1);

//arrays
let container = ["tree", "bridge", "beach", "butterfly"];
//want to know the length
console.log(container.length);
console.table(container);

//loops

//events
//1st access element
/*const box = document.getElementById("description");

box.addEventListener("mouseover", function () {
  box.style.fontSize = "1.1rem";
}); */

const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.margin = "2rem";
});

box.addEventListener("mouseout", function () {
  box.style.margin = "";
});

//function

//api fetch

//fetch
async function GetImage() {
  const response = await fetch("https://randomfox.ca/floof/");
  console.log(response);

  const data = await response.json();
  console.log(data);

  const wrangledData = data.image;
  return wrangledData;
}
//create element
const imageContainer = document.getElementById("apifetch");

function createImage(foxUrl) {
  const newImage = document.createElement("img");

  newImage.src = foxUrl;
  newImage.alt = "random fox images";
  newImage.className = "apiImage";

  imageContainer.appendChild(newImage);
}
//combine

async function finalData() {
  const lastData = await GetImage();
  createImage(lastData);
}

finalData();
finalData();
finalData();
