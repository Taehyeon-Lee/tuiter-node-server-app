import post from './tuits.js';
let tuits = post;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id.toString() === tuitdIdToUpdate
    );
    if (tuitdIdToUpdate >= 0){
        tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
        res.sendStatus(200);
    }
    else{
        res.sendStatus(404);
    }

}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(
        (t) => t._id.toString() !== tuitdIdToDelete
    );
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}