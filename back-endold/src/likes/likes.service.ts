import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { Repository } from 'typeorm';
import { Post } from 'src/posts/entities/post.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    const post = await this.postRepository.findOneBy({
      id: createLikeDto.post_id,
    });
    if (!post) {
      throw new NotFoundException('Post does not exists');
    }
    const existingLike = await this.likeRepository.findOneBy({
      post_id: createLikeDto.post_id,
    });

    if (existingLike) {
      return existingLike;
    }
    const like = new Like();
    like.post_id = createLikeDto.post_id;
    like.wallet_address = createLikeDto.wallet_address;

    return await this.likeRepository.save(like);
  }
  // findAll() {
  //   return `This action returns all likes`;
  // }

  // async findOne(post_id: string): Promise:<Like> {
  //   retrun await this.likeRepository.findOneBy()
  // }

  // update(id: number, updateLikeDto: UpdateLikeDto) {
  //   return `This action updates a #${id} like`;
  // }

  async remove(createLikeDto: CreateLikeDto): Promise<{ liked: boolean }> {
    const { post_id, wallet_address } = createLikeDto;
    const existing = await this.likeRepository.findOneBy({
      post_id,
      wallet_address,
    });

    if (existing) {
      await this.likeRepository.delete({ post_id, wallet_address });
      return { liked: false };
    }
    throw new NotFoundException('Post does not exists');
  }
}
