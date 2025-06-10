import { Post } from 'src/posts/entities/post.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity('likes')
export class Like {
  @PrimaryColumn()
  post_id: string;

  @PrimaryColumn({ type: 'varchar', length: 255 })
  wallet_address: string;

  @ManyToOne(() => Post, (post) => post.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'post_id' })
  post: Post;
}