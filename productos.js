

let stockProductos=[
  {id:1,nombre: "buzo 1", tipo: "buzo",cantidad:1, desc:"Un buzo re va con vos",precio:100,talle:"L",img:"../asset/desayunos_y_meriendas/almuhaditas__granix.jpg"},
  {id:2,nombre: "buzo 2", tipo: "buzo",cantidad:1, desc:"Un buzo re va con vos",precio:100,talle:"L",img:"../asset/desayunos_y_meriendas/almuhaditas__granix.jpg"},
  {id:3,nombre: "buzo 3", tipo: "buzo",cantidad:1, desc:"Un buzo re va con vos",precio:100,talle:"L",img:"../asset/desayunos_y_meriendas/almuhaditas__granix.jpg"},
  {id:4,nombre: "buzo 4", tipo: "buzo",cantidad:1, desc:"Un buzo re va con vos",precio:100,talle:"L",img:"../asset/desayunos_y_meriendas/almuhaditas__granix.jpg"},
  {id:5,nombre: "buzo 5", tipo: "buzo",cantidad:1, desc:"Un buzo re va con vos",precio:100,talle:"L",img:"../asset/desayunos_y_meriendas/almuhaditas__granix.jpg"}
]

let contendorProducto=document.getElementById('contenedor-producto')

let carrito=[]
const div=document.createElement('div')
stockProductos.forEach((producto)=>{
  div.classList.add('producto')
  div.innerHTML+=`
  <img src=${producto.img} alta="">
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <p>Talle${producto.talle}</p>
  <p class="precioProductoo">Precio: ${producto.precio}</p>
  <button id="agregar${producto.id}" class="boton-agregar">Agrear<i class fas-fa-shopping-carts></i></button>
  
  `
  contendorProducto.appendChild(div)
  const boton=document.getElementById('agregar${producto.id}')
 
  boton.addEventListener('click',()=>{
    agregarAlCarrito(producto.id)
   
  })

})


const agregarAlCarrito=(prodId)=>{
  const item = stockProductos.find((prod) => prod.id ===prodId)
  carrito.push(item)
  console.log(agregarAlCarrito)
}