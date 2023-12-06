//api key   
const api = "api_key=a5f0e339389881d2bbb54c2edad8bcd0"
// base url 
const base_url= "https://api.themoviedb.org/3"

const banner_url = "https://image.tmdb.org/t/p/original"
const img_url = "https://image.tmdb.org/t/p/w500" // your ca change "w185 to your preference"
// request for moives data

const request = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals:`${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies:`${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies:`${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies:`${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies:`${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries:`${base_url}/discover/movie?${api}&with_genres=99`,
}
//user to truncate the string

function truncate(str,n) {
    return str?.length > n? str.substr(0,n-1)+"...": str;
}


//banner 
fetch(request.fetchNetflixOrignals)
    .then((res)=> res.json())

    .then ((data)=> {
        const setMovie = 
           data.results[Math.floor(Math.random() * data.results.length-1)];
        
        let banner = document.getElementById("banner");
        let banner_title = document.getElementById("banner-title");
        let banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage = 
        "url("+banner_url+setMovie.backdrop_path +")";
        document.getElementById("banner__title").innerText = setMovie.name
        document.getElementById("banner_description").innerText = truncate(setMovie.overview,150)
        let movieDescrip = setMovie.overview
        
       
       
    })
// movies row

fetch(request.fetchNetflixOrignals)
    .then((res)=> res.json())

    .then((data)=> {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className= "row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);
        
        const title = document.createElement("h2");
        title.className="row__title";
        title.innerText = "NETFLIX ORIGINALS"
        row.appendChild(title);
        
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);


    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge"
        var s = movie.name.replace(/\s+/g, "");

        poster.id = s
        poster.src = img_url+movie.poster_path;
        row_posters.appendChild(poster)
        
    });
})

//Top rated 
fetch(request.fetchTrending)
    .then((res)=> res.json())
    .then((data)=> {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Top Rated";
        row.appendChild(title);

        const row_posters =document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
       

        data.results.forEach((movie)=>{
            const poster = document.createElement('img');
            poster.className= "row__posterLarge"
            var s2 = movie.id
            poster.src = img_url+movie.poster_path;
            row_posters.appendChild(poster)
        })

    })

    //action 
    fetch(request.fetchActionMovies)
        .then((res)=> res.json())
        .then((data)=>{
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);

            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "Action Movies";
            row.appendChild(title);

            const row_posters =document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
           
            data.results.forEach((movie)=>{
                const poster = document.createElement("img");
                poster.className= "row__posterLarge";
                var s2 = movie.id
                poster.src= img_url+movie.backdrop_path;
                row_posters.appendChild(poster)
            })


        })

        //comedy 

    fetch(request.fetchComedyMovies)
        .then((res)=> res.json())
        .then((data)=> {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);

            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "Comedy Movies";
            row.appendChild(title);

            const row_posters =document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
           

            data.results.forEach((movie)=>{
                const poster = document.createElement("img");
                poster.className= "row__posterLarge";
                var s2 = movie.id
                poster.src= img_url+movie.backdrop_path;
                row_posters.appendChild(poster)
            })
        })

    //Horror Movies
    fetch(request.fetchHorrorMovies)
        .then((res)=> res.json())
        .then((data)=> {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);

            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "Horror Movies";
            row.appendChild(title);

            const row_posters =document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            

            data.results.forEach((movie)=>{
                const poster = document.createElement("img");
                poster.className= "row__posterLarge";
                var s2 = movie.id
                poster.src= img_url+movie.backdrop_path;
                row_posters.appendChild(poster)
            })

        })
    // Romance Movies
    fetch(request.fetchRomanceMovies) 
        .then((res)=> res.json())
        .then((data)=> {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);

            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "Romance Movies";
            row.appendChild(title);

            const row_posters =document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
           

            data.results.forEach((movie)=>{
                const poster = document.createElement("img");
                poster.className= "row__posterLarge";
                var s2 = movie.id
                poster.src= img_url+movie.backdrop_path;
                row_posters.appendChild(poster)
            })

        })

    // documentry
    fetch(request.fetchDocumentaries)
        .then((res)=> res.json())
        .then((data)=> {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);

            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "Documentry";
            row.appendChild(title);

            const row_posters =document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            console.log(data)

            data.results.forEach((movie)=>{
                const poster = document.createElement("img");
                poster.className= "row__posterLarge";
                var s2 = movie.id
                poster.src= img_url+movie.backdrop_path;
                row_posters.appendChild(poster)
            })

        })