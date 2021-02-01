const express = require("express")
const multer = require('multer')
const path = require('path')
const bodyParser = require("body-parser")
const helpers = require('./utilities/helpers');
var moment = require('moment')

const hostname = "localhost"
const port = 3000

const { getContourImage } = require("./utilities/effects");
const e = require("express");


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, 'static/ImageUploads/'));
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const app = express()

app.use(bodyParser.json())

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
        {
            console.log("######## File not found ############")
            console.log(`Date and time : ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
            return response.send('Please select an image to upload');
        }
        }
        else if (err instanceof multer.MulterError) {
            console.log("######## Multer error in file upload #######")
            console.log(`Date and time : ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
            console.log(err)
            return response.send(err);
        }
        else if (err) {
            console.log("########### Error in file upload #########")
            console.log(`Date and time : ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
            console.log(err)
            return response.send(err);
        }

        
        const ImgUri =  `http://${hostname}:${port}/static/ImageUploads/${request.file.path.split("ImageUploads/")[1]}`
        // const ImgUri =  `http://ai.bluekaktus.com/api/contourApi/${request.file.path}`
        

        getContourImage(ImgUri, request.file.filename)
        .then(() => {
            console.log("###### Contour image generated and saved #########")
            console.log(`Date and time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
            result = {
                "orignal": ImgUri,
                // "contour": `http://ai.bluekaktus.com/api/contourApi/static/contourImages/${request.file.filename}`
                "contour": `http://${hostname}:${port}/static/contourImages/${request.file.filename}`
            }
            console.log(result)
            response.json(result)
        })
        .catch((e) => {
            console.log("######## Countour imgage url sending error #######")
            console.log(`Date and time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
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

module.exports = {app: app, port: port, hostname: hostname}
// const port = 3000
// app.listen(port, () => console.log(`Listening to port ${port}`))

