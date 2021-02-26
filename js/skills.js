let current = null;
for (let element of document.getElementsByClassName("skill-image")) {
  element.onclick = function () {
    select(element);
  }
  if (element.alt === "information") {
    select(element);
  }
}

function select(element) {
  let content = document.getElementById("skills-content");
  let request = getText(element.alt);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      content.innerHTML = request.responseText;

      if (current != null) {
        current.classList.remove("selected-skill");
      }

      current = element;
      element.classList.add("selected-skill");
    }
  }
}

function getText(skill) {
  // read text from URL location
  var request = new XMLHttpRequest();
  request.open('GET', '/skills/' + skill + '/index.html', true);
  request.send(null);

  return request;
}
