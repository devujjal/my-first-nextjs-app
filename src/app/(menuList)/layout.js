import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <h2 className='bg-green-400 py-2 text-center'>This is Menu Header</h2>
            <div>
                {children}
            </div>

        </div>
    );
};

export default layout;