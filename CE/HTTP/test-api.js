const http  = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async(req,res) => {
    console.log('New request received');
    res.writeHead(200, { 'Content-Type': 'text/html'});

    const response = await axios.get("https://api.github.com/search/users?q=location:ghaziabad")
    const productsdata = response.data.items;
let fromdata = `<html><head></head><body>` 
    productsdata.forEach((items)=>{
        fromdata += `<div><img src="${items.avatar_url}"></div>`   
    }); 
    fromdata +=`<body><html>`  
    res.end(fromdata);
});
server.listen(port,() => {
    console.log(`server is running on port ${port}`);
});