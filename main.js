let menuBtn = document.getElementById("menu");
let namvber = document.querySelector(".header .flex .navbar");


menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    namvber.classList.toggle("active");
}


//Get silder images = Array.form(className)
var silderImages = Array.from(document.querySelectorAll('.silder-container img'));

//Get number silder images length 
var sildesCount = silderImages.length;

//Set current silde
var currentSilde = 1;
// silde Numder Element 
var sildeNumber = document.getElementById("silde-number");
//previous and next button 
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");


//Handle click previous and next button 
nextBtn.onclick = nextSilde;
prevBtn.onclick = prevSilde;

//Craete The Main UL Elemnet 
var pagiantionElement = document.createElement("ul");
//Set ID The Main UL 
pagiantionElement.setAttribute("id" , "pagination-ul");

//For Loop lenght imgaes
for(var i = 1 ; i <= sildesCount ; i++) {
    //Creat LI 
    var paginationItem = document.createElement("li");
    //Set Atrribute Form LI 
    paginationItem.setAttribute("data-index" , i);
    //Set Text From LI 
    paginationItem.appendChild(document.createTextNode(i));
    //AppendChild LI The Main UL
    pagiantionElement.appendChild(paginationItem);
}
//Add create To The Page
document.getElementById("indicators").appendChild(pagiantionElement);
// Get Create Element ul
var paginationUL = document.getElementById("pagination-ul");
//Array 
var paginationLI = Array.from(document.querySelectorAll('#pagination-ul li'));

for(var i = 0 ; i < paginationLI.length ; i++ ) {
    paginationLI[i].onclick = function () {
        currentSilde = parseInt(this.getAttribute("data-index"));
        Cheker();
    }
}
// employment function cheker 
Cheker();



//next silde function
function nextSilde() {
    if (nextBtn.classList.contains("disabeld")) {
        return false;
    }
    else {
        currentSilde++;
        Cheker();
    }
}
function prevSilde() {
    if (prevBtn.classList.contains("disabeld")) {
        return false;
    }
    else {
        currentSilde--;
        Cheker();
    }
}
// Function Cheker 
function Cheker() {
    //Word Text Length images To The All
    sildeNumber.textContent = "Silde #" +(currentSilde) + " OF " + (sildesCount) ;
    removeImg();
    //Printf Img 
    silderImages[currentSilde - 1].classList.add("active");
    //Printf Item 
    paginationUL.children[currentSilde - 1].classList.add("active");
    //If PrevBtn == 1 
    if(currentSilde == 1) {
        prevBtn.classList.add("disabeld");
    }
    else {
        prevBtn.classList.remove("disabeld");
    }
    //If Next == Last Number
    if(currentSilde == sildesCount) {
        nextBtn.classList.add("disabeld");
    }
    else {
        nextBtn.classList.remove("disabeld");
    }
}

//function remove img 
function removeImg() {
    //Array Through img
    silderImages.forEach(function(img) {
        img.classList.remove("active");
    });
    //Array Through number
    paginationLI.forEach(function(number) {
        number.classList.remove("active");
    });
}