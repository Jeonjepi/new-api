import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MulterModule.register({
    dest: './uploads'
  }),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
    exclude: ['/api*'],
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
