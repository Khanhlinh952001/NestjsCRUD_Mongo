// src/posts/schemas/post.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; // Nhập các decorator từ NestJS Mongoose
import { Document } from 'mongoose'; // Nhập Document từ Mongoose

// Định nghĩa loại dữ liệu cho PostDocument, kết hợp giữa Post và Document
export type PostDocument = Post & Document;

// Định nghĩa schema cho bài viết
@Schema() // Sử dụng decorator @Schema để chỉ định đây là một schema Mongoose
export class Post {
  @Prop({ required: true }) // Định nghĩa thuộc tính title với yêu cầu là bắt buộc
  title: string;

  @Prop({ required: true }) // Định nghĩa thuộc tính content với yêu cầu là bắt buộc
  content: string;

  @Prop({ required: true, unique: true }) // Định nghĩa thuộc tính id với yêu cầu là bắt buộc và phải là duy nhất
  id: string;
}

// Tạo schema Mongoose từ lớp Post
export const PostSchema = SchemaFactory.createForClass(Post);
