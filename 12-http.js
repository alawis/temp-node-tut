//allows us to set our servers ---> will cover more in the express
//STEPS: 
/*
    - Create server using createserver method
    - add listen port
    - 
 */

    const http = require('http');

    const server = http.createServer((req, res)=>{  // res= response, req = request
        if (req.url === '/'){
            res.end('Welcoeme to our homepage')
        }
        if(req.url === '/about'){
            res.end('Here is a our short history')
        }
    
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that you are looking for</p>
        <a href = "/">back home </a>
        `)
    })
    
    server.listen(8080)
    
    