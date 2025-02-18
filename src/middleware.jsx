import { NextResponse } from 'next/server';

const middleware = (request) => {

    const user = {
        role: 'admin'
    }

    const isAdmin = user?.role === 'admin';

    const rightPath = request.nextUrl.pathname.endsWith('dashboard')

    const cookie = request.cookies.get('token');



    // if (rightPath && !isAdmin) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }

    if(rightPath && !cookie){
        return NextResponse.redirect(new URL('login', request.url))
    }


    return NextResponse.next();


};

export default middleware;