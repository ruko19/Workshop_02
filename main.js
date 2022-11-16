const dataUrl = ('http://localhost:3000/pelisc2');
const crearCards = document.getElementById('crearCards');


// cuando se cargue a pagina, va a cargar todo el continido de la api a la pagina HTML
document.addEventListener('DOMContentLoaded', e => {
    fetchData();
})

const fetchData = async (filtro = "") => {
    try {

        const dataUrl1 = await fetch(`${dataUrl}?q=${filtro}`);
        const data = await dataUrl1.json()
        console.log(data)
        // imprimir la data en las cartas
        imprimirCards(data);



    } catch (error) {
        console.log(error)

    }
}

const imprimirCards = data => {

    let elementos = '';

    data.forEach(card => {

        elementos += `

        <div class="card">
        <div class="hero-card">
        <figure>
            <img src="${card.imagen}" alt="">
        </figure>
        </div>
        <div class="info__card">
            <h2 class="card__tittle">${card.nombre}</h2>
            <p class="gerero">${card.genero}</p>
            <div class="puntuacion__container">
                <i class="fa-solid fa-star"></i>
                <p>${card.puntaje}</p>
            </div>
        </div>
    </div>
        
        
        `

    });

    crearCards.innerHTML = elementos
}



// ------ Filtro ---- //

const search = document.querySelector("form")

search.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event);
    let searched = event.target.search.value
    console.log(searched)
    /*    crearCards.innerHTML = "" */

    fetchData(searched)

})