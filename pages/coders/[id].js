import Head from 'next/head';
import React from 'react';
export const getStaticPaths = async () => {
    // tạm hiểu là nói cho nextjs biết là có bao nhiêu cái id tồn tại
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map((coder) => {
        return {
            params: { id: coder.id.toString() },
        };
    });
    return {
        paths,
        fallback: false,
        // đối với những đường dẫn nào không tồn tại thì nó sẽ render ra page 404
    };
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    console.log(id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props: { coder: data },
    };
}
const Detail = ({ coder }) => {
    return (
        <>
            <Head>
                <title>Coder Wikipedia | {coder.name}</title>
                <meta name="keywords" content="coders" />
            </Head>
            <div>
                <h1>{coder.name}</h1>
                <p>Email: {coder.email}</p>
                <p>Website: {coder.website}</p>
                <p>Address: {coder.address.street}, {coder.address.city} </p>
                <p>Company: {coder.company.name}</p>
            </div>
        </>
    );
};

export default Detail;