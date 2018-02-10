$(document).ready(function(){
$('.subTitle').hide().fadeIn(3000);
$('.subContent').hide().fadeIn(6000);

});
var texts = ["test", "test2"];
var count = 0;
function changeText() {
    $(".subTitle").text(texts[count]);
    count < 2 ? count++ : count = 0;
}


setInterval(changeText(), 500);