var pageCounter = 1;
var animslContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
ourRequest.onload = function() {    
    var ourData = JSON.parse(ourRequest.responseText);
     renderHTML(ourData);
};
ourRequest.send();
pageCounter++
if (pageCounter > 3) {
    btn.classList.add("hide-me");
}
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
    }

   animalContainer.insertAdjactHTML('beforeend', htmlString);
}