import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PostsService {
 constructor(
  @InjectRepository(Post) private readonly PostRepository: Repository<Post>,
  private readonly dataSource: DataSource
) {}


  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.content=createPostDto.content;
    post.wallet_address= createPostDto.wallet_address;
    post.timestamp= new Date();

    return this.PostRepository.save(post)
  }

   async findAll(limit = 10, page = 1): Promise<{ data: Post[]; total: number,totalPages: number, page:number, limit: number }> {
   const offset = (page - 1) * limit;
  const [data, total] = await Promise.all([
    this.dataSource
      .getRepository(Post)
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'user')
      .loadRelationCountAndMap('post.likeCount', 'post.likes')
      .loadRelationCountAndMap('post.commentCount', 'post.comments')
      .orderBy('post.timestamp', 'DESC')
      .skip(offset)
      .take(limit)
      .getMany(),

    this.PostRepository.count(),
  ]);

  return {
    data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
  }

  findOne(id: string) : Promise<Post|null> {
    return this.PostRepository.findOneBy({id})
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
