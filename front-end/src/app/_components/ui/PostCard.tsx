// app/_components/PostCard.tsx
import { Avatar } from "./Avatar";
import { ActionBar } from "./ActionBar";
import { Post } from "../../_utils/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

export const PostCard = ({ post }: { post: Post }) => (
  <>
    <div className="flex items-center gap-3 justify-between">
      <Avatar src={post?.user?.profile_pic_url} alt={post.user?.usename} />
      <div className="flex flex-row gap-2 items-center">
        <span className="font-semibold">{post?.user?.usename}</span>
        <span className="text-xs text-gray-400">{dayjs(post?.timestamp).local().format("DD/MM/YYYY")}</span>
      </div>
    </div>
    <p className="mt-3 text-sm">{post?.content}</p>
    
  </>
);
