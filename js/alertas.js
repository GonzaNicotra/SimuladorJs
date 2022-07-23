const prodAgregado = ()=> {
    Swal.fire({
        title: 'Producto agregado al carrito',
        confirmButtonText: 'Aceptar',
        timer: 2000,
    })
}

const elimCarrito = ()=> {
    Swal.fire({
        title: 'Se vaciará el carrito',
        confirmButtonText: 'Aceptar'
    })
}