const data = [
  { title: "Home Page", url: "index.html" },
  { title: "About Page", url: "about.html" },
  { title: "Portfolio Page", url: "portfolio.html" },
  { title: "Contact Page", url: "contact.html" },
  { title: "CV", url: "portfolio.html" },
  { title: "github", url: "https://github.com/" },
  // Items to search for...
];

class SearchResults {
  constructor(data) {
    this.data = data;
    this.resultsList = document.getElementById("results-list");
  }

  filterResults(searchQuery) {
    const words = searchQuery.split(/\s+/);

    if (words.length === 0) {
      return [];
    }

    const matchingResults = this.data.filter((result) => {
      const title = result.title.toLowerCase();
      return words.some((word) => new RegExp(`\\b${word}\\b`).test(title));
    });

    return matchingResults;
  }

  renderResults(matchingResults) {
    this.resultsList.innerHTML = "";

    if (matchingResults.length === 0) {
      this.resultsList.innerHTML = '<li>No results found.</li>';
    } else {
      matchingResults.forEach((result) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = result.url;
        a.textContent = result.title;
        li.appendChild(a);
        this.resultsList.appendChild(li);
      });
    }
  }
}

function hideResults() {
  const searchResultsDisplay = document.querySelector(".search-results");
  searchResultsDisplay.style.display = "none";
}

function search() {
  const searchQuery = document.getElementById("search-box").value.toLowerCase();
  const searchResults = new SearchResults(data);
  const matchingResults = searchResults.filterResults(searchQuery);
  searchResults.renderResults(matchingResults);
  const searchResultsDisplay = document.querySelector(".search-results");
  searchResultsDisplay.style.display = "block";
}

function searchOnEnter(event) {
  if (event.key === 'Enter' || event.key === document.getElementById("Search-button")) {
    search();
  }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

function DDmenuClickHandler() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

/*
  window.onclick = function(event) {
    if (!event.target.matches('.fa-solid')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
*/

document.addEventListener("DOMContentLoaded", function() {

    const isDarkModeEnabled = JSON.parse(localStorage.getItem('darkModeEnabled'));
    if (isDarkModeEnabled) {
        document.body.classList.add("dark-mode");
        var darkModeToggle = document.getElementById("dark-mode-toggle");
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }


    var darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", function() {
            if (this.checked) {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }

            localStorage.setItem('darkModeEnabled', this.checked);
        });
    }


    var fadeElements = document.querySelectorAll(".fade-in");
    for (var i = 0; i < fadeElements.length; i++) {
        fadeElements[i].classList.add("fade-in");
    }


        
    });
    
