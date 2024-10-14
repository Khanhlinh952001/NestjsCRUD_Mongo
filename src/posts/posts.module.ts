// src/posts/posts.module.ts

import { Module } from '@nestjs/common'; // Nhập decorator Module từ NestJS
import { MongooseModule } from '@nestjs/mongoose'; // Nhập MongooseModule từ thư viện Mongoose
import { PostsService } from './posts.service'; // Nhập service cho bài viết
import { PostsController } from './posts.controller'; // Nhập controller cho bài viết
import { Post, PostSchema } from './post.schema'; // Nhập Post và PostSchema từ schema bài viết

@Module({
  imports: [
    // Nhập MongooseModule để kết nối với MongoDB và khai báo schema bài viết
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [PostsController], // Đăng ký controller cho bài viết
  providers: [PostsService], // Đăng ký service cho bài viết
})
export class PostsModule {}
