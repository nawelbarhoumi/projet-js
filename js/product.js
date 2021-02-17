const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function add(){
    let name = document.getElementById('name');
    let price = document.getElementById('price');
    let picture = document.getElementById('picture');
    let categorie=document.getElementById('categories').value
   
    //
    let base64 = "";
    if(picture.files.length>0){
        const image = picture.files[0];
        base64 = await toBase64(image);    
    }
    var storage = JSON.parse(localStorage.getItem('products')) || [];
    storage.push(
        {
            name: name.value,
            price: price.value,
            image: base64,
            categorie:categorie,
            id : storage.length
        })
       window.location.href='product.html'
    localStorage.setItem('products', JSON.stringify(storage));

}

function getBookMark(lnk) {
    localStorage.setItem('catShow',JSON.stringify(lnk.getAttribute('value')))  
    console.log(lnk.getAttribute('value'))    
}
function showCategories(){
    var user= JSON.parse(localStorage.getItem('connected'))
    document.getElementById('useraccount').innerHTML=user.firstname+' '+user.lastname
    
    let catShow=JSON.parse(localStorage.getItem('catShow'))|| ''

    var products = JSON.parse(localStorage.getItem('products')) || [];
    console.log(products);

    Categories = products.filter(e=> { 
        
        return e.categorie == catShow
    });
    console.log(Categories);
    var categories=''
    Categories.forEach((x, i) =>  {   
        categories+= `
        <div class="col-md-4 grid-product-in">	
        <div class=" product-grid">	
            <a href="#"><img class="img-responsive " src="${x.image}" alt=""></a>		
            <div class="shoe-in">
                <h4>${x.name}</h4>
                <label>${x.price}</label>
            </div>
            <button class="btn btn-success add-cart" onclick="addPanier(${x.id})">Add</button>
         </div>
       </div>	
       </div>
`
});
  document.getElementById('products').innerHTML = categories
}
function addPanier(i){
    var storage=JSON.parse(localStorage.getItem('products')) || [];
    var panier=JSON.parse(localStorage.getItem('panier')) || [];
    panier.push(storage[i])
    localStorage.setItem('panier', JSON.stringify(panier))
}


