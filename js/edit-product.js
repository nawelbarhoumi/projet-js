
  function edit(){
    var storage=JSON.parse(localStorage.getItem('products')) || []
    var name=document.getElementById("name").value
    var price=document.getElementById("price").value
    var picture=document.getElementById("picture").value
    var updatedProduct={
      name,
      price,
      picture
    }
    storage.splice(updatedProduct,1)
    // window.location.href='product.html'
    localStorage.setItem('products',JSON.stringify(storage))
  }