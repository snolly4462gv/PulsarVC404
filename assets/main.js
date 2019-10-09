document.addEventListener("DOMContentLoaded", function(event) { 
    var countImages = 2;
    var rand = getRandomArbitary(1, countImages);
    var name = "#image_"+rand;
    var el = document.querySelector(name);
    el.className += ' show';
});

function getRandomArbitary(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
