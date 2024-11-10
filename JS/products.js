/* this will remove the notification if the user clicked on the button */
function removeNotification() {
    document.querySelector(".notification").remove(); // Removes the notification bar
}

document.querySelector(".notification button").onclick = removeNotification;

/* ........................Swiper Code.............. */

// const swiper = new Swiper('.swiper-container', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

 /*.............................AN ARRAY CONATINS ALL PRODUCTS...................*/ 

 const all=[
  'Images/products/scarves/Crochet Triangle Scarf Crochet Scarf Fall Wrap Crocheted - Etsy.jfif',
      'Images/products/scarves/Keyhole Scarf CROCHET PATTERN Ruffle Scarf Gift for Her Crochet Scarf for Winter Scarf for Fall Neck Warmer Beautiful Pattern Crochet - Etsy Denmark.jfif',
      'Images/products/scarves/La Vie en Rose Scarf Pattern for Ladies _ Free Crochet Tutorial _ Kirsten Holloway Designs.jfif',
      'Images/products/scarves/Mile of Smile PDF Crochet Scarf Pattern.jfif',
      'Images/products/scarves/white and black triangle scarf.jfif',
      'Images/products/scarves/white and black triangle scarf.jfif',
      'Images/products/scarves/tall white triangle scarf.jfif',
     'Images/products/scarves/white and some blocks on the scarf.jfif',
     'Images/products/scarves/white and black triangle scarf.jfif',
      'Images/products/scarves/white and black triangle scarf.jfif',
      'Images/products/scarves/tall white triangle scarf.jfif',
     'Images/products/scarves/white and some blocks on the scarf.jfif',
     'Images/products/scarves/white and black triangle scarf.jfif',
      'Images/products/scarves/white and black triangle scarf.jfif',
      'Images/products/scarves/tall white triangle scarf.jfif',
     'Images/products/scarves/white and some blocks on the scarf.jfif',
     'Images/products/sweater/stripped colorful crochet sweater.jfif',
     'Images/products/sweater/white and small flower crochet sweater.jfif',
     'Images/products/sweater/Sunflower Sweater Pattern_ Crochet pattern _ Ribblr.jfif',
     'Images/products/sweater/sunflower on white crochet jacket.jfif'
];

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

/*..........................................DISPLAY ALL PRODUCTS WITH PAGINATION........................................ */
  const displayAllProducts=function (page=1){
    let data = ``;

    for(let i=(page - 1) * 10;i<page * 10 && i<all.length;i++){
            data += `
                <div class="col-12 col-xxl-4 mb-3">
                  <div class="category d-flex justify-content-center align-items-center flex-column">
                      <img src='${all[i]}' alt='product Image' class="img-fluid"/>
                  </div>
                </div>`;
    }

    document.querySelector('.AllProducts .row').innerHTML = data;


    productsPagination(page,Math.ceil((all.length/10)));

  }
/*...............................................PAGINATION CODE.................................................. */

function productsPagination(page, numberOfPages) {
    
  let paginationLink=``;

  if(page==1){
      // If the user in the first page the previous button must be disabled 
          paginationLink += `<button  class="page-link" onClick=displayAllProducts('${page-1}') disabled >&laquo</button>`;
  }else{      
      paginationLink += `<button  class="page-link" onClick=displayAllProducts('${page-1}') >&laquo</button>`;
  }

  startPage=Math.ceil(((page-1)/3)*3)+1;
  endPage= Math.min(startPage+2, numberOfPages);  /* in order not to exceed the number of pages */

  
          for(let i=startPage;i<=numberOfPages;i++){
              paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayAllProducts('${i}')">${i}</button>`;
          }
      

  if(page==numberOfPages){
      // If the user in the last page the next button must be disabled 
      paginationLink += `<button  class="page-link" onClick=displayAllProducts('${parseInt(page)+1}') disabled>&raquo</button>`;
  }else{
      paginationLink+=`<button  class="page-link" disabled>...</button>`;
     paginationLink += `<button  class="page-link" onClick=displayAllProducts('${parseInt(page)+1}') >&raquo</button>`;     
  }

  document.querySelector(".pagination-container").innerHTML = paginationLink;

}

displayAllProducts();
displayCategories();
