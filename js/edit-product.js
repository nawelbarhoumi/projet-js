const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
function showData(i){
    var storage=JSON.parse(localStorage.getItem('products')) || []
    document.getElementById("name").value=storage[i].name
    document.getElementById("price").value=storage[i].price
    document.getElementById("picture").value=storage[i].picture
    document.getElementById("index").value= i
}

async function modify(){
    var storage=JSON.parse(localStorage.getItem('products')) || []
    var name=document.getElementById("name").value
    var price=document.getElementById("price").value
    var index=document.getElementById('index').value
    let picture = document.getElementById('picture')
    var base64 = "";
    if(picture.files.length>0){
        const image = picture.files[0];
        base64 = await toBase64(image);    
    }

    var updatedProduct={
      name:name,
      price:price,
      image:base64
    }
    storage.splice(index,1,updatedProduct)
    // window.location.href='product.html'
    localStorage.setItem('products',JSON.stringify(storage))
}