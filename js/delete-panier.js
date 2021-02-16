function deleteProduct(i){
    var panier= JSON.parse(localStorage.getItem('panier')) || [] ;
    panier.splice(i, 1);
    localStorage.setItem("panier", JSON.stringify(panier));
    
}