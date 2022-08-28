var qtyPlus = document.getElementById('qty-plus');
var qtyMoins = document.getElementById('qty-moins');

var qty = document.getElementById('qty');
var ctp = parseInt(qty.value);
var priceProduit = document.getElementById('prix');
	var qty = document.getElementById('qty');
	var sT = document.getElementById('sommeT');
var price = parseInt(priceProduit.innerText);
console.log(price)



qtyPlus.addEventListener('click',function(){
	ctp = ctp+1;
	qty.value = ctp;
	sT.innerHTML= ctp * price
	//total();
});

qtyMoins.addEventListener('click',function(){
	
	
	ctp = ctp-1;
	qty.value = ctp;
	if(ctp<=1 ){
		ctp=1 
	}
	sT.innerHTML= ctp * price
	//total();
});


var faHeart = document.getElementById('heart');
console.log(faHeart)
faHeart.addEventListener('click',function(){
	
	
	if(faHeart.style.color = "black") {
		faHeart.style.color = "red"
	}
	else{( faHeart.style.color = "red") 
		faHeart.style.color = "black"
	}

});

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let close = document.querySelector('#close')
let main = document.querySelector('#produits')

let linkA = document.querySelector('.linkA');
let about = document.querySelector('.about')
let linkAA = document.querySelector('.linkAA')
let header = document.querySelector('#header')
let contact = document.querySelector('.cont')
let nous = document.querySelector('#nous')


function ajout(event) {
	var btn = event.target;
	var cards = btn.parentElement;
	var title = cards.getElementsByClassName('title')[0].innerText;
	var prix = cards.getElementsByClassName('prix')[0].innerText;
    var img = cards.getElementsByClassName('img')[0],innerText;
	console.log(title,prix,img)
	var contentItems = `<div class="card">
	<img src="C:/Users/Ousmane/Desktop/ma/eqt1.jpg" alt="">
	<div class="card-header">
		<h4 class="title">adidas</h4>
		<div class="stars">
			<i class="fas fa-star"></i>
			<i class="fas fa-star"></i>
			<i class="fas fa-star"></i>
			<i class="fas fa-star"></i>
			<i class="fas fa-star-half-alt"></i>
		</div>
		<h4 class="price"> 8000fr</h4>
	</div>
	<div class="card-body">
		<button type="button" class="btn">Ajouter au panier</button> <br> <br>
	</div>
</div>`
div.innerHTML = contentItem
var liste = document.querySelectorAll('.title')
var ok = 0
for( var i in liste){
	if(liste[i].innerHTML === title){
		ok = 1
	}
}
if (ok == 0){
	cartItemDiv.append(div)
}
else{
	alert("CE PRODUIT EST DEJA DANS LE PANIER")
}

}








console.log(cartIcon)
cartIcon.onclick = () =>{
	cart.classList.add('active');
};
close.onclick = () =>{
	cart.classList.remove('active');
};




let btn = document.querySelectorAll('.btn')
console.log(btn)
for (let i in btn){
	button= btn[i]
	button.onclick = () => {
		cart.classList.toggle('active');
	}
	button.addEventListener('click', addToCart)
	function addToCart(){
		var div = document.createElement('div')
    div.classList.add('cart-row')
    var contentItem = `<div class="cart-item cart-column">
        <img class="cart-item-image" src="${src}" width="100" height="100">
        <span class="cart-item-title">test</span>
    </div>`
	div.innerHTML = contentItem
	cartItemDiv.append(div)
	}
}



















console.log(linkA)
document.querySelector('.linkA').onclick =() => {
	about.classList.toggle('about')
}

console.log(linkAA)
document.querySelector('.linkAA').onclick = ()=> {
	header.classList.add('header')
}
console.log(contact)
document.querySelector('.cont').onclick = ()=> {
	nous.classList.add('nous')
}