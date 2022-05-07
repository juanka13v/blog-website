const insert = async (model, items) => {
    await model.insertMany(items)
    console.log('inserted');
}


module.exports = {
    insert
}