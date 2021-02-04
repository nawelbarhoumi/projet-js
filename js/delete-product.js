function deleteProduct(i){
    var product= JSON.parse(localStorage.getItem('products')) || [] ;
    posts.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(product));
    storageonload();
}