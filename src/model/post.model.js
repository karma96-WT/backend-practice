import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        time: true
    },
    
    description:{
        type:String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        required:ture,
        min:1,
        max:150
    }
},
{
    timestamps: true
})

export const Post = mongoose.model('Post', postSchema)