const http  = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async(req,res) => {
    console.log('New request received');
    res.writeHead(200, { 'Content-Type': 'text/html'});
    // const response = await fetch("https://dummyjson.com/products")
    // const data = await response.json();

    const response = await axios.get("https://dummyjson.com/products")
    const productsdata = response.data.products;
let fromdata = `<html><head></head><body>` 
    productsdata.forEach((product)=>{
        fromdata += `<div><img src="${product.thumbnail}"></div>`   
    }); 
    fromdata +=`<body><html>`  
    res.end(fromdata);
});
server.listen(port,() => {
    console.log(`server is running on port ${port}`);
});