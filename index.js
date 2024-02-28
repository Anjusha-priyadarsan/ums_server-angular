// import jsonserver

const json_server=require('json-server')

// import cors
const cors=require('cors')

// create json server

const umsApp=json_server.create()


// create a middleware for json-js data conversion

const middleware=json_server.defaults()


// create route for connect json file with main file

const route=json_server.router('user.json')

// apply cors

umsApp.use(cors())

// apply middleware as application specific middleware

umsApp.use(middleware)


// applyt route

umsApp.use(route)

const PORT=8000

umsApp.listen(PORT,()=>{
    console.log(`UMS server started at port ${PORT}`);
})




