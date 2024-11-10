const myImage = document.querySelector("img");
myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/halloween-1.jpg") {
        myImage.setAttribute("src", "images/halloween-2.jpg");
    } else {
        myImage.setAttribute("src", "images/halloween-1.jpg");
    }
};

const myImage = document.querySelector("img");
myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/grandpa.jpg") {
        myImage.setAttribute("src", "images/santa.jpg");
    } else {
        myImage.setAttribute("src", "images/grandpa.jpg");
    }
};