$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })
  document.addEventListener("DOMContentLoaded", () => {
    const preferencesFilter = document.getElementById("preferences");
    const languageFilter = document.getElementById("language");
    const sortBy = document.getElementById("sort-by");
    const browseGrid = document.querySelector(".browse-grid");
    const movies = Array.from(browseGrid.children);
  
    // Apply filters and sort
    function applyFiltersAndSort() {
      const selectedPreference = preferencesFilter.value.toLowerCase();
      const selectedLanguage = languageFilter.value.toLowerCase();
      const selectedSort = sortBy.value;
  
      // Filter movies
      let filteredMovies = movies.filter(movie => {
        const moviePreference = movie.getAttribute("data-preference")?.toLowerCase() || "";
        const movieLanguage = movie.getAttribute("data-language")?.toLowerCase() || "";
  
        const matchesPreference = selectedPreference === "all" || moviePreference === selectedPreference;
        const matchesLanguage = selectedLanguage === "all" || movieLanguage === selectedLanguage;
  
        return matchesPreference && matchesLanguage;
      });
  
      // Sort movies
      if (selectedSort === "a-z") {
        filteredMovies.sort((a, b) => a.getAttribute("data-title").localeCompare(b.getAttribute("data-title")));
      } else if (selectedSort === "z-a") {
        filteredMovies.sort((a, b) => b.getAttribute("data-title").localeCompare(a.getAttribute("data-title")));
      }
  
      // Update the browse grid
      browseGrid.innerHTML = "";
      filteredMovies.forEach(movie => browseGrid.appendChild(movie));
    }
  
    // Event listeners
    preferencesFilter.addEventListener("change", applyFiltersAndSort);
    languageFilter.addEventListener("change", applyFiltersAndSort);
    sortBy.addEventListener("change", applyFiltersAndSort);
  });
  