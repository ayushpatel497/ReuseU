const Item = require('../models/Item')
const { v4: uuidv4 } = require('uuid');

const handleGetItems = async(req, res) => {
    const items = await Item.find()
    res.send(items)
}

const handleAddItem = async(req, res) => {    
    // const {item,contact,desc,category} = (req.body)
    const itemName = req.body.item;
    const contactNumber = req.body.contact
    const category = req.body.category
    const description = req.body.desc

console.log(req.body, itemName);

    const result = await Item.create({id:uuidv4(),itemName,contactNumber,category,description})
    res.send(result)
}

module.exports = {
    handleGetItems,
    handleAddItem
}
