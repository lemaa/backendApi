import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.99.104:27017/testdb', { useNewUrlParser: true }),
    MessageModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
