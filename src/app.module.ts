import { Module } from '@nestjs/common'; // Nhập decorator Module từ NestJS
import { AppController } from './app.controller'; // Nhập AppController
import { AppService } from './app.service'; // Nhập AppService
import { PostsModule } from './posts/posts.module'; // Nhập PostsModule để quản lý bài viết
import { MongooseModule } from '@nestjs/mongoose'; // Nhập MongooseModule để kết nối với MongoDB

@Module({
  // Khai báo các module khác mà AppModule sẽ sử dụng
  imports: [
    PostsModule, // Import PostsModule để quản lý các chức năng liên quan đến bài viết
    MongooseModule.forRoot('mongodb+srv://vokhanhlinh952001:1q4HmJs9celE20Np@cluster0.sx8vx.mongodb.net/nestjs?retryWrites=true&w=majority&appName=Cluster0'), // Kết nối đến MongoDB
  ],
  controllers: [AppController], // Khai báo các controller mà AppModule sử dụng
  providers: [AppService], // Khai báo các service mà AppModule sử dụng
})
export class AppModule {}
