import React from "react";

function FeedbackList({ FeedbackItem, feedbacks, handleDelete }) {
  //console.log(FeedbackData);
  

  if (feedbacks.length === 0 || !feedbacks) {
    return (
      <>
        <div className="feedback-list">
          <div className="card">
            <div className="text-display">No Reviews Yet</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="feedback-list">
        {feedbacks.map((feedback, index) => {
          return (
            <FeedbackItem
              feed={feedback}
              key={feedback.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default FeedbackList;
