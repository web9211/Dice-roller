let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]; 

document.getElementById('btn').onclick = function(){
    guess = images[Math.floor(Math.random()*images.length)];
    document.getElementById('img').src = guess;
}

