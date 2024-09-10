import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import axios from 'axios';

const Post = () => {
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    
    useEffect(() => {
        axios
            .get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
            .then((res) => setData(res.data));
    }, [pageNo]);

    //  const localPagination = (dataList, currentPage, postsPerPage) => {
    //     const indexOfLastPost = currentPage * postsPerPage;
    //     const indexOfFirstPost = indexOfLastPost - postsPerPage;
    //     const updatedList = dataList.slice(indexOfFirstPost, indexOfLastPost);
    //     return updatedList
    //   }
    return (
        <div className='continer'>
            <div className='post-continer'>
                {data.map((item, index) => {
                    return <img src={item.download_url} />;
                })}
            </div>
            <Pagination pageNo={pageNo} setPageNo={setPageNo} />
        </div>
    )
}

export default Post