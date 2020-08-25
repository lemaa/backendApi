import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
const dotenv = require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://heroku_mzkltl2m:bmp3igbfipkikbsbdrgu13trr5@ds127644.mlab.com:27644/heroku_mzkltl2m', { useNewUrlParser: true }),
    MessageModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
