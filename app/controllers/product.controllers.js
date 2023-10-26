const express = require('express');

const db = require('./../models/db');

const model = require('./../models/products.models');

const Products = db.products;

exports.getAll = async (req, res) => {

    console.log(model.findOne());
    console.log("---------------" + Products);

    // const data = Products.find();

    // console.log("Final Response " + data);
    Products.find().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

};