import { Injectable } from '@nestjs/common'; // Nhập Injectable từ NestJS

// Đánh dấu lớp AppService là một service có thể được tiêm vào các phần khác của ứng dụng
@Injectable()
export class AppService {
  // Phương thức getHello trả về một chuỗi 'Hello World!'
  getHello(): string {
    return 'Hello World!'; // Trả về chuỗi 'Hello World!'
  }
}
