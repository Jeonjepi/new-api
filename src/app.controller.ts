import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  uploadFile(@UploadedFile() file, @Res() res){
    console.log(file)
    return res.sendFile({root : __dirname});
  }


}
