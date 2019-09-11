const router = require('express').Router()
let Product = require('../models/product.model')

router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
    const title = req.body.title
    const price = Number(req.body.price)
    const brand = req.body.brand
    const info = req.body.info
    const newProduct = new Product({
        title,
        price,
        brand,
        info,
    })
    newProduct.save()
        .then(() => res.json('Product added.'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router