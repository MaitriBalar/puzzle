var express = require('express');
var router = express.Router();

const puzzleController = require("../controllers/puzzle");
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })


router.post("/create_Category", upload.single('image'), puzzleController.CreateCategory);

router.get("/get_categories", puzzleController.GetCategory);


router.post("/create_Puzzle", puzzleController.CreatePuzzle);

router.get("/get_Puzzle", puzzleController.GetPuzzle);


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
