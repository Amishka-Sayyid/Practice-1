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

// try adding a quote api and appedning it

//1.fetch
const url =
  "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "113c364abamsh56dec0b45d4deb3p1c5155jsna0cda7243a30",
    "x-rapidapi-host":
      "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
  },
};
async function GetQuote() {
  const response2 = await fetch(url, options);
  console.log(response2);

  // Check if the response is JSON or plain text
  let quote = "No quote available",
    quoteAuthor = "Unknown";

  try {
    // Attempt to parse the response as JSON
    const parsedData = await response2.json(); // Parse directly as JSON
    quote = parsedData.text; // Assuming the response contains 'text' for the quote
    quoteAuthor = parsedData.author || "Unknown"; // Handle missing author
  } catch (error) {
    // Fallback to text-based parsing if JSON parsing fails
    const datanew = await response2.text();
    const parts = datanew.split(" - ");
    quote = parts[0];
    quoteAuthor = parts.length > 1 ? parts[1] : "Unknown";
  }

  return { quote, quoteAuthor };
}
//2.create element

const quoteContainer = document.getElementById("quoteApi");

function QuoteElement(quote, quoteAuthor) {
  const paragraph = document.createElement("p");
  const author = document.createElement("h5");
  author.textContent = quoteAuthor;
  paragraph.textContent = quote;

  paragraph.className = "quoteStyle";

  quoteContainer.appendChild(paragraph);
  paragraph.appendChild(author);
}
//3.combine
async function finalQuoteData() {
  // Get the quote and author from the API
  const { quote, quoteAuthor } = await GetQuote();
  // Display the quote and author using QuoteElement
  QuoteElement(quote, quoteAuthor);
}
// Call the final function to initiate the process
finalQuoteData();

//form

//1.access dom
const myForm = document.getElementById("userForm");

//2.event handler
myForm.addEventListener("submit", handleMyForm);

//call back function handleMyForm
function handleMyForm(eventSubmit) {
  eventSubmit.preventDefault();

  //make template object
  const myFormObject = new FormData(myForm);
  console.log(myFormObject);

  //input object
  const myFormInput = Object.fromEntries(myFormObject);
  console.log(myFormInput);

  alert("data was sent successfully");
}
