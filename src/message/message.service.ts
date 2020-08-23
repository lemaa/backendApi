import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './interfaces/message.interface';
import { CreateMessageDTO } from './dto/create-message.dto';

@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) { }
    // fetch all messages
    async getAllMessage(): Promise<Message[]> {
        const messages = await this.messageModel.find().exec();
        return messages;
    }
    // Get a single message
    async getMessage(messageID: any): Promise<Message> {
        const message = await this.messageModel.findById(messageID).exec();
        return message;
    }
    // post a single message
    async addMessage(createMessageDTO: CreateMessageDTO): Promise<Message> {
        const newMessage = new this.messageModel(createMessageDTO);
        return newMessage.save();
    }
    // Edit message details
    async updateMessage(messageID: any, createMessageDTO: CreateMessageDTO): Promise<Message> {
        const updatedMessage = await this.messageModel
            .findByIdAndUpdate(messageID, createMessageDTO, { new: true });
        return updatedMessage;
    }
    // Delete a message
    async deleteMessage(messageID: any): Promise<any> {
        const deletedMessage = await this.messageModel.findByIdAndRemove(messageID);
        return deletedMessage;
    }
}