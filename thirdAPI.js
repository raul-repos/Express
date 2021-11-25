const express = require("express")
const app = express()
const products = require("./data.js") //Importa la BASE DE DATOS

app.listen(5000, () => {
  console.log("server is listening on port 5000")
})

// Retornar el valor pedido mediante una query

app.get("api/query", (req, res) => {
  const name = req.query.toLowerCase()
  const products_result = products.filter((product) =>
    product.name.toLowerCase().includes(name)
  )
  if (products_result.length < 1) {
    res.status(200).send("No products matched your search")
  }
  res.json(products_result)
})
