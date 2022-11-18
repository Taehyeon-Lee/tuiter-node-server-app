import tuitsArray from './tuits.js'
let tuits = tuitsArray

const TuitsController = (app) =>{
    app.get('/tuits', (req, res) => {
        res.send(tuits)
    })

    app.get('/tuits/:tid', (req, res) => {
        const tuitID = req.params['tid']
        const tuit = tuits.find(t => t._id === tuitID)
        res.send(tuit)
        })

    app.post('/tuits', () => {

    })

    app.delete('/tuits/:tid', (req, res) => {
        const tid = req.params.tid
        res.send(`deleting tuit ${tid}`)
    })

    app.put('/tuits', () => {})
}

export default TuitsController;