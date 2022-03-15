import { Controller, Get, Post, Req, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Request, response, Response } from 'express';
import { fileURLToPath } from 'url';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  uploadFile(@UploadedFile() file, @Res() res){
    console.log(file)
  }

  @Get()
  getFile(@Res() res: Response, @Req() req: Request){
    const fileName = req.params.fileName;
    const path = __dirname + "./uploads/"
    return res.download("./uploads/" + fileName);
  
  }


}
