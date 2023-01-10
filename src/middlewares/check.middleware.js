//cuando me manden un id me lo muestren en consola
function chechParam (req, res, next) {
    const {id} = req.params

    id && console.log(`the id is ${id}`)
    next()
}

module.exports = {chechParam}