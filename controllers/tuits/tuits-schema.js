import mongoose from "mongoose";

const tuitsSchema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    userName: String,
    handle: String,
    image: String,
    topic: String,
    time: String,
    replies: {type: Number, default: 0},
    retuits: {type: Number, default: 0}

}, {collection: 'tuits'});

export default tuitsSchema;