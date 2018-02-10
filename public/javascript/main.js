$(document).ready(function(){
$('.subTitle').hide().fadeIn(3000);
$('.subContent').hide().fadeIn(6000);

var texts = ["Digital Video Production", "Search Engine Optimization", "Social Media Management"];
count = 0;
timer = setInterval(function() {
        $(".subTitle").text(texts[count]);
        count++;
        if(count === texts.length) {
            count=0;
        }
    }, 3000);
imageChanger = setInterval(function() {
     if ($('.subTitle').text() == "Social Media Management"){
        $('.iframe').attr("src", "img/socialmedia.png");
    }
    else if ($('.subTitle').text() == "Search Engine Optimization"){
       $('.iframe').attr("src", "img/optimization.png");
    } 
    else if ($('.subTitle').text() == "Digital Video Production"){
        $('.iframe').attr("src", "img/tvAd.jpg");
    }
}, 3000);

});