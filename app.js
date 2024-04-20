const http = require('http');
const express = require('express');
const ejs = require('ejs');
const fs = require('fs');``
const portNumber = 5000;
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const server = http.createServer(app);
server.listen(portNumber);
console.log(`Web server started and running at http://localhost:${portNumber}`);
process.stdout.write('Type itemsList or stop to shutdown the server: ')
process.stdin.setEncoding("utf8");
process.stdin.on('readable', () => {
    const dataInput = process.stdin.read();
    if (dataInput) {
        const command = dataInput.trim();
        if (command === "stop") {
            console.log("Shutting down the server");
            server.close(() => {
                process.exit(0);
            });
        } else if (command === "itemsList") {
            console.log(currItems.itemsList);
            process.stdout.write('Type itemsList or stop to shutdown the server: ');
			process.stdin.resume();
        } else {
            console.log(`Invalid command: ${command}`);
            process.stdout.write('Type itemsList or stop to shutdown the server: ');
			process.stdin.resume();
        }
    }
});


