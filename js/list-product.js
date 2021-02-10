function storageonload(){
 
    var storage=JSON.parse(localStorage.getItem('products')) || []
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
            <a href="edit-product.html">Update</a>
            
           
          
        
    
               <button class="btn btn-danger" onclick="deleteProduct(${i})"><i class="fas fa-trash-alt"></i>Delete</button>
               <button class="btn btn-primary" onclick="addPanier(${i})"><i class="fas fa-trash-alt"></i>Add</button>
           </div>
           <b class="plus-on">+</b>
       </div>	
       </div>
`

});


document.getElementById('products').innerHTML = produits
}
