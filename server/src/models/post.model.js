import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageFile: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: "uncategorized"
    },
    slug: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        default: "Express Wave"
    },
    ownerAvatar: {
        type: String,
        default: "https://res.cloudinary.com/dg946flpg/image/upload/v1714313123/ux1hfnatfdi1yyaoc20x.jpg"
    }
}, { timestamps: true })

postSchema.plugin(mongooseAggregatePaginate)

postSchema.methods.getPostId = async function () {
    return this._id;
}

export const Post = mongoose.model('Post', postSchema)