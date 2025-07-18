// https://api.tvmaze.com/search/shows?q=avengers


let form = document.querySelector('.searchForm');
let searchTerm = document.querySelector('#searchTerm')
let container = document.querySelector('.movieContainer');

form.addEventListener('submit', async(e)=>{
    container.innerHTML = ""
    e.preventDefault()
    console.log(searchTerm.value);
    let url = ` https://api.tvmaze.com/search/shows?q=${searchTerm.value}`
    let res = await fetch(url);
    let data = await res.json()
    createMovieCards(data)
    searchTerm.value = ""
  
})

function createMovieCards(movies){
  movies.forEach((el , i)=>{
       let {name , language , image} = el.show;
     let card = document.createElement('div');
     let img = document.createElement('img');
     let m_name = document.createElement('h3');
     m_name.innerText = name;
     img.src = image.medium;
     card.appendChild(img)
     card.appendChild(m_name)
     card.classList.add('movieCard')
     container.appendChild(card)
     
  })
    
}