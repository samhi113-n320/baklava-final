var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.png", "image6.jpg", "image7.jpg", "image8.jpg",];
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var src1 = 0;
var src2 = 1;
var src3 = 2;

var imageText = ["Líf and Lífþrasir", "Jörmungandr", "Odin", "Thor Slaying Jötnar", "The Binding of Fenrir", "The Battle of Fenrir vs Odin", "Loki", "Váli"];
var imgText1 = document.getElementById("imgText1");
var imgText2 = document.getElementById("imgText2");
var imgText3 = document.getElementById("imgText3");

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

img1.src = `images/norseImages/${images[src1]}`;
img2.src = `images/norseImages/${images[src2]}`;
img3.src = `images/norseImages/${images[src3]}`;

function moveLeft(){
    src1++;
    src2++;
    src3++;

    if(src1>7){
        src1 = 0;
    } else if (src2>7) {
        src2 = 0;
    } else if (src3>7) {
        src3 = 0;
    }

    img1.src = `images/norseImages/${images[src1]}`;
    img2.src = `images/norseImages/${images[src2]}`;
    img3.src = `images/norseImages/${images[src3]}`;

    imgText1.textContent = imageText[src1];
    imgText2.textContent = imageText[src2];
    imgText3.textContent = imageText[src3];
}

function moveRight(){
    src1--;
    src2--;
    src3--;

    if(src1<0){
        src1 = 7;
    } else if (src2<0) {
        src2 = 7;
    } else if (src3<0) {
        src3 = 7;
    }

    img1.src = `images/norseImages/${images[src1]}`;
    img2.src = `images/norseImages/${images[src2]}`;
    img3.src = `images/norseImages/${images[src3]}`;

    
    imgText1.textContent = imageText[src1];
    imgText2.textContent = imageText[src2];
    imgText3.textContent = imageText[src3];
}