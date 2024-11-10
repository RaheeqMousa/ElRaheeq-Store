const scarves = [
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
];
const sweaters=[
       'Images/products/sweater/stripped colorful crochet sweater.jfif',
       'Images/products/sweater/white and small flower crochet sweater.jfif',
       'Images/products/sweater/Sunflower Sweater Pattern_ Crochet pattern _ Ribblr.jfif',
       'Images/products/sweater/sunflower on white crochet jacket.jfif'
];

const yarns=[];
const hooks=[];
const dolls=[];



/*.........................................Display products accoarding to the clicked on category...........................................*/

const displayProducts=function(){
    
    const parameters=new URLSearchParams(window.location.search);
    const categoryClickedOn=parameters.get('category');

    if(categoryClickedOn=="Sweaters")
        displaySweaters();
    else if(categoryClickedOn=="Scarves")
        displayScarves();
    else if(categoryClickedOn=="yarns")
        displayYarns();
    else if(categoryClickedOn=="Hooks")
        displayHooks();
    else if(categoryClickedOn=="Dolls")
        displayDolls();

}

// /*.........................................Display ALL PRODUCTS...........................................*/

// const displayAllProducts=function (page=1){
//     let data = ``;

//     const total_number_of_products=sweaters.length+ dolls.length+ yarns.length+ scarves.length+ hooks.length;

//     if(sweaters.length==0 && dolls.length==0 && yarns.length==0 && scarves.length==0 && hooks.length==0){
//         document.querySelector('.products .container').innerHTML = `
//         <div class="d-flex justify-content-center align-items-center">
//         <img src="Images/products/no products yet.WEBP" alt="cartoon bear saying to products yet" />
//         </div>`;
//         return;
//     }

//     for(let i=(page - 1) * 10;i<page * 10 && i<all.length;i++){
//             data += `
//                 <div class="col-12 col-xxl-4 mb-3">
//                 <img src='${all[i]}' alt='product Image' class="img-fluid"/>
//                 </div>`;
//     }

//     document.querySelector('.all-procucts .row').innerHTML = data;


//     productsPagination(page,Math.ceil((total_number_of_products/10)),"all");

// }

/*.........................................Display Sweaters...........................................*/
const displaySweaters=function (page=1){
    let data = ``;

    if(sweaters.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src="Images/products/no products yet.WEBP" alt="cartoon bear saying to products yet" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<sweaters.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${sweaters[i]}' alt='Sweater Image' class="img-fluid"/>
                    </div>`;
    }

    document.querySelector('.products .row').innerHTML = data;

    productsPagination(page,Math.ceil((sweaters.length/6)),"Sweaters");

}

/*.........................................Display Scarves...........................................*/
const displayScarves= function (page=1){
    let data = ``;

    if(scarves.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src="Images/products/no products yet.WEBP" alt="cartoon bear saying to products yet" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<scarves.length; i++) {  //we will skip (page-1)*6 products
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${scarves[i]}' alt='Scarf Image' class="img-fluid"/>
                    </div>`;
    }
    document.querySelector('.products .row').innerHTML = data;

    productsPagination(page,Math.ceil((scarves.length/6)),"Scarves");
    
}

/*.........................................Display Dolls...........................................*/
const displayDolls= function (page=1){
    let data = ``;

    if(dolls.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src="Images/products/no products yet.WEBP" alt="cartoon bear saying to products yet" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<dolls.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${dolls[i]}' alt='doll Image' class="img-fluid"/>
                    </div>`;
    }

    document.querySelector('.products .row').innerHTML = data;
    productsPagination(page,dolls.length/6,"Dolls");
}

/*.........................................Display Hooks...........................................*/
const displayHooks= function (page=1){
    let data = ``;

    if(hooks.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src="Images/products/no products yet.WEBP" alt="cartoon bear saying to products yet" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<hooks.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${hooks[i]}' alt='hook Image' class="img-fluid"/>
                    </div>`;
    }
    document.querySelector('.products .row').innerHTML = data;
    productsPagination(page,hooks.length/6,"Hooks");
}

/*.........................................Display Yarns...........................................*/
const displayYarns= function (page=1){
    let data = ``;

    if(yarns.length==0){
        document.querySelector('.products .container').innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
        <img src="Images/products/no products yet.WEBP" alt="cartoon bear saying to products yet" />
        </div>`;
        return;
    }

    for (let i = (page - 1) * 6; i < page * 6 && i<scarves.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${yarns[i]}' alt='yarn Image' class="img-fluid"/>
                    </div>`;
    }
    document.querySelector('.products .row').innerHTML = data;
    productsPagination(page,sweaters.length/6,"yarns");
}

/*............................................Pagination code............................................*/
        /* This part of code to display the pagination to the page under the products */
