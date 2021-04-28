const express = require("express")
const multer = require('multer')
const path = require('path')
const bodyParser = require("body-parser")
const helpers = require('./utilities/helpers');
const fs = require('fs').promises

const hostname = "localhost"
const port = 3000

const { getContourImage } = require("./utilities/effects");
const { codeGenerator } = require("./utilities/fileWriter")
const { fetchScreenObject } = require("./utilities/fetchScreenObject")

const { request } = require("http");
const { response } = require("express");
const { fdatasync } = require("fs");


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'static/ImageUploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, "static")))

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs')


app.get("/", (request, response) => {
    response.render("test.html")
})

app.post("/getContourImage", (request, response) => {

    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('image');
    
    
    upload(request, response, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (request.fileValidationError) {
            return response.send(request.fileValidationError);
        }
        else if (!request.file) {
            return response.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return response.send(err);
        }
        else if (err) {
            return response.send(err);
        }

        
        // const ImgUri =  `http://${hostname}:${port}/${request.file.path}`
        const ImgUri =  `http://ai.bluekaktus.com/api/contourApi/${request.file.path}`
        

        getContourImage(ImgUri, request.file.filename)
        .then(() => {
            console.log("###### Contour image generated and saved #########")
            result = {
                "orignal": ImgUri,
                "contour": `http://ai.bluekaktus.com/api/contourApi/static/contourImages/${request.file.filename}`
                // "contour": `http://${hostname}:${port}/static/contourImages/${request.file.filename}`
            }
            console.log(result)
            response.json(result)
        })
        .catch((e) => {
            console.log("######## Countour imgage url sending error #######")
            console.log(e)
        })
        // result = {
        //     "orignal": ImgUri,
        //     "contour": `http://${hostname}:${port}/static/contourImages/${request.file.filename}`
        // }
        // response.json(result)

        })
        

        
    })

app.post('/uploadImage', (req, res) => {

    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('image');
    
    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }
        
        // Display uploaded image for user validation
        
        const serverAddress = hostname+":"+port
        res.send(path.join(serverAddress, req.file.path))
    });
});

app.get("/reactNativeTool", (request, response) => {
    response.render("reactNativeTool.html")
})

app.post("/generateCode", async (request, response) => {

    var screenCode = request.body.screenCode
    var placeholderCodeObject = {}
    try{
        placeholderCodeObject   = JSON.parse(JSON.stringify(request.body.placeholderCode))
    }
    catch(error)
    {
        console.log("############## Unable to parse user placeholder input into json object ##########")
        console.log("Placeholder code recieved: ", request.body.placeholderCode)
        console.log(error)
    }
    

    var status = "Placeholder file not written"
    
    {/*fs.writeFile('utilities/placeholders.js', placeholderCode, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
        console.log('placeholder saved');
      });
    
    */}

    try {
        await fs.writeFile('utilities/placeholders.js', JSON.stringify(placeholderCodeObject))
        var screenObject = await fetchScreenObject(screenCode)

        console.log("################### screen object recieved for screen code "+screenCode+" ##########")
        console.log(screenObject)
        var code = await codeGenerator(screenObject, placeholderCodeObject)

        //console.log("################## Code object recieved from code generator ###################")
        //console.log("Code Object: ",  code)

        if(code.structure == null)
        {
            await response.send(code)
            return
        }

        await fs.writeFile(`/var/TMP/generatedCode_${screenCode}.js`, code.structure)
        await fs.writeFile(`/var/TMP/generatedStyleSheet_${screenCode}.js`, code.style)

        //response.send(code)

       
        response.download(`/var/TMP/generatedCode_${screenCode}.js`)

    }
    catch(error)
    {
        console.log("################### Error in code generation process ############")
        console.log(error);
        response.send(error)
        //
    }
    

    //status = "Placeholder scuccessfully modified"

    
})

module.exports = {app: app, port: port, hostname: hostname}
// const port = 3000
// app.listen(port, () => console.log(`Listening to port ${port}`))

