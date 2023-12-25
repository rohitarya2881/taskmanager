// Selecting DOM elements
const addForm = document.querySelector("#additems");
const search = document.querySelector(".search");
const listItemsContainer = document.querySelector(".listitem");
const mainFrame = document.querySelector(".mainframe");
const taskClear = document.querySelector(".taskclear");

// Initializing variables
let numberOfItems = 0;
let stringNumberOfItems = "";

// Function to add list item
addForm.addEventListener("submit", (event) => {
  function addList(value) {
    // Selecting relevant DOM elements
    const taskList = document.querySelector(".tasklist");
    const listItemContainer = document.querySelector(".listitem");
    const listItem = document.createElement("li");

    // Creating a paragraph element to hold the task text
    const paragraph = document.createElement("p");
    const node = document.createTextNode(value);
    paragraph.appendChild(node);

    // Appending the paragraph and delete button to the list item
    listItem.appendChild(paragraph);
    listItem.innerHTML +=
      '<button class="deleteButton"><i class="fa fa-trash" aria-hidden="true" class="icons" id="delete"></i></button>';

    // Appending the list item to the list container
    listItemContainer.appendChild(listItem);

    // Updating the count of items
    numberOfItems += 1;
    console.log(numberOfItems);

    // Updating the message displayed at the bottom
    spanMessage.innerHTML = "It has" + " " + numberOfItems + " " + "items";
  }

  // Preventing form submission and processing data
  event.preventDefault();
  const filledData = addForm.filledtext.value;
  const taskList = document.querySelector(".tasklist");
  const listItemContainer = document.querySelector(".listitem");
  addList(filledData);
  console.log(taskList);
  addForm.filledtext.value = "";
});

// Displaying the number of items dynamically
const messageContainer = document.createElement("div");
messageContainer.setAttribute("class", "message");
const spanMessage = document.createElement("span");
stringNumberOfItems = String(numberOfItems);
console.log(`stringNumberOfItems ${stringNumberOfItems}`);
spanMessage.innerHTML = "It has" + " " + stringNumberOfItems + " " + "items";
const clearButton = document.createElement("button");
clearButton.innerText = "clear";
clearButton.setAttribute("class", "clear");
messageContainer.appendChild(spanMessage);
messageContainer.appendChild(clearButton);
taskClear.appendChild(messageContainer);

// Delete functionality
listItemsContainer.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target.classList.contains("fa")) {
    // Removing the list item on delete button click
    event.target.parentElement.parentElement.remove();

    // Updating the count of items
    numberOfItems -= 1;
    spanMessage.innerHTML = "It has" + " " + numberOfItems + " " + "items";
  }
});

// Search bar and filtering
search.addEventListener("keyup", (event) => {
  // Getting the search input value and trimming whitespace
  const typeValue = search.task.value.trim();

  // Filtering and showing/hiding list items based on the search value
  filterListItems(typeValue);
});

// Resetting search bar input
search.addEventListener("click", (event) => {
  if (event.target.classList.contains("resets")) {
    // Resetting the search input
    search.reset();

    // Getting the search input value after reset and trimming whitespace
    const typeValue = search.task.value.trim();

    // Filtering and showing/hiding list items based on the search value
    filterListItems(typeValue);
  }
});

// Filter list function for filtering
function filterListItems(value) {
  // Selecting the list item container and its children
  const listItemContainer = document.querySelector(".listitem");
  const listItems = listItemContainer.children;
  const listArray = Array.from(listItems);

  // Filtering and hiding elements
  listArray
    .filter((listItem) => !listItem.textContent.includes(value))
    .forEach((element) => element.classList.add("hide"));

  // Filtering and showing elements
  Array.from(listItems)
    .filter((listItem) => listItem.textContent.includes(value))
    .forEach((element) => element.classList.remove("hide"));
}

// Clear button functionality
const clearButtonContainer = document.querySelector(".taskclear");
clearButtonContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("clear")) {
    // Selecting the list item container and its children
    const listItemContainer = document.querySelector(".listitem");
    const listItems = listItemContainer.children;
    const listArray = Array.from(listItems);

    // Removing all elements and updating the count
    listArray.forEach((element) => {
      element.remove();
      numberOfItems -= 1;
      spanMessage.innerHTML = "It has" + " " + numberOfItems + " " + "items";
    });
  }
});
