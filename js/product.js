function add(){
    let name = document.getElementById('');
    let price = document.getElementById('');
    var storage = JSON.parse(localStorage.getItem('photos')) || [];
    storage.push(
        {
            name: name.value,
            price: price.value
        })
    localStorage.setItem('photos', JSON.stringify(storage));

}