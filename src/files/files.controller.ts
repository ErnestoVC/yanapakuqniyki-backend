import { Controller, UploadedFile, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter, fileNamer } from './helpers';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {

    constructor(
        private readonly filesService: FilesService
    ) { }

    @Post('workerProfile')
    @UseInterceptors(FileInterceptor('file', {
        fileFilter: fileFilter,
    }))
    async uploadPhoto(
        @UploadedFile() workerPic: Express.Multer.File
    ) {
        return this.filesService.uploadFile(workerPic);
    }
}