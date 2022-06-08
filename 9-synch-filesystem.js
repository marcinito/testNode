const { readFileSync,writeFileSync}=require('fs')


const firstText=readFileSync("./content/subfolder/txt.txt",'utf8')
//Jezli istnieje taki plik w tej sciezce to zostanie on nadpisany jezeli nie to zostanie utworzony \/
writeFileSync("./content/subfolder/txt2.txt","Jakis tam tekst o czym, niczym")

console.log(firstText)