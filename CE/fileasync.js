const fs = require("fs/promises");
const read=async()=>{
    const data = await fs.readFile("./data.txt","utf-8");
    console.log(data);
}
read();


const write =async()=>{
    const newdata = "This is my new work"
    await fs.writeFile("./data.txt",newdata, "utf-8");
    console.log(data);
}
write();

console.log("first")
console.log("second")
console.log("third")
console.log("fourth")