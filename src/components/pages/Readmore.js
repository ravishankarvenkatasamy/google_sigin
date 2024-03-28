import React, { useState } from 'react';

const Readmore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className='mb-0'>{isExpanded ? text : text.slice(0, 100)}</p>
      <p className="readmore-color"onClick={toggleExpand}>
        {isExpanded ? 'Less' : '...More'}
      </p>
    </div>
  );
};

export default Readmore;