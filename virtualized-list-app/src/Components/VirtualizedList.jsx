import React, { useState } from 'react';

const VirtualizedList = ({ list, height, width, itemHeight }) => {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the list based on the search query
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleList = filteredList.slice(indices[0], indices[1] + 1);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search items..."
        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
      />
      <div
        className="container"
        onScroll={handleScroll}
        style={{ height, width, background: 'grey', overflow: 'auto' }}
      >
        <div style={{ height: filteredList.length * itemHeight, position: 'relative' }}>
          {visibleList.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{
                height: itemHeight,
                background: 'coral',
                borderTop: '5px solid grey',
                position: 'absolute',
                top: (indices[0] + index) * itemHeight,
                width: '100%',
                textAlign: 'center',
                color: 'whitesmoke',
              }}
            >
              {"Item " + item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;
