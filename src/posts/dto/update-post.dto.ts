// src/posts/dto/update-post.dto.ts

// Import `PartialType` từ thư viện `@nestjs/mapped-types` để tạo ra một DTO mới dựa trên DTO hiện có
import { PartialType } from '@nestjs/mapped-types';
// Import `CreatePostDto` để tái sử dụng các trường và xác thực đã định nghĩa
import { CreatePostDto } from './create-post.dto';

/**
 * Data Transfer Object (DTO) cho việc cập nhật một bài viết.
 * Sử dụng `PartialType` để tạo ra các trường tùy chọn dựa trên `CreatePostDto`.
 * Điều này cho phép cập nhật một hoặc nhiều trường của bài viết mà không cần cung cấp tất cả các trường.
 */
export class UpdatePostDto extends PartialType(CreatePostDto) {}
