@@ -19,6 +19,13 @@ app.get('/products/:id', api.getProduct)
app.put('/products/:id', api.editProduct)
app.delete('/products/:id', api.deleteProduct)
app.post('/products', api.createProduct)

app.post('/orders', api.createOrder)
app.get('/orders/:id', api.editOrder)
app.get('/orders/:id', api.deleteOrder)
app.post('/orders', api.listOrders)


// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))