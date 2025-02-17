import React from 'react';

const CategoryDetails = async ({ params }) => {

    const { features } = await params;
    console.log(features)
    if (features.length === 3) {
        return <div>{features[2]}</div>
    }

    if (features.length === 2) {
        return <div>{features[1]}</div>
    }

    if (features.length === 1) {
        return <div>{features[0]}</div>
    }

    
    return (
        <div>
            <h1>This is Category Details</h1>
        </div>
    );
};

export default CategoryDetails;