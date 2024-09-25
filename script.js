let movies = [


{
    name:"Avengers Endgame",
    poster:"https://tse3.mm.bing.net/th?id=OIP.WVWesbet0E70HmkG7weOjQHaKC&pid=Api&P=0&h=180",
    rating:8.7
},
{
    name:"Monster House",
    poster: "https://tse3.mm.bing.net/th?id=OIP.1umjRUVLTbPQCPVU_q1HPgHaK-&pid=Api&P=0&h=180",
    rating: 8
},
{
    name:"Avatar",
    poster:"https://tse1.mm.bing.net/th?id=OIP.pV3VBmxyDDAVaerE8IIMnwHaK9&pid=Api&P=0&h=180",
    rating:9
},
{
    name:"The Darkest Day Of My Life",
    poster:"https://tse3.mm.bing.net/th?id=OIP.cmuNLRAJuIFk0jVGCZ0WlAHaKe&pid=Api&P=0&h=180",
    rating:9
},
{
    name:"Love Story",
    poster:"https://tse1.mm.bing.net/th?id=OIP.1VcphvNI_qXJxJNBDRdLgwHaKe&pid=Api&P=0&h=180",
    rating:8
},
{
    name:"Oppenheimer",
    poster:"https://tse2.mm.bing.net/th?id=OIP.9kHjYBavvuQxkHvsLmk1DAHaLP&pid=Api&P=0&h=180",
    rating:7
},
{
    name:"Wood",
    poster:"https://tse2.mm.bing.net/th?id=OIP.lkjFs1t4zHjxvw18U3bF0gHaKe&pid=Api&P=0&h=180",
    rating:8
},
{
    name:"Wolverine",
    poster:"https://tse2.mm.bing.net/th?id=OIP.cDWz2koa_HRVKtEs06G0ogHaK-&pid=Api&P=0&h=180",
    rating:7
},
{
    name:"Bad Leader",
    poster:"https://tse1.mm.bing.net/th?id=OIP.husXuyj7d41bkTiQS2HcygHaKe&pid=Api&P=0&h=180",
    rating:8
},
{
    name:"Mystery",
    poster:"https://tse3.mm.bing.net/th?id=OIP.hgMwvpMRhV9ulygjaAEAZwHaKe&pid=Api&P=0&h=180",
    rating:9
},


];




function searchMovie()
{
    let movieName = document.getElementById('search').value;
    // console.log(movieName);
    if(movieName!=="")
    {
        let result =movies.filter(function(movie)
                        {
                            return movie.name.toUpperCase().includes(movieName.toUpperCase())
                        })
                        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }


}
 
function displayMovies(data)

 

{
    document.getElementById("movies").innerHTML="";


    let htmlString = ``;
    
    for( let i=0;i<data.length;i++)
    {
        
        htmlString=htmlString+`
        <div class="movie"> 
            <div class="overlay">
                <div class="vedio">

                </div>
                <div class="details">
                    <h1> ${data[i].name} </h1>
                    <h2>IMDB :${data[i].rating}</h2>

                </div>
            </div>
            <img class="poster"  src="${data[i].poster}" alt="poster">
        </div>  
        `


    }
    console.log(htmlString);


    document.getElementById("movies").innerHTML=htmlString;

}

displayMovies(movies);


function dosomething(a)
{

}

dosomething(2)





   // let movieDIV = document.createElement("div");
    // movieDIV.classList.add("movie");

    // let overlayDIV = document.createElement("div");
    // overlayDIV.classList.add("overlay");

    // movieDIV.appendChild(overlayDIV);


    // console.log(movieDIV);