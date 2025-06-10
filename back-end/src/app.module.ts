import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PostsModule } from './posts/posts.module';
import { LikesModule } from './likes/likes.module';
import { CommentsModule } from './comments/comments.module';
import { Post } from './posts/entities/post.entity';
import { Like } from './likes/entities/like.entity';
import { Comment } from './comments/entities/comment.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port:5432,
      password:"root",
      username:"postgres",
      entities:[User, Post, Like, Comment],
      database:"social_app",
      synchronize:false,
      logging:true,
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
    }),
    AuthModule,
    UsersModule,
    PostsModule,
    LikesModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
