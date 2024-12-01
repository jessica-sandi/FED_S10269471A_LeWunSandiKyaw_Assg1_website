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


function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}

document.querySelectorAll('.movie').forEach(movie => {
  const video = movie.querySelector('video');

  // Play video on hover
  movie.addEventListener('mouseenter', () => {
    if (video) {
      video.play();
    }
  });

  // Pause video when hover ends
  movie.addEventListener('mouseleave', () => {
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to the beginning
    }
  });
});


