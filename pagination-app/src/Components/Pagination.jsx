import React from 'react'

const Pagination = ({ pageNo, setPageNo }) => {
    const prevThreeNoArr = Array.from(
        { length: 3 },
        (_, index) => pageNo - 1 - index
    )
        .filter((value) => value > 0)
        .reverse();

    const nextFourNoArr = Array.from({ length: 4 }, (_, index) => pageNo + index);

    const paginationArr = [...prevThreeNoArr, ...nextFourNoArr];

    const handleNext = () => {
        setPageNo(pageNo + 1)
    }
    const handlePrev = () => {
        setPageNo(pageNo - 1)
    }
    return (
        <div className='pagination-container'>
            {pageNo > 1 ?
                <div className='page-btn' onClick={handlePrev}>{"<"}</div> : null}
            {paginationArr.map((value) => {
                return (
                    <div
                        onClick={() => setPageNo(value)}
                        className={value == pageNo ? `page-btn active` : `page-btn`}
                    >
                        {value}
                    </div>
                );
            })}
            <div className='page-btn' onClick={handleNext}>{">"}</div>
        </div>
    )
}

export default Pagination