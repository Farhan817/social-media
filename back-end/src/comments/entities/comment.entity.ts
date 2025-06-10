import { Post } from 'src/posts/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  post_id: string;

  @Column()
  wallet_address: string;

  @Column()
  content: string;

  @CreateDateColumn({ type: 'timestamp' })
  timestamp: Date;

  @ManyToOne(() => Post, (post) => post.likes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'post_id' })
    post: Post;
}