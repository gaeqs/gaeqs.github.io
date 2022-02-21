document.getElementById("demo_input_button").onclick = function (event) {

  let video = document.getElementById("demo_input").value;
  let output = document.getElementById("demo_output");

  output.innerText = "Loading...";

  const request = new XMLHttpRequest();
  const url = "https://jyddemo.grialc.com/jyddemo?url=".concat(video);
  request.open("GET", url, true);

  request.onload = function (pEvent) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        parse(request.responseText, output);
      } else {
        output.innerText = "Error! " + request.status;
      }
    }
  }

  request.send();
}

function parse(string, element) {
  element.innerHTML = "<h4>Protected videos may not work in your explorer: they can only be accessed by the " +
    "machine sending the request to the YouTube server!</h4>";
  let options = string.split('\n')
  options.forEach(function (value, index, array) {
    let data = value.split('\t');
    element.innerHTML += "<a href='" + data[1] + "'> <h5>" + data[0] + "</h5> </a>";
  });
}
