var pos;


function hello(i) {
    localStorage.setItem('pos',i)
}

var pos;

function hello(index) {
    localStorage.setItem('pos',index)
}
function deleteProduct(index){
  var product= JSON.parse(localStorage.getItem('products')) || [] ;
  product.splice(index, 1);
  
  localStorage.setItem("products", JSON.stringify(product));
 storageonload()
}
function storageonload(){
    var storage=JSON.parse(localStorage.getItem('products')) || []
    var produits=''
    storage.forEach((x,index) =>  {   
        produits+= `
        <div class="col-md-4 grid-product-in">	
        <div class=" product-grid">	
            <a href="single.html"><img class="img-responsive " src="${x.image}" alt=""></a>		
            <div class="shoe-in">
                <h6>
                  ${x.name}</h6>
                <label>${x.price}</label>
                <a class="btn btn-success" href="edit-product.html" onclick="hello(${index})"><ion-icon name="create-outline"></ion-icon></a>
            <button class="btn btn-danger" onclick="deleteProduct(${index})"><ion-icon name="trash-outline"></ion-icon></button>
               
            </div>
          </div>
          
       </div>	
       </div>

`
});

// pos=hello(2);
document.getElementById('products').innerHTML = produits
}


function showData(pos){
   
   var pos=Number(localStorage.getItem('pos'))
    var storage=JSON.parse(localStorage.getItem('products')) || []
    document.getElementById("name").value=storage[pos].name
    document.getElementById("price").value=storage[pos].price
    document.getElementById("index").value= pos
}

async function updated(pos){
    var pos=Number(localStorage.getItem('pos'))
  console.log(pos)
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
    var storage=JSON.parse(localStorage.getItem('products')) || []
    var name=document.getElementById("name").value
    var price=document.getElementById("price").value
   
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

   
    storage.splice(pos,1,updatedProduct)
    window.location.href='product.html'
    localStorage.setItem('products',JSON.stringify(storage))
    localStorage.removeItem('pos')
}
