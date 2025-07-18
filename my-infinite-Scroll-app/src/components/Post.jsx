import { useEffect, useRef } from "react";

export default function Post({ data, setPageNo }) {
  const lastImageRef = useRef(null);

  useEffect(() => {
    if (!lastImageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.unobserve(lastImageRef.current);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(lastImageRef.current);

    return () => {
      if (lastImageRef.current) {
        observer.unobserve(lastImageRef.current);
      }
      observer.disconnect();
    };
  }, [data]);

  return (
    <div className="container">
      {data.map((item, index) => {
        const isLast = index === data.length - 1;
        return (
          <img
            ref={isLast ? lastImageRef : null}
            className="image-post"
            key={item.id}
            src={item.download_url}
          />
        );
      })}
    </div>
  );
}
