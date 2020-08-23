import { Document } from 'mongoose';

export interface Message extends Document {
    readonly message: string;
    readonly isMessagePrivate: boolean;
    readonly createdAt: Date;
}