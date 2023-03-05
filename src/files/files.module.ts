import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { ConfigModule } from '@nestjs/config';
import { FilesController } from './files.controller';
import { CloudinaryProvider } from './helpers/cloudinary.provider';

@Module({
  providers: [
    FilesService,
    CloudinaryProvider
  ],
  imports: [
    ConfigModule,
  ],
  controllers: [
    FilesController
  ],
  exports: [
    CloudinaryProvider, FilesService
  ]
})
export class FilesModule {}