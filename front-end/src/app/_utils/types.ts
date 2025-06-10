export interface LoginResponseType {
  data: {
    nonce: string;
  };
}

export interface SignUpType {
  wallet_address: string;
  username: string;
  bio: string;
  profile_pic_url: string;
}


export interface Post {
  id: string;
  username: string;
  content: string;
  profilePicUrl?: string;
}

export interface PostTileProps {
  post: Post;
}


export interface FeedState {
  posts: Post[];
  page: number;
  limit: number;
  createModal:boolean
}

export interface postFormType{
 
  content:string
}