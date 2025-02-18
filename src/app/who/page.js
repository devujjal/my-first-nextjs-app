"use client"
import { useRouter } from 'next/navigation';

const WhoPage = () => {

    const router = useRouter();

    const handleRedirect = () => {
        router.push('/')
    }

    return (
        <div>
            <h2>This is Who Page!</h2>
            <button
                onClick={handleRedirect}
                className='p-4 bg-yellow-400'>Click</button>
        </div>
    );
};

export default WhoPage;