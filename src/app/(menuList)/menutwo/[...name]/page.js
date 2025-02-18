import React from 'react';

const page = async ({ params }) => {
    const param = await params;

    console.log(param.length)

    if (param.name.length === 3) {
        return <div>{param?.name[2]}</div>
    }

    if (param.name.length === 2) {
        return <div>{param?.name[1]}</div>
    }

    if (param.name.length === 1) {
        return <div>{param?.name[0]}</div>
    }

    return (
        <div>
            this is catch all segment page
        </div>
    )

};

export default page;