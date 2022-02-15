import propTypes from "prop-types";
import React from "react";
import Card from "./share/Card";
import { FaTimes } from "react-icons/fa"; //adding close icon

function FeedbackItem({ feed, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{feed.rating}</div>
      {/* Sending event type and id */}
      <button onClick={() => handleDelete(feed.id)} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{feed.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feed: propTypes.object.isRequired,
};

export default FeedbackItem;
