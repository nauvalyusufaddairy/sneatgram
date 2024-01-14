import { post } from "@/post";
import { Post } from "./post";
export const Posts = () => {
  return (
    <div>
      {post.map((v, i) => (
        <Post props={v} key={i} />
      ))}
    </div>
  );
};
