import React from 'react';
import "../sass/frame.scss";
import DesktopPage from './DesktopPage';
import PhonePage from './PhonePage';
import TabPage from './TabPage';
import Design from '../Design/Design';

const FrameChange = () => {
    return (
        <div className='frame'>
            <Design/>
            <DesktopPage/>
            <TabPage />
            <PhonePage />
        </div>
    );
}

export default FrameChange;
