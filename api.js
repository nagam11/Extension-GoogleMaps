//Handle click events
function onClickHandler(info, tab) {
  var criteria = info.selectionText;
  searchInMaps(criteria);
};

//open Google Maps in a new tab
function searchInMaps(criteria) {
  chrome.tabs.create({url:"https://www.google.com/maps/search/" + criteria});
}
chrome.contextMenus.onClicked.addListener(onClickHandler);
//Configure the context menu for right click events
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Search in Maps";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

//Search and render result from maps
document.getElementById('submit').addEventListener('click',function(){
  var criteria = document.getElementById('search').value;
  window.location = "index.html?q=" + criteria;
});

var x = window.location.href;
var y = x.substring(71, x.length-8);
document.write('<div><iframe 	width="400"  height="400"  frameborder="0" style="border:0"src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAUG1jgsBghqRkt8py6Cx_HW5VusvNkm2Q&q=' + y + '" allowfullscreen></iframe></div>');
