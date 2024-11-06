import type { FC } from 'react';

import './styles.css';

export interface HeaderButtonProps {
  title: string;
}

export interface ControlHeaderProps {
  title: string;
  leftButton?: HeaderButtonProps;
  rightButton?: HeaderButtonProps;
}

export const ControlHeader: FC<ControlHeaderProps> = ({ title, leftButton, rightButton }) => (
    <div className='main-header__container'>
        <h3>{title}</h3>
    </div>
);
