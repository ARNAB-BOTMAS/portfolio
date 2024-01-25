import React from 'react';
import "../sass/frame.scss";
import DesktopPage from './DesktopPage';
import PhonePage from './PhonePage';
import Design from '../Design/Design';

const FrameChange = () => {
    return (
        <div>
            <DesktopPage />
            <PhonePage />
        </div>
    );
}

export default FrameChange;
