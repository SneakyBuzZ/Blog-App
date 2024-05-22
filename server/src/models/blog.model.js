import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    imageFile: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true })

blogSchema.plugin(mongooseAggregatePaginate)

blogSchema.methods.getPostId = async function () {
    return this._id;
}

export const Blog = mongoose.model('Blog', blogSchema)