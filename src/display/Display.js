import React from 'react';

const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className="display panel">
      <div
        className={lockedClass}
        data-testid="lock-unlock-display-btn"
      >{locked ? 'Locked' : 'Unlocked'}</div>
      <div
        className={closedClass}
        data-testid="open-close-display-btn"
      >{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

Display.defaultProps = {
  closed: false,
  locked: false,
};

export default Display;
