const http = require('http');   
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000; 

const server = http.createServer(app);


// Load the planets data before starting the server
// so that the data is available when the server starts
async function startServer(){
    await loadPlanetsData();
    server.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);  
    });
}
startServer();