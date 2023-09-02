import React from 'react';

const Logo = () => {
    return (
        <div className="flex space-x-2 place-items-center">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="#1C1A1A"/>
            </svg>
            <h2 className="font-bold text-black">
                Halit Çıkıkçı
            </h2>
        </div>
    );
};

export default Logo;