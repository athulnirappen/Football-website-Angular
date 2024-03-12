const jsonServer = require('json-server')
const cors=require('cors')


const server = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware=jsonServer.defaults()

const PORT = 8000 || process.env.PORT

server.use(cors())
server.use(router)
server.use(middleware)


server.listen(PORT, () => {
    console.log(`Backend is running on the port:${PORT}`);
})

