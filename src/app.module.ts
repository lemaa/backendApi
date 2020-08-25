import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
const dotenv = require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true }),
    MessageModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
