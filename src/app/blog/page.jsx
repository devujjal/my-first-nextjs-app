import React from 'react';
import Link from 'next/link'

const BlogPage = () => {

    const datas = [
        {
            slug: "article-one",
            title: "Introduction to JavaScript",
            short_description: "A beginner's guide to understanding JavaScript and its basic concepts."
        },
        {
            slug: "article-two",
            title: "Understanding Arrays",
            short_description: "This article covers the fundamentals of arrays in JavaScript, including how to create and manipulate them."
        },
        {
            slug: "article-three",
            title: "Working with Functions",
            short_description: "Learn how to define and call functions, the building blocks of JavaScript programming."
        },
        {
            slug: "article-four",
            title: "Asynchronous Programming in JavaScript",
            short_description: "A guide to handling asynchronous operations with promises and async/await in JavaScript."
        },
        {
            slug: "article-five",
            title: "JavaScript ES6 Features",
            short_description: "An overview of the new features introduced in ES6, including arrow functions, template literals, and more."
        }
    ];



    return (
        <div className='p-14'>
            {
                datas.map(data => (
                    <div
                    key={data?.slug}
                     className='border-2 border-green-500'>
                        <h1>{data?.title}</h1>
                        <button type='button' className='p-2 bg-yellow-200'><Link href={`/blog/${data?.slug}`}>View Details</Link></button>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogPage;