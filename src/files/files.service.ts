import { Injectable, BadRequestException } from '@nestjs/common';
import { CloudinaryResponse } from './helpers/cloudinary.response';
import { v2 as cloudinary } from 'cloudinary';
import { fileNamer } from './helpers';
const streamifier = require('streamifier');

@Injectable()
export class FilesService {

    uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
        return new Promise<CloudinaryResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: 'WorkersPics',
                    use_filename: false,
                    unique_filename: true,
                },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);

                },
            );

            streamifier.createReadStream(file.buffer).pipe(uploadStream);

        });

    }

}
