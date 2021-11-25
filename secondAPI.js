const express = require("express")
const app = express()
const products = require("./data.js") //Importa la BASE DE DATOS

app.listen(5000, () => {
  console.log("server is listening on port 5000")
})

//Devuelve todos los valores de la BBDD

// app.get("/api/products", (req, res) => {
//   res.json(products)
// })

// Devuelve solo algunos valores de la BBDD

// app.get("/api/products", (req, res) => {
//   const partial_products = products.map((product) => {
//     return { id: product.id, name: product.name }
//   })
//   res.json(partial_products)
// })

// Devuelve solo un valor, con una URL específica:

app.get("api/products/:productID", (req, res) => {
  // :productID toma el valor de const = id
  const id = Number(req.params.productID)
  const product = products.find((produc) => product.id === id)
  if (!product) {
    // Si el producto del req no se encuentra, se retorna un 404
    return res.status(404).send("Product not found")
  }
  res.json(product)
})
