// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

const searchMovie = async()=>{
    // console.log(input);
    let input = document.getElementById("search").value;
    const url = `https://www.omdbapi.com/?apikey=d4b62088&s=${input}`
    try{

        let res =await fetch(url);
        let data = await res.json();
        console.log(data);
        appendMovie(data.Search);
    }
    catch(err){
        console.log('err',err);
    }
}

let movies = document.getElementById('movies');
const appendMovie = (data)=>{
    movies.innerHTML=null;
    data.forEach((el) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src=el.Poster;

        let name = document.createElement('p');
        name.innerHTML=el.Title;
        name.style.marginLeft="90px"

        let btn =document.createElement("button");
        btn.innerHTML="Book Now"
        btn.style.marginLeft="95px"
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",()=>{
            addToLocal(el);
        })

        div.append(img,name,btn);
        movies.append(div);
    });
}

let arr = [];
const addToLocal=(el)=>{
    console.log(el);
    arr.push(el);
    console.log(arr);
    localStorage.setItem("movie",JSON.stringify(arr));
    window.location.href="./checkout.html"
}

const main = async()=>{

    let data = await searchMovie();
    if(data == undefined){
        return false;
    }
    appendMovie(data);
}
let id;
const debounce = (func,delay)=>{
  if(id){
      clearTimeout(id);
  }
  id=setTimeout(function(){
      func()
  },delay);
}