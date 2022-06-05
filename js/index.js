console.log("Your index.js file is loaded correctly!");

    $(".project1").hover(function() {
    $("#proj-img1").attr("src","./images/Tutor-Match-mockup2.png");
    }, 
    function() {
        (".project1").attr("src","./images/Tutor-Match-mockup.png");
    });

    $(".project2").hover(function() {
        $("#proj-img2").attr("src","./images/locale-mockup2.png");
        }, 
        function() {
            (".project2").attr("src","./images/locale-mockup.png");
        });

     $(".project3").hover(function() {
            $("#proj-img3").attr("src","./images/vostok-mockup2.png");
            }, 
            function() {
                (".project3").attr("src","./images/vostok-mockup.png");
            });
    
            $(".project4").hover(function() {
                $("#proj-img4").attr("src","./images/coming-soon2.png");
                }, 
                function() {
                    (".project3").attr("src","./images/coming-soon.png");
                });

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
