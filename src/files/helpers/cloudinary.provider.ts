
import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
        cloud_name: 'yanapakuqniyki',
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret:
          process.env.CLOUDINARY_API_SECRET,
    });
  },
};