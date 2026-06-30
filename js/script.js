document.addEventListener("DOMContentLoaded", function () {

const products = document.querySelectorAll(".product");
const invoiceBody = document.getElementById("invoiceBody");
const totalPrice = document.getElementById("totalPrice");
const paidInput = document.getElementById("paid");
const changeValue = document.getElementById("change");
let total = 0;
let cart = {};

products.forEach(function(product){

product.addEventListener("click",function(){

const name=this.textContent;
const price=10;

if(cart[name]){

cart[name].qty++;
cart[name].total=cart[name].qty*price;

}else{

cart[name]={
qty:1,
price:price,
total:price
};

}

drawInvoice();

});

});

function drawInvoice(){

invoiceBody.innerHTML="";

total=0;
for(let item in cart){

const row=document.createElement("tr");

row.innerHTML=`
<td>${item}</td>
<td>${cart[item].qty}</td>
<td>${cart[item].price}</td>
<td>${cart[item].total}</td>
`;

invoiceBody.appendChild(row);

total+=cart[item].total;

}

totalPrice.textContent=total.toFixed(2);

}

});
paidInput.addEventListener("input", function () {

const paid = Number(this.value);

const change = paid - total;

if (change >= 0) {
    changeValue.textContent = change.toFixed(2);
} else {
    changeValue.textContent = "0.00";
}

});
const clearBill=document.getElementById("clearBill");

clearBill.addEventListener("click",function(){

cart={};

invoiceBody.innerHTML="";

total=0;

totalPrice.textContent="0.00";

});
