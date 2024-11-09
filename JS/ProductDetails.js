const scarves = [
       'Images/products/scarves/Crochet Triangle Scarf Crochet Scarf Fall Wrap Crocheted - Etsy.jfif',
        'Images/products/scarves/Keyhole Scarf CROCHET PATTERN Ruffle Scarf Gift for Her Crochet Scarf for Winter Scarf for Fall Neck Warmer Beautiful Pattern Crochet - Etsy Denmark.jfif',
        'Images/products/scarves/La Vie en Rose Scarf Pattern for Ladies _ Free Crochet Tutorial _ Kirsten Holloway Designs.jfif',
        'Images/products/scarves/Mile of Smile PDF Crochet Scarf Pattern.jfif',
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

const displayProducts=function(){
    
    const parameters=new URLSearchParams(window.location.search);
    const categoryClickedOn=parameters.get('category');

    if(categoryClickedOn=="Sweaters")
        displaySweaters();
    else if(categoryClickedOn=="Scarves")
        displayScarves();

}
const displaySweaters=function (){
    let data = ``;
    for (let i = 0; i < sweaters.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${sweaters[i]}' alt='Sweater Image' class="img-fluid"/>
                    </div>`;
    }
    document.querySelector('.products .row').innerHTML = data;
}
const displayScarves= function (){
    let data = ``;
    for (let i = 0; i < scarves.length; i++) {
            data += `
                    <div class="col-12 col-xxl-4 mb-3">
                    <img src='${scarves[i]}' alt='Scarf Image' class="img-fluid"/>
                    </div>`;
    }
    document.querySelector('.products .row').innerHTML = data;
}

displayProducts();