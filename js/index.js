console.log("Your index.js file is loaded correctly!");
$("#prodButton").on("click", function(){
    $('html,body').animate({
        scrollTop: $(".MyWork").offset().top},
        'slow');
    
});