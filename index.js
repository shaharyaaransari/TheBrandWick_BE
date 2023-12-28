const express = require("express");
const { mongoose } = require("mongoose");
const userRouter = require("./routes/UserRouter");
const app = express();
   const cors = require("cors")
require("dotenv").config()
app.use(cors());
app.use(express.json());
 
app.use("/user",userRouter)
app.get("/", (req, res) => {
        res.send("welcome to HomePage")
})

const connections = async () => {
        try {
                await mongoose.connect(process.env.MONGO_URL)
                console.log("connected!..")
        } catch (error) {
                console.log(error)
        }
}

app.listen(8080, () => {
        connections()
        console.log("server runnig..")
})


