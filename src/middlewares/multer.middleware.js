import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    // we can store file with unique file name or id like below:-
    /* const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
    */

    //but currently we are keeping file with samename as of given by user
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })