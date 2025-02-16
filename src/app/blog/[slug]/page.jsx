
import React from 'react';

const BlogDetails = async ({ params }) => {

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


    // const { slug } = React.use(params)  or  using asynic await

    const { slug } = await params;

    console.log(slug)

    const matched = datas.find(data => data.slug === slug)

    return (
        <div>
            <h1>{matched?.title}</h1>
            <h2>{matched?.short_description}</h2>
        </div>
    );
};

export default BlogDetails;