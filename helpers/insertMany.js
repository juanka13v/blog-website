const insert = async (model, items) => {
    await model.insertMany(items)
}


module.exports = {
    insert
}