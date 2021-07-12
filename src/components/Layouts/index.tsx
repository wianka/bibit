import React, { ReactNode } from 'react';
import './styles.css';

type Props = {
  children: ReactNode,
}

function Layouts(props: Props) {
  const { children } = props;

  return (
    <div className="layout-container">
      {children}
    </div>
  )
}

export default Layouts;
