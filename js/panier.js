function addPanier(i){
    var storage=JSON.parse(localStorage.getItem('products')) || [];
    var panier=JSON.parse(localStorage.getItem('panier')) || [];
    panier.push(storage[i])
    localStorage.setItem('panier', JSON.stringify(panier))
    load();
}
function deleteProduct(i){
  var panier= JSON.parse(localStorage.getItem('panier')) || [] ;
  panier.splice(i, 1);
  localStorage.setItem("panier", JSON.stringify(panier));
  load()
}
function load(){
 
    var storage=JSON.parse(localStorage.getItem("panier")) || []
    var produits=''
    storage.forEach((x, i) =>  {   
       produits+= `
        <div class="col-md-4 grid-product-in">	
        <div class=" product-grid">	
            <a href="#"><img class="img-responsive " src="${x.image}" alt=""></a>		
            <div class="shoe-in">
                <h4> ${x.name} </h4>
                <label>${x.price}</label>
            </div>
            <button class="btn btn-danger" onclick="deleteProduct(${i})"><i class="fas fa-trash-alt"></i>Delete</button>
         </div>
  
       </div>	
       </div>
`
});
localStorage.setItem('panier',JSON.stringify(storage))
  document.getElementById('products').innerHTML = produits
}
