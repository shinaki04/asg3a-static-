const http = require('http');  // Imports Node.js's built-in HTTP module to create a web server.
const fs = require('fs');  // Imports the File System module to read files from disk 
const path = require('path'); // //Imports the Path module to handle and normalize file paths across different operating systems.


const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let ext = path.extname(filePath);

    
    let contentType = 'text/html';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.js') contentType = 'application/javascript';

  
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found!');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});
/*It hosts your frontend files (HTML, CSS, JS).

It serves them to the browser when someone visits your site.

It handles basic routing (like /, /app.js, etc.).

It sets the right file type so the browser can render your website properly.*/

server.listen(3000, () => console.log('Server running at http://localhost:3000/'));
