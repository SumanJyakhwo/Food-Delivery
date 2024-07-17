import express from "express"

import {addFood, editFood, listFood, listFoodById, removeFood} from "../controllers/foodConroller.js"
import multer from "multer"

const foodRouter = express.Router();

//Image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }

})

const upload = multer({storage:storage})
foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)
foodRouter.put(`/edit/:id`, editFood)
foodRouter.get('/get/:id', listFoodById);

export default foodRouter;