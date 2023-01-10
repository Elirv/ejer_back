//cuando me manden un id me lo muestren en consola
function chechParam(req, res, next) {
    const { id } = req.params

    id && console.log(`the id is ${id}`)
    next()
}

async function doubleCheckParam(req, res, next) {
    const { id } = req.params
    try {
        id && console.log(`Double check the id ${id}`)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { chechParam, doubleCheckParam }