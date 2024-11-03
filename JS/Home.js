var modal = document.getElementById("myFeatureModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the image, open the modal
function displayFeature(image_location,al){
    modal.style.display = "block";
    document.querySelector('#myFeatureModal img').src = image_location; 
    document.querySelector('#myFeatureModal img').alt = al; 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.querySelector('#myFeatureModal img').src = ""; // empty th img
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.querySelector('#myFeatureModal img').src = ""; // empty the img
    }
}


/************************************************************************************************** */


let allImages=[
    {
        src: "Images/TeachMe/Scarf/chunky scarf.jfif",
        alt: "Chunky scarf image",
        type: "scarf"
    },
    {
        src: "Images/TeachMe/Scarf/lacy scarf.jfif",
        alt: "Lacy scarf image",
        type: "scarf"
    },
    {
        src: "Images/TeachMe/Sweater/Sunflower Crochet Cropped Cardigans for Women, Crochet Knitted Floral Cardigan, Cardigan Adult for Handmade and as Christmas Day Gift - Etsy.jfif",
        alt: "Sunflower crochet sweater",
        type: "sweater"
    },
    {
        src: "Images/TeachMe/Sweater/Stripped Crochet sweater.jfif",
        alt: "Stripped Crochet Sweater",
        type: "sweater"
    },
    {
        src: "Images/TeachMe/Sweater/harry crochet jacket.jfif",
        alt: "Harry Crochet Jacket",
        type: "sweater"
    }

];


function fillFeatureSweaters(){
    let data = "";
    for (let i = 0; i <allImages.length; i++) {
        if (allImages[i].type === "scarf") {
            data += `
                    <img src='${allImages[i].src}' alt='${allImages[i].alt}' url='${allImages[i].src}'  a='${allImages[i].alt}'/>`;
        }
    }
    document.querySelector('#Scarfs-tab-pane .d-flex').innerHTML = data;

    const imageElements = document.querySelectorAll("#All-tab-pane .d-flex img");
    imageElements.forEach(function(img) {
    img.addEventListener("click", function() {
        const url = this.getAttribute("url"); // Use data-url for the video URL
        const alt = this.getAttribute("a"); // Use data-a for the video alt
        displayFeature(url,alt); // give the display function the url to display
    }); 

    });

}

function fillFeatureScarfs(){
    let data = ``;
    for (let i = 0; i <allImages.length; i++) {
        if (allImages[i].type === "sweater") {
            data += `
                    <img src='${allImages[i].src}' alt='${allImages[i].alt}' url='${allImages[i].src}' a='${allImages[i].alt}' />`;
        }
    }
    document.querySelector('#Sweaters-tab-pane .d-flex').innerHTML = data;

    const imageElements = document.querySelectorAll("#All-tab-pane .d-flex img");
    imageElements.forEach(function(img) {
    img.addEventListener("click", function() {
        const url = this.getAttribute("url"); // Use data-url for the video URL
        const alt = this.getAttribute("a"); // Use data-a for the video alt
        displayFeature(url,alt); // give the display function the url to display
    }); 

    });
}

function fillAllFeaturePieces(){
    let data = ``;
    for (let i = 0; i <allImages.length; i++) {
            data += `
                    <img src='${allImages[i].src}' alt='${allImages[i].alt}' url='${allImages[i].src}' a='${allImages[i].alt}'/>`;
    }
    console.log(data);
    document.querySelector('#All-tab-pane .d-flex').innerHTML = data;

    const imageElements = document.querySelectorAll("#All-tab-pane .d-flex img");
    imageElements.forEach(function(img) {
    img.addEventListener("click", function() {
        const url = this.getAttribute("url"); // Use data-url for the video URL
        const alt = this.getAttribute("a"); // Use data-a for the video alt
        displayFeature(url,alt); // give the display function the url to display
    }); 

    });
    
}


fillFeatureSweaters();
fillAllFeaturePieces();
fillFeatureScarfs();




