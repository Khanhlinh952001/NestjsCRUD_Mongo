// src/posts/dto/create-post.dto.ts

// Import các decorator từ thư viện `class-validator` để xác thực dữ liệu
import { IsString, IsNotEmpty } from 'class-validator';

/**
 * Data Transfer Object (DTO) cho việc tạo một bài viết mới.
 * DTO giúp xác định cấu trúc và loại dữ liệu cần thiết khi nhận dữ liệu từ client.
 */
export class CreatePostDto {
  /**
   * Tiêu đề của bài viết.
   * @IsString() - Xác thực rằng giá trị là một chuỗi.
   * @IsNotEmpty() - Xác thực rằng giá trị không được để trống.
   */
  @IsString()
  @IsNotEmpty()
  title: string;

  /**
   * Nội dung của bài viết.
   * @IsString() - Xác thực rằng giá trị là một chuỗi.
   * @IsNotEmpty() - Xác thực rằng giá trị không được để trống.
   */
  @IsString()
  @IsNotEmpty()
  content: string;
}
