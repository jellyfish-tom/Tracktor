const path = require("path")
const express = require("express")
const webpack = require("webpack")
const webpackConfig = require("./webpack.dev.js") // SHOULDNT IT CHECK NODE.env? 
const app = express()
const port = process.env.PORT || 3000
const mongoose = require("mongoose");

let compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath,
   stats: {
   	colors: true
   }
}));
app.use(require("webpack-hot-middleware")(compiler));
app.use(express.static(path.resolve(__dirname, "dist")));


//move all this shit to separate file initializing DB
mongoose.connect("mongodb://localhost/tracktor");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Woo hoo! MongoDB connected!")
    console.log("Creating schemas...")

    const user = new mongoose.Schema({
        nick: string //do not use names, surnames etc. RODO bitch
    })

    const suerLevelSchema = new mongoose.Schema({
        timestamp: string
        geocoordinates: string
        value: number
        carbohydrates: number
        foodInsulin: number
        correctionInsulin: number
        baseInsulin: number
        meal: [mealSchema]
        activity: [activitySchema]
        bloodPressure: [bloodPressureSchema]
        activity: [activitySchema]
    });

    const mealSchema = new mongoose.Schema({
        - array[[FOOD]] (dropdown with autocomplete)
        - totalCarbo
        - totalCalories
        - totalFat
        - totalProtein
        - totalCHEX
        - totalFPEX
        - baseInsulinInjectinoCalculation
        - notes
    })

    const foodSchema = new mongoose.Schema({
        - [[FOOD_TYPE]]
        - weight
        - carbohydrates (auto from above weight/100 * carboIn100g) 
        - fat (auto from above weight/100 * fatIn100g) 
        - calories (auto from above weight/100 * caloriesIn100g)
        - proteins (auto from above weight/100 * proteinsIn100g)
        - CHEX (for this FOOD_TYPE)
        - FPEX
        - notes
    })

    const foodType = new mongoose.Schema({
        - name
        - carbo per 100g
        - fat per 100g
        - protein per 100g
        - calories per 100g
        - CHEX per 100g (CarboHydrateExchange)
        - FPEX per 100g (FatProteinExchenge)
        - GI (GlycemicIndex)
    })

    const activitySchema = new mongoose.Schema({
        - timestamp 
    })

    const bloodPressureSchema = new mongoose.Schema({
        - systolic (skurczowe, to większe, ex. 120)
        - diastolic (rozkurczowe, to mniejsze, ex. 80)
        - timestamp
        - notes
    })
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}`)
});