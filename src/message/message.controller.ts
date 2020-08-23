import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDTO } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
    constructor(private messageService: MessageService) { }

    // add a Message
    @Post('/create')
    async addMessage(@Res() res, @Body() createMessageDTO: CreateMessageDTO) {
        const message = await this.messageService.addMessage(createMessageDTO);
        return res.status(HttpStatus.OK).json({
            text: "Message has been created successfully",
            message
        })
    }

    // Retrieve messages list
    @Get('messages')
    async getAllMessage(@Res() res) {
        const messages = await this.messageService.getAllMessage();
        return res.status(HttpStatus.OK).json(messages);
    }

    // Fetch a particular message using ID
    @Get('message/:messageID')
    async getMessage(@Res() res, @Param('messageID') messageID) {
        const message = await this.messageService.getMessage(messageID);
        if (!message) throw new NotFoundException('Message does not exist!');
        return res.status(HttpStatus.OK).json(message);
    }

    // Update a message
    @Put('/update')
    async updateMessage(@Res() res, @Query('messageID') messageID, @Body() createMessageDTO: CreateMessageDTO) {
        const message = await this.messageService.updateMessage(messageID, createMessageDTO);
        if (!message) throw new NotFoundException('Message does not exist!');
        return res.status(HttpStatus.OK).json({
            text: 'Message has been successfully updated',
            message
        });
    }

    // Delete a message
    @Delete('/delete/:messageID')
    async deleteMessage(@Res() res, @Param('messageID') messageID) {
        const message = await this.messageService.deleteMessage(messageID);
        if (!message) throw new NotFoundException('Message does not exist');
        return res.status(HttpStatus.OK).json({
            text: 'Message has been deleted',
            message
        })
    }
}