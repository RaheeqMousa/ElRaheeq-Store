/* this will remove the notification if the user clicked on the button */
function removeNotification() {
    document.querySelector(".notification").remove(); // Removes the notification bar
}

document.querySelector(".notification button").onclick = removeNotification;

/* ........................Swiper Code.............. */

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/* ...........................Categories code............ */
const array=[
  {
    name: "Dolls",
    img: "Images/products/dolls/dolls.jfif",
  },
  {
    name: "Sweaters",
    img: "Images/products/sweater/sweater.jpg",
  },
  {
    name: "Crochet Hooks",
    img: "Images/products/hooks/hooks.jfif",
  },
  {
    name: "yarns",
    img: "Images/products/yarns/yarns.jfif",
  },
  {
    name: "Scarves",
    img: "Images/products/scarves/scarf.jpg",
  },

];

function displayCategories(){

  let data=array.map(function(category){
    return `
        <div class="col-xxl-6 col-12">
          <div class="category d-flex justify-content-center align-items-center flex-column">
            <img src="${category.img}" alt="${category.name}" class="category-img img-fluid">
              <a href="productDetails.html?category=${category.name}">${category.name}</a>
          </div>
      </div>`;
  }).join('');
  
  document.querySelector(".categories .row").innerHTML = data;
}

displayCategories();
