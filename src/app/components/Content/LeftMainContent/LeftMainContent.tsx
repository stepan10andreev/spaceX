import React, { FC } from 'react';
import styles from './leftmaincontent.css';

export const LeftMainContent: FC = () => {
  return (
    <div>
      <h2>
        <div>Путешествие</div>
        <span>на красную планету</span>
      </h2>
      <button>Начать путешествие</button>
    </div>
  );
}
