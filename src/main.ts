// src/main.ts

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Sử dụng ValidationPipe toàn cục
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Loại bỏ các thuộc tính không được định nghĩa trong DTO
    forbidNonWhitelisted: true, // Ném lỗi nếu có thuộc tính không được định nghĩa trong DTO
    transform: true, // Tự động chuyển đổi kiểu dữ liệu
  }));

  await app.listen(3000);
}
bootstrap();
