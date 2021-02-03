const http = require("http"); 
  
// Port number 
const PORT = 3000; 
  
// Creating server 
const server = http.createServer( 
  
  // Server listening on port 3000 
  function (req, res) { 
     res.write('Hello geeksforgeeks!');   
     // Write a response to the client 
     res.end();   
  } 
) 
.listen(PORT, error => { 
   // Prints in console 
   console.log(`Server listening on port ${PORT}`) 
}); 