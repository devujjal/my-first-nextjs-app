import React from 'react';

const layout = ({ children }) => {
    return (
        <div className=''>
            <div className='flex'>
                <div className='border'>
                    Here is Menu
                </div>
                <div className='flex-1 border h-screen p-10'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;