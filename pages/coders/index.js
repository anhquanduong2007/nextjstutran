import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from "../../styles/Coder.module.css";
export const getStaticProps = async () => {
    console.log("run static");
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    return {
        props: { coders: data },
    };
}
const AllCoders = ({ coders }) => {
    console.log("run component");
    return (
        <>
            <Head>
                <title>Coder Wikipedia | All Coders</title>
                <meta name="keywords" content="coders"></meta>
            </Head>
            <div>
                <h1>All Coders</h1>
                {coders.map((coder) => {
                    return (<Link href={`/coder/${coder.id}`} key={coder.id}>
                        <a className={styles.single}>
                            <h3>{coder.name}</h3>
                        </a>
                    </Link>);
                })}
            </div>
        </>
    );
};

export default AllCoders;
/**
 * - Trong cái page này chúng ta sẽ sử dụng SSG (đọc lại ở file doc để xem SSG là gì)
 * - Để lấy được data cho page này trước khi mà nó render sang file tình thì trong nextjs có 1 function là
 * getStaticProps. Cái function này nó sẽ gọi để nó lấy data từ phía server và khi chúng ta lấy được data
 * chúng ta sẽ truyền cho nó, chúng ta sẽ sử dụng keyword return và truyền cho nó 1 cái props - cái này
 * chính là data lấy được và cái props này nó sẽ được truyền vào react-component và lúc này trước khi mà
 * nó render ra các file html - file tĩnh thì nó đã tiếp nhận được những data rồi.
 */