document.getElementById("btn").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt", true);

  //Optional for loading bar
  xhr.onprogress = function () {
    console.log("Loading...");
  };

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhr.onerror = function () {
    console.log("Error loading data");
  };

  xhr.send();
}
