import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { LikesService } from 'src/likes/likes.service';
import { CommentsService } from 'src/comments/comments.service';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly likesService: LikesService,
    private readonly commentsService: CommentsService,
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
findAll(
  @Query('limit') limit: string,
  @Query('page') page: string,
) {
  const parsedLimit = parseInt(limit, 10) || 10;
  const parsedPage = parseInt(page, 10) || 1;
  return this.postsService.findAll(parsedLimit, parsedPage);
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }
  @Post(':id/like')
  likePost(
    @Param('id') postId: string,
    @Body('wallet_address') wallet_address: string,
  ) {
    return this.likesService.create({
      post_id: postId,
      wallet_address: wallet_address,
    });
  }

  // POST /posts/:id/comment
  @Post(':id/comment')
  addComment(
    @Param('id') postId: string,
    @Body() body: Omit<CreateCommentDto, 'post_id'>,
  ) {
    return this.commentsService.create({
      ...body,
      post_id: postId,
    });
  }
}
