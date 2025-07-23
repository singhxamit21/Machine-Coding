import { useEffect, useState } from "react";
import Post from "./Post";

export default function InfiniteScroll() {
    const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    let ignore = false;
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => res.json())
      .then((arr) => {
        if (!ignore) {
          setData((oldData) => [...oldData, ...arr]);
        }
      });
    return () => {
      ignore = true;
    };
  }, [pageNo]);

  return <Post data={data} setPageNo={setPageNo} />;
}
