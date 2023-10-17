document.addEventListener('DOMContentLoaded', () => {
  const dogImage = document.getElementById('dogImage');
  
  async function getDog() {
      try {
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          const imageUrl = data.message;
          dogImage.src = imageUrl;
      } catch (error) {
          console.error('Error fetching random dog:', error);
      }
  }
  
  getDog();
  
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
  
  images.forEach(function (img) {
      img.addEventListener("click", function () {
          openModal(img);
      });
  });
  
  var span = document.getElementsByClassName("close")[0];
  span.onclick = closeModal;
  
  modal.addEventListener("click", function (event) {
      if (event.target === modal) {
          closeModal();
      }
  });
});
