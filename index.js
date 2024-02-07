// import express and create web server
import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);


// read dog facts js file
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname));

import {data} from './dog_facts.js';


//For a request to GET /facts?number=1, an example response could be:

// { "facts": ["A group of pugs is called a grumble."], "success": true }

app.get('/facts', (req,res) => {

    if(req.query.number){
        let text= '"facts": ';
        // return facts in number
        for(let i = 0; i< Math.min(data.length,req.query.number); i++) {
            text += `["${data[i]}"], <br>`;
        }
        text += '"success": true';
        res.send(text);
    }else{
        // no number received. return a facts
        res.write(data.toString());
    }
});


// handle 404 error code 
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404-Not Found");
});

// indicator of running
app.listen(app.get('port'), ()=> {
    console.log("Express Server is running");
});
