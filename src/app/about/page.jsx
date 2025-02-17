import Link from "next/link"

const AboutPage = () => {
    // console.log(wechat);

    return (
        <div className="text-center">
            <div>
                <h2>THis is your about page</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates, assumenda a deleniti neque, voluptas reprehenderit minus et expedita eius magni minima alias laboriosam doloribus. Optio molestias neque quo. Consectetur.</p>

            <ul>
                <li><Link href={'/about/minima'}>Minima</Link></li>
                <li><Link href={'/about/alias'}>Alias</Link></li>
            </ul>
        </div>
    );
};

export default AboutPage;