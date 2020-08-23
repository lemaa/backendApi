import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    message: String,
    isMessagePrivate: Boolean,
    createdAt: { type: Date, default: Date.now }
})
