function deleteProduct(i){
    var product= JSON.parse(localStorage.getItem('products')) || [] ;
    product.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(product));
    storageonload();
}