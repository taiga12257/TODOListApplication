import "./styles.css";

const onClickAdd = () => {
  //Get the value of textbox and initialize it
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//Delete the parent tag from incomplete list when the delete button clicked
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

//The function to add to incomplete list
const createIncompleteList = (text) => {
  //Generate "div" tag
  const div = document.createElement("div");
  div.className = "list-row";

  //Generate "li" tag
  const li = document.createElement("li");
  li.innerText = text;

  //Generate button(complete) tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", () => {
    //Delete the parent tag from incomplete list when the delete button clicked
    deleteFromIncompleteList(completeButton.parentNode);

    //The adding element to complete list
    const addTarget = completeButton.parentNode;

    //Get the text in TODO list
    const text = addTarget.firstElementChild.innerText;

    //Initialize div and below
    addTarget.textContent = null;

    //Generate the li tag
    const li = document.createElement("li");
    li.innerText = text;
    //Generate backbutton tag
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.addEventListener("click", () => {
      //Delete the parent tag from complete list when the back button clicked
      deleteFromCompleteList(backButton.parentNode);

      //Get the text in TODO list
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    ////Set each element as a child element of the "div" tag
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // Add to complete list
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //Generate button(delete) tag
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    //Delete the parent tag from incomplete list when the delete button clicked
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //Set each element as a child element of the "div" tag
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //Add to incomplete list
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
