import { forwardRef } from 'react';

import './styles.scss';

function Box({ x, y, children }, ref) {
  return (
    <div ref={ref} className="Box">
      <div className="xy">
        <div>x: {x}</div>
        <div>y: {y}</div>
      </div>

      <div className="title">{children}</div>
    </div>
  );
}

export default forwardRef(Box);
