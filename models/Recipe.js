const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const RecipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 2000
        },
        ingredients: {
            type: String,
            required: true,
            maxlength: 2000
        },
        ingredients1: {
            type: String,
            maxlength: 2000
        },
        ingredients2: {
            type: String,
            maxlength: 2000
        },
        ingredients3: {
            type: String,
            maxlength: 2000
        },
        ingredients4: {
            type: String,
            maxlength: 2000
        },
        ingredients5: {
            type: String,
            maxlength: 2000
        },
        ingredients6: {
            type: String,
            maxlength: 2000
        },
        ingredients7: {
            type: String,
            maxlength: 2000
        },
        ingredients8: {
            type: String,
            maxlength: 2000
        },
        ingredients9: {
            type: String,
            maxlength: 2000
        },
        ingredients10: {
            type: String,
            maxlength: 2000
        },
        instruction: {
            type: String,
            required: true,
            maxlength: 2000
        },
        instruction1: {
            type: String,
            maxlength: 2000
        },
        instruction2: {
            type: String,
            maxlength: 2000
        },
        instruction3: {
            type: String,
            maxlength: 2000
        },
        instruction4: {
            type: String,
            maxlength: 2000
        },
        instruction5: {
            type: String,
            maxlength: 2000
        },
        instruction6: {
            type: String,
            maxlength: 2000
        },
        instruction7: {
            type: String,
            maxlength: 2000
        },
        instruction8: {
            type: String,
            maxlength: 2000
        },
        instruction9: {
            type: String,
            maxlength: 2000
        },
        instruction10: {
            type: String,
            maxlength: 2000
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        photo: {
            data: Buffer,
            contentType: String
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Recipe", RecipeSchema);
