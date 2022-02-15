import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";

function App() {

  const [feedbacks, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id)=>{
   if(window.confirm("Are you sure you want to delete?")){
    setFeedback(feedbacks.filter((item)=>item.id!==id));
   }
  };

  return (
    <>
      <Header headerTitle={"Feedback UI App"} />
      <div className="container">
        <FeedbackList
          FeedbackItem={FeedbackItem}
          feedbacks={feedbacks}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
