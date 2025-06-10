// src/data-source.ts
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { Post } from './posts/entities/post.entity';
import { Like } from './likes/entities/like.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'social_app',
  entities: ['dist/**/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});
