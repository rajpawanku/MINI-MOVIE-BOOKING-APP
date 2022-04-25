// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let data = JSON.parse(localStorage.getItem("movie",));
let movies = document.getElementById("movie");
    data.forEach((el) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src=el.Poster;

        let name = document.createElement('p');
        name.innerHTML=el.Title;

        div.append(img,name);
        movies.append(div);
    });
    let money = JSON.parse(localStorage.getItem("amount"));

    let wallet = document.getElementById("wallet");
    wallet.innerHTML=money;
        function confirm_book(){

            let seat = Number(document.getElementById('number_of_seats').value);
            if(money<(seat*100)){
                alert("Inscuficient Balance");
            }
            else{
                alert("Booking Confirm");
            }
        }