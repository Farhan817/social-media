import { Comment } from "src/comments/entities/comment.entity";
import { Like } from "src/likes/entities/like.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {

@PrimaryGeneratedColumn("uuid")
id:string;

@Column({name:"wallet_address",type:"varchar", length:255})
wallet_address:string;

@Column({type:"text"})
content:string;

@Column({type:"timestamp"})
timestamp:Date;

@OneToMany(() => Like, (like) => like.post)
likes: Like[];

@OneToMany(()=>Comment, (comment)=>comment.post)
comments: Comment[]

@ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'wallet_address', referencedColumnName: 'wallet_address' })
  user: User;

}
