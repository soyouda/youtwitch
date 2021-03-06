import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const comment = mongoose.model("Comment", CommentSchema);
export default comment;