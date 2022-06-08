const http=require('http')

const server=http.createServer((req,res)=>{
switch(req.url)
{
    case '/':
        res.end("Strona Glowna");break;
        case '/about':
            res.end("About");break;
            default:
                res.end('Opps page doesnt exist')
}
})

server.listen(3000)