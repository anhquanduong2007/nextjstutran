import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// cái useRouter này dùng để điều hướng người dùng về trang nào đó
const NotFound = () => {
    const router = useRouter();
    React.useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, [router])
    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found :(</h2>
            <p>Going back to the <Link href="/"><a>Homepage</a></Link> is 3 seconds...</p>
        </div>
    );
};

export default NotFound;