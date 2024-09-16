import React, { useState } from 'react'
import QnA from './QnA';


const FAQ = ({data}) => {
    const [showIndex, setShowIndex] = useState(-1);
    const handleQnA = (index) => {
        setShowIndex((prevIndex) => {
          if (prevIndex === index) {
            return -1;
          }
          return index;
        });
      };
    
  return (
    <div>
    <h1>FAQs : </h1>
    {data.faqs.map((qna, index) => {
      return (
        <QnA
          key={index}
          qna={qna}
          showAns={index === showIndex}
          handleQnA={() => handleQnA(index)}
        />
      );
    })}
  </div>
  )
}

export default FAQ