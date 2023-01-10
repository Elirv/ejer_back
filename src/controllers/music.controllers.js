const allAlbums = async (req, res, next) => { //req=loque se manda, res= la respuesta
    //console.log('all albums');
    try{
        res.status(200).send({ status: 'OK', msg: "All Albums"})
        //next()
    } catch (error) {
        req.status(500).send({status:'FALSE'})
        //next()
    }
    //next()
}

const createAlbum = async (req, res, next) => {
    const {id} = req.params
    const body = req.body
    console.log(body);
    try{
        res.status(201).send({ status: 'OK', msg: `Created album with ${id}`})
        //next()
    } catch (error) {
        req.status(500).send({status:'FALSE'})
        //next()
    }
    //next()
}



module.exports = {allAlbums, createAlbum}