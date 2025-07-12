function openSideMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

function closeSideMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

function toggleSearch() {
  var searchBar = document.getElementById("searchBar");
  searchBar.style.display = (searchBar.style.display === "block") ? "none" : "block";
}
