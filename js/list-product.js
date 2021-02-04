function storageonload(){
 
    var storage=JSON.parse(localStorage.getItem('products')) || []
    var produits=''
    storage.forEach((x) =>  {   
       produits+= `
       <div class="col-md-4 grid-product-in">	
       <div class=" product-grid">	
           <a href="single.html"><img class="img-responsive " src="${x.image}" alt=""></a>		
           <div class="shoe-in">
               <h6><a href="single.html">
                  ${x.name}
               <label>${x.price}</label>
               <a href="single.html" class="store">FIND A STORE</a>
           </div>
           
           <b class="plus-on">+</b>
       </div>	
       </div>
`

});


document.getElementById('products').innerHTML = produits
}
