const express = require('express');
const router = express.Router();
const {upload} = require('../middleware/multerFile');
const {handleFileUpload} = require('../controllers/fileUploaderController')

  

router.post('/', upload.single('file'), handleFileUpload)

module.exports = router;
