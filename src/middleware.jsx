// import React from 'react';
// import { NextResponse } from 'next/server'

// const middleware = (request) => {
//     console.log(request.url)
//     return NextResponse.redirect(new URL('/', request.url))
// };

// export const config = {
//     matcher: ['/about/:path*','/contact/:path*']
// }

// export default middleware;


import { NextResponse } from "next/server";

const middleware = (request) => {
    console.log('PathName: ', request.nextUrl.pathname.startsWith('/blog'))

    const userData = {
        role: 'user'
    }

    const isPathName = request.nextUrl.pathname.startsWith('/blog');
    const isAdmin = userData?.role === 'admin';
    const cookies = request.cookies.get('token');
    console.log(cookies)



    if (isPathName && !isAdmin) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()

}

export default middleware;