function productsPagination(page, numberOfPages, type_of_product) {
    
    let paginationLink=``;

    if(page==1){
        // If the user in the first page the previous button must be disabled 
        if(type_of_product=="Sweaters"){
            paginationLink += `<button  class="page-link" onClick=displaySweaters('${page-1}') disabled >&laquo</button>`;
        }
        else if(type_of_product=="Scarves"){
            paginationLink+=`<button class="page-link" onClick=displayScarves(${page-1}) disabled>&laquo</button>`;
        }
        else if(type_of_product=="yarns"){
            paginationLink+=`<div class="page-link" onClick=displayYarns(${page-1}) disabled>&laquo</button>`;
        }
        else if(type_of_product=="Hooks"){
            paginationLink+=`<div class="page-link" onClick=displayHooks(${page-1}) disabled >&laquo</button>`;
        }
        else if(type_of_product=="Dolls"){
            paginationLink+=`<div class="page-link" onClick=displayDolls(${page-1}) disabled>&laquo</button>`;         
        }
    }else{
        
       if(type_of_product=="Sweaters"){
            paginationLink += `<button  class="page-link" onClick=displaySweaters('${page-1}') >&laquo</button>`;
        }
        else if(type_of_product=="Scarves"){
            paginationLink+=`<button class="page-link" onClick=displayScarves(${page-1}) >&laquo</button>`;
        }
        else if(type_of_product=="yarns"){
            paginationLink+=`<div class="page-link" onClick=displayYarns(${page-1})>&laquo</button>`;
        }
        else if(type_of_product=="Hooks"){
            paginationLink+=`<div class="page-link" onClick=displayHooks(${page-1})>&laquo</button>`;
        }
        else if(type_of_product=="Dolls"){
            paginationLink+=`<div class="page-link" onClick=displayDolls(${page-1})>&laquo</button>`;         
        }
    }

    startPage=Math.ceil(((page-1)/3)*3)+1;
    endPage= Math.min(startPage+2, numberOfPages);  /* in order not to exceed the number of pages */

    
        if(type_of_product=="Sweaters")
            for(let i=startPage;i<=endPage;i++){
                //if the page 1 is selected then the background of the button whice have the number on it must change its background
                // when the button is clicked I will show the data for the specific page number that clicked on 
                paginationLink+=`<button  class="page-link ${i==page?'active-page':''}" onClick="displaySweaters('${i}')">${i}</button>`; 
            }
        else if(type_of_product=="Scarves")
            for(let i=startPage;i<=numberOfPages;i++){
                paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayScarves('${i}')">${i}</button>`;
            }
        else if(type_of_product=="yarns")
            for(let i=startPage;i<=numberOfPages;i++){
                paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayYarns('${i}')">${i}</button>`;
            }
        else if(type_of_product=="Hooks")
            for(let i=startPage;i<=numberOfPages;i++){
                paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayHooks('${i}')">${i}</button>`;
            }
        else if(type_of_product=="Dolls")
            for(let i=startPage;i<=numberOfPages;i++){
                paginationLink+=`<button class="page-link ${i==page?'active-page':''}" onclick="displayDolls('${i}')">${i}</button>`;
            }
        

    if(page==numberOfPages){
        // If the user in the last page the next button must be disabled 

        if(type_of_product=="Sweaters")
            paginationLink += `<button  class="page-link" onClick=displaySweaters('${parseInt(page)+1}') disabled>&raquo</button>`;
        else if(type_of_product=="Scarves")
            paginationLink+=`<button class="page-link" onClick=displayScarves(${parseInt(page)+1}) disabled>&raquo</button>`;
        else if(type_of_product=="yarns")
            paginationLink+=`<div class="page-link" onClick=displayYarns(${parseInt(page)+1}) disabled>&raquo</button>`;
        else if(type_of_product=="Hooks")
            paginationLink+=`<div class="page-link" onClick=displayHooks(${parseInt(page)+1}) disabled>&raquo</button>`;
        else if(type_of_product=="Dolls")
            paginationLink+=`<div class="page-link" onClick=displayDolls(${parseInt(page)+1}) disabled>&raquo</button>`;
        
    }else{
        paginationLink+=`<button  class="page-link" disabled>...</button>`;

        if(type_of_product=="Sweaters"){
            paginationLink += `<button  class="page-link" onClick=displaySweaters('${parseInt(page)+1}') >&raquo</button>`;
        }
        else if(type_of_product=="Scarves"){
            paginationLink+=`<button class="page-link" onClick=displayScarves(${parseInt(page)+1}) >&raquo</button>`;
        }
        else if(type_of_product=="yarns"){
            paginationLink+=`<div class="page-link" onClick=displayYarns(${parseInt(page)+1})>&raquo</button>`;
        }
        else if(type_of_product=="Hooks"){
            paginationLink+=`<div class="page-link" onClick=displayHooks(${parseInt(page)+1})>&raquo</button>`;
        }
        else if(type_of_product=="Dolls"){
            paginationLink+=`<div class="page-link" onClick=displayDolls(${parseInt(page)+1})>&raquo</button>`;         
        }
        
    }
 
    document.querySelector(".pagination-container").innerHTML = paginationLink;

}

//displayAllProducts();
displayProducts();