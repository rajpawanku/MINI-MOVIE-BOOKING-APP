
let wallet= document.getElementById("wallet");

let arr = [];
function addToWallet(){
    let money = Number(document.getElementById("amount").value);
  console.log(typeof(money));
  let z = money;
  localStorage.setItem("amount",JSON.stringify(z));
 

 let x =JSON.parse(localStorage.getItem("amount"));
 arr.push(x);
 console.log(arr);
 
 let sum = 0;
for(let i=0; i<arr.length; i++){
  sum = sum+arr[i];
}
console.log(sum);

localStorage.setItem("amount",JSON.parse(sum));
wallet.innerHTML=JSON.parse(localStorage.getItem("amount"));
}





const book=()=>{
    window.location.href="movies.html"
}

