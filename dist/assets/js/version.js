document.querySelector('#version-index-toggle a').addEventListener("click", function() {
  var indexContent = document.getElementById("version-index-content");
  if (indexContent.style.display === "none") {
    document.querySelector('#version-index-toggle a').innerHTML = "{{translations.chapters}} (-)";
    indexContent.style.display = "block";
  } else {
    document.querySelector('#version-index-toggle a').innerHTML = "{{translations.chapters}} (+)";
    indexContent.style.display = "none";
  }
});

var links = document.querySelectorAll('#version-index-content a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    document.querySelector('#version-index-toggle a').innerHTML = "{{translations.chapters}} (+)";
    document.getElementById("version-index-content").style.display = "none";
  });
}