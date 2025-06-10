import { useEffect, useState } from "react";
import { endpoints } from "../../../_utils/endpoints";
import { get, post } from "../../../client/client";
import { FeedState, Post } from "../../../_utils/types";

const useFeed = (): [
  { posts: Post[],
    page:number,
    totalPage:number
   },
  { handelPagination: () => void, handelLike:(arg0: string)=>void }
] => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [{ posts, page, limit, totalPage }, setState] = useState<FeedState>({
    posts: [],
    page: 1,
    limit: 2,
    totalPage:0
  });
 useEffect(() => {
  get(endpoints.posts, { limit, page }).then((response) => {
    setState((prev) => ({
      ...prev,
      totalPage:response.data?.totalPages,
      posts: page > 1 
        ? [...prev.posts, ...response.data.data] // append if page > 1
        : response.data.data, // replace if page === 1
    }));
  });
}, [page]);
  const handelPagination = () => {
    setState((prev) => ({ ...prev, page: prev.page + 1 }));
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

  return [{ posts,totalPage,page }, { handelPagination, handelLike }];
};
export default useFeed;
