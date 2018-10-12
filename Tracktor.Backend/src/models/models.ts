const mongoose = require("mongoose");

const user = new mongoose.Schema({
    nick: String //do not use names, surnames etc. RODO bitch
})

const mealSchema = new mongoose.Schema({
    ingredients: [{
        ref: "Ingredient",
        type: mongoose.Schema.Types.ObjectId
    }],
    totalCarbo: Number,
    totalCalories: Number,
    totalFat: Number,
    totalProtein: Number,
    totalCHEX: Number,
    totalFPEX: Number,
    baseInsulinInjectinoCalculation: Number,
    notes: Number,
})

const ingredientSchema = new mongoose.Schema({
    foodType: {
        ref: "FoodType",
        type: mongoose.Schema.Types.ObjectId,
    },
    weight: Number,
    carbohydrates: Number, // (auto from above weight/100 * carboIn100g) 
    fat: Number, //  (auto from above weight/100 * fatIn100g) 
    calories: Number, // (auto from above weight/100 * caloriesIn100g)
    proteins: Number, //  (auto from above weight/100 * proteinsIn100g)
    CHEXs: Number, // (for this FOOD_TYPE)
    FPEXs: Number, // (for this FOOD_TYPE)
    notes: Number, 
})

const foodTypeSchema = new mongoose.Schema({
    name: String,
    carbohydrates: Number, //  per 100g
    fats: Number, //  per 100g
    proteins: Number, //  per 100g
    calories: Number, //  per 100g
    CHEXs: Number, //  CarboHydrateExchange per 100g
    FPEXs: Number, //  FatProteinExchange per 100g
    GI: Number,  // (GlycemicIndex)
})

const activitySchema = new mongoose.Schema({
    timestamp : Number,
})

const bloodPressureSchema = new mongoose.Schema({
    systolic: Number, // (skurczowe, to większe, ex. 120)
    diastolic: Number, //  (rozkurczowe, to mniejsze, ex. 80)
    BPMs: Number,
    timestamp: Date,
    notes: String
})

const sugarLevelSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    value: Number,
    carbohydrates: Number,
    foodInsulin: Number,
    correctionInsulin: Number,
    baseInsulin: Number,
    meal: {
        ref: "Meal",
        type: mongoose.Schema.Types.ObjectId,
    },
    activity: {
        ref: "Activity",
        type: mongoose.Schema.Types.ObjectId,
    },
    bloodPressure: {
        ref: "BloodPressure",
        type: mongoose.Schema.Types.ObjectId,
    },
    timestamp: Date,
    geocoordinates: {
        lat: Number, 
        long: Number
    },
});

const DBModels = {
    UserModel: mongoose.model("User", user),
    MealModel: mongoose.model("Meal", mealSchema),
    IngredientModel: mongoose.model("Ingredient", ingredientSchema),
    FoodTypeModel: mongoose.model("FoodType", foodTypeSchema),
    ActivityModel: mongoose.model("Activity", activitySchema),
    BloodPressureModel: mongoose.model("BloodPressure", bloodPressureSchema),
    SugarLevelModel: mongoose.model("SugarLevel", sugarLevelSchema)
}

export default DBModels







