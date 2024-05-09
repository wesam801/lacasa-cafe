    // scroll content 

    window.addEventListener("scroll", function () {
      const content = document.querySelector(".content");
    if (window.scrollY > 100) {
      content.classList.add("content-edit");
    } else {
      content.classList.remove("content-edit");
    }
    });
    //scroll social-media
    // scroll content 

    window.addEventListener("scroll", function () {
      const content = document.querySelector(".social-media");
    if (window.scrollY > 850) {
      content.classList.add("social-media-edit");
    } else {
      content.classList.remove("social-media-edit");
    }
    });
    //scroll social-media
    // scroll Teams edit 

    window.addEventListener("scroll", function () {
      const content = document.querySelector(".teams");
    if (window.scrollY > 1160) {
      content.classList.add("teams-edit");
    } else {
      content.classList.remove("teams-edit");
    }
    });
    // Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

   
    var loader = document.getElementById('overlay');
    window.addEventListener('load', function(){
        loader.style.display='none';
    })

// start animaishn 




 