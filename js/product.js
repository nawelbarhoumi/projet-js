function add(){
    let name = document.getElementById('firstphoto');
    let price = document.getElementById('firstprice');
    var storage = JSON.parse(localStorage.getItem('photos')) || [];
    storage.push(
        {
            name: name.value,
            price: price.value
        })
    localStorage.setItem('photos', JSON.stringify(storage));

}