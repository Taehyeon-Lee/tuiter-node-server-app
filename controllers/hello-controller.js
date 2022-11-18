
const exampleController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Hello World Life is Good!!')
    })

    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })

    app.get('/add/:a/:b', (req, res) => {
        const A = parseInt(req.params.a)
        const B = parseInt(req.params['b'])
        const C = A + B
        res.send(`${A} + ${B} = ${C}`)
    })

    app.post('', () => {})
    app.delete('', () => {})
    app.put('', () => {})
}

export default exampleController;


