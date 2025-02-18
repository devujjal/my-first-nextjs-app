
const DynamicPage = async ({ params }) => {

    const param = await params;
    console.log(param)

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

    const find = datas.find(data => data?.slug === param?.list);


    return (
        <div>
            this is DynamicPage
            <h2>{find?.title}</h2>
            <p>{find?.short_description}</p>
        </div>
    );
};

export default DynamicPage;