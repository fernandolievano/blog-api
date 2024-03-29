import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';

// MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})

export class BlogModule {}
