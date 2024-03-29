const pokemonList = document.querySelector('#pokemon');
const pokedex = document.querySelector('#pokedex')

const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

function getAllPokemon(){
    for(let i=1; i<=500; i++){
        const img = document.createElement('img');
        img.setAttribute('src', imgUrl+`/${i}.png`);
        img.setAttribute('alt', `${i}`)
        pokemonList.appendChild(img)
    }
}

function getPokeInfo(evt){
    const id = evt.target.getAttribute('alt');
    console.log('Pokemon id:'+ id);

    axios.get(`${baseUrl}${id}`)
    .then(res => {
        console.log(res.data);
        const {name, height, weight} = res.data;

        const html_str = `
            <img src="${res.data.sprites.front_default}" />
            <h1>Name: ${name}</h1>
            <h4>Height: ${height}</h4>
            <h4>Weight: ${weight}</h4>
        `
        pokedex.innerHTML = html_str

    })
    .catch(err => console.log(err))
    

} 
getAllPokemon();

const pokeImgs = document.querySelectorAll('img');

for(let i=0; i<pokeImgs.length; i++){
    pokeImgs[i].addEventListener('click', getPokeInfo)
}


