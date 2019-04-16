import React from 'react';

const Numbers = () => {
  return (
    <>
      <div className="row">
        <button className="key numeric">7</button>
        <button className="key numeric">8</button>
        <button className="key numeric">9</button>
      </div>
      <div className="row">
        <button className="key numeric">4</button>
        <button className="key numeric">5</button>
        <button className="key numeric">6</button>
      </div>
      <div className="row">
        <button className="key numeric">1</button>
        <button className="key numeric">2</button>
        <button className="key numeric">3</button>
      </div>

      <div className="row">
        <button className="key numeric double">0</button>
        <button className="key numeric">.</button>
      </div>
    </>
  );
};

export default Numbers;
