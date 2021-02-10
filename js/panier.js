function addPanier(i){
    var storage=JSON.parse(localStorage.getItem('products')) || [];
    var panier=JSON.parse(localStorage.getItem('panier')) || [];
    panier.push(storage[i])
    localStorage.setItem('panier', JSON.stringify(panier))
}

function load(){
 
    var storage=JSON.parse(localStorage.getItem("panier")) || []
    var produits=''
    storage.forEach((x, i) =>  {   
       produits+= `
        <div class="col-md-4 grid-product-in">	
        <div class=" product-grid">	
            <a href="single.html"><img class="img-responsive " src="${x.image}" alt=""></a>		
            <div class="shoe-in">
                <h6><a href="single.html">
                  ${x.name}
                <label>${x.price}</label>
            </div>
         
         </div>
  
       </div>	
       </div>
`
});
localStorage.setItem('panier',JSON.stringify(storage))
  document.getElementById('products').innerHTML = produits
}
