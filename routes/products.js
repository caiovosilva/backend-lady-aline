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
        .then(() => res.json(newProduct))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json(true))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.title = req.body.title
            product.brand = req.body.brand
            product.info = req.body.info
            product.price = Number(req.body.price)

            product.save()
                .then(() => res.json(product))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))

})

module.exports = router