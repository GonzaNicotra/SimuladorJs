const contenedorProductos = document.getElementById('contenedorProductos')
const templateCard = document.getElementById('templateCard').content
const fragment = document.createDocumentFragment()

let car = []

document.addEventListener('DOMContentLoaded', () => {
    fetchdata()
})

contenedorProductos.addEventListener('click', e =>(
    addCar(e)
))

const fetchdata = async () => {
    try {
        const resp = await fetch ('js/moldeArte.json')
        const data = await resp.json()
        contenidoCard(data)
    } catch (error) {
        console.log(error)
    }
}

const contenidoCard = data => {
   data.forEach(producto => {
    templateCard.querySelector('h5').textContent = producto.nombre
    templateCard.querySelector('p').textContent = producto.precio
    templateCard.querySelector('img').setAttribute("src", producto.img)
    templateCard.querySelector('.btn-primary').dataset.id = producto.Id
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
   })
   contenedorProductos.appendChild(fragment)
}

const addCar = e => {
    if (e.target.classList.contains('btn-primary')) {
        setCar(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCar = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-primary').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    
    if (car.hasOwnProperty(producto.id)) {
        producto.cantidad = car[producto.id].cantidad + 1
    }
    
    // car[producto.id] = {...producto}
    console.log(producto)
}