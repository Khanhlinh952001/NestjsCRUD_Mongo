import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'; // Nhập các decorator từ NestJS
import { PostsService } from './posts.service'; // Nhập service cho bài viết
import { CreatePostDto } from './dto/create-post.dto'; // Nhập DTO để tạo bài viết
import { UpdatePostDto } from './dto/update-post.dto'; // Nhập DTO để cập nhật bài viết
import { Post as PostModel } from './post.schema'; // Nhập mô hình Post từ schema

@Controller('posts') // Định nghĩa đường dẫn cho controller
export class PostsController {
  constructor(private readonly postsService: PostsService) {} // Khởi tạo service bài viết

  @Post() // Định nghĩa phương thức HTTP POST
  async create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
    // Gọi phương thức create của service để lưu bài viết mới
    return this.postsService.create(createPostDto);
  }

  @Get() // Định nghĩa phương thức HTTP GET để lấy tất cả bài viết
  async findAll(): Promise<PostModel[]> {
    // Gọi phương thức findAll của service để lấy danh sách bài viết
    return this.postsService.findAll();
  }

  @Get(':id') // Định nghĩa phương thức GET với tham số ID
  async findOne(@Param('id') id: string): Promise<PostModel> {
    // Gọi phương thức findOne của service để lấy bài viết theo ID
    return this.postsService.findOne(id);
  }

  @Put(':id') // Định nghĩa phương thức HTTP PUT để cập nhật bài viết
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto): Promise<PostModel> {
    // Gọi phương thức update của service để cập nhật bài viết theo ID
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id') // Định nghĩa phương thức HTTP DELETE để xóa bài viết
  async remove(@Param('id') id: string): Promise<void> {
    // Gọi phương thức remove của service để xóa bài viết theo ID
    return this.postsService.remove(id);
  }
}
