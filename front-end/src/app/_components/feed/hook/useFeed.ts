import { useEffect, useState } from "react";
import { endpoints } from "../../../_utils/endpoints";
import { get } from "../../../client/client";
import { FeedState, Post } from "../../../_utils/types";

const useFeed = (): [{ posts: Post[] }, { handelPagination: () => void }] => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [{ posts, page, limit }, setState] = useState<FeedState>({
    posts: [],
    page: 1,
    limit: 10,
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

  return [{ posts }, { handelPagination }];
};
export default useFeed;
