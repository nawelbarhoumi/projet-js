const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function add(){
    let name = document.getElementById('name');
    let price = document.getElementById('price');
    let picture = document.getElementById('picture');

    //
    let base64 = "";
    if(picture.files.length>0){
        const image = picture.files[0];
        base64 = await toBase64(image);    
    }
    var storage = JSON.parse(localStorage.getItem('products')) || [];
    storage.push(
        {
            name: name.value,
            price: price.value,
            image: base64
        })
        window.location.href='product.html'
    localStorage.setItem('products', JSON.stringify(storage));

}