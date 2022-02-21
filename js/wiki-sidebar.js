let checkBoxValues = JSON.parse(localStorage.getItem("wiki-checkboxes")) || {};
let checkboxes = document.getElementsByClassName("wiki-checkbox");

for (let obj in checkBoxValues) {
  document.getElementById(obj).checked = checkBoxValues[obj];
}

for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", (event) => {
    console.log("CHANGE " + event.currentTarget.id);
    checkBoxValues[event.currentTarget.id] = event.currentTarget.checked;
    localStorage.setItem("wiki-checkboxes", JSON.stringify(checkBoxValues));
  });
}
