function alertFunc(){
  try{
   
   if(document.getElementById('email')){
    throw new Error('No email')
   }
  }
   catch(error){
    console.error('Error in email')
   }
  
  alert("Message send!")
}





async function getDog(){
  try{
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if(!response.ok){
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const imageUrl= data.message;
    dogImage.src = imageUrl;

  } catch(error){
    console.error('Error fetching random dog:', error);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const dogImage = document.getElementById('dogImage');
  getDog();
})
     



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


    var modal = document.getElementById("myModal");

    var images = document.querySelectorAll(".myImg");

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");


    function openModal(imgElement) {
        modal.style.display = "block";
        modalImg.src = imgElement.src;
        captionText.innerHTML = imgElement.alt;
    }


    function closeModal() {
        modal.style.display = "none";
    }


    images.forEach(function(img) {
        img.addEventListener("click", function() {
            openModal(img);
        });
    });


    var span = document.getElementsByClassName("close")[0];
    span.onclick = closeModal;


    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
        });

        
    });
    
