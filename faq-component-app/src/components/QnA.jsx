import React from 'react'

const QnA = ({ qna, showAns, handleQnA }) => {
  return (
    <div className="qna">
    {qna.question}
    <span onClick={handleQnA}>{showAns ? "-" : "+"}</span>
    {showAns && <hr />}
    {showAns && qna.answer}
  </div>
  )
}

export default QnA