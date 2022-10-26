import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';

export const RevealBox = ({ currentWord }) => {
    const [showWord, setShowWord] = useState(false);
    const [color, setColor] = useState('#ffffff');
    
    useEffect(() => {
        const colors = ['#f1a8a8', '#ec7272', '#ec72e6', '#af72ec', '#7372ec', '#72a3ec', '#72e4ec', '#72ecb6', '#ecb672', '#a37335', '#35a37a'];
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, [currentWord]);

    const handleMouseOver = () => {
        setShowWord(true);
    };

    const handleMouseOut = () => {
        setShowWord(false);
    };

    return (
        <div>
            <div style={{backgroundColor: color}} className='reveal-box__icon-wrapper' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <FontAwesomeIcon icon="user-secret" size="5x" />
            </div>
            <div className={`reveal-box__word-wrapper ${showWord ? 'reveal-box__word-wrapper--active' : ''}`}>
                {currentWord}
            </div>
        </div>
    )
}

export default RevealBox;