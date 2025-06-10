import { Post } from "src/posts/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
@PrimaryGeneratedColumn("uuid")
id:string;

@PrimaryColumn({ unique: true , nullable:false})
wallet_address:string;

@Column({type:"varchar", length:30})
usename:string;

@Column({type:"varchar", length:300})
bio:string;

@Column({type:"varchar", length:100})
profile_pic_url:string;

@OneToMany(() => Post, (post) => post.user)
posts: Post[];

}
