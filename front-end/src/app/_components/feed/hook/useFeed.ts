import { useEffect, useState } from "react";
import { endpoints } from "../../../_utils/endpoints";
import { get, post } from "../../../client/client";
import { FeedState, Post } from "../../../_utils/types";

const useFeed = (): [
  { posts: Post[] },
  { handelPagination: () => void; handelCreatePost: () => void, handelLike:(arg0: string)=>void }
] => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [{ posts, page, limit, createModal }, setState] = useState<FeedState>({
    posts: [],
    page: 1,
    limit: 10,
    createModal: false,
  });
  useEffect(() => {
    get(endpoints.posts, { limit: limit, page: page }).then((response) => {
      setState((prev) => ({
        ...prev,
        posts: [...prev.posts, ...response.data.data],
      }));
    });
  }, [page]);
  const handelPagination = () => {
    setState((prev) => ({ ...prev, page: prev.page + 1 }));
  };
  const handelCreatePost = () => {
    setState((prev) => ({
      ...prev,
      createModal: !prev.createModal,
    }));
  };

  const handelLike = (id: string) => {
    const payload = {
      post_id: id,
      wallet_address: localStorage.getItem("wallet"),
    };
    post(endpoints.like, payload)
      .then((res) => {})
      .catch((e) => {
        window.alert("Something went wrong");
      });
  };

  return [{ posts }, { handelPagination, handelCreatePost, handelLike }];
};
export default useFeed;
