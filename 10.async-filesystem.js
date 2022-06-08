const {readFile,writeFile}=require('fs')

readFile("./content/subfolder/txt.txt",'utf8',(err,result)=>{
if(err)return
console.log(result)
})

writeFile("./content/subfolder/txt3.txt","What a fantastic dream about city in Poland",(err,result)=>{
    if(err)return
    console.log(result)
})