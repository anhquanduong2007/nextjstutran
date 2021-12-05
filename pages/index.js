import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Coder Wikipedia | Home</title>
        <meta name="keywords" content="coders"></meta>
      </Head>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget massa vitae leo malesuada convallis. Ut porttitor, nisl sit amet dignissim semper, neque ante rhoncus mi, in pharetra massa turpis id lectus. Vestibulum ligula sapien, lacinia id efficitur fringilla, eleifend id sem. Nam ullamcorper quis enim quis tincidunt. Nulla euismod, quam vitae hendrerit ornare, purus dolor rhoncus massa, id imperdiet magna sem at tortor. Praesent sapien nisl, commodo non diam at, aliquam sodales velit. Fusce vehicula, diam sollicitudin semper hendrerit, est lorem congue nibh, id lacinia quam dui vel ex. Aenean eu sodales mi. Mauris a nisi nec lectus mollis luctus. Etiam vulputate sapien ac quam imperdiet, eu venenatis augue lacinia. Donec urna est, tempus ac lectus ut, hendrerit porta mi.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget massa vitae leo malesuada convallis. Ut porttitor, nisl sit amet dignissim semper, neque ante rhoncus mi, in pharetra massa turpis id lectus. Vestibulum ligula sapien, lacinia id efficitur fringilla, eleifend id sem. Nam ullamcorper quis enim quis tincidunt. Nulla euismod, quam vitae hendrerit ornare, purus dolor rhoncus massa, id imperdiet magna sem at tortor. Praesent sapien nisl, commodo non diam at, aliquam sodales velit. Fusce vehicula, diam sollicitudin semper hendrerit, est lorem congue nibh, id lacinia quam dui vel ex. Aenean eu sodales mi. Mauris a nisi nec lectus mollis luctus. Etiam vulputate sapien ac quam imperdiet, eu venenatis augue lacinia. Donec urna est, tempus ac lectus ut, hendrerit porta mi.</p>
      <div style={{ display: "flex", justifyContent: "center" }} >
        <Link href="/coders">
          <a className="btn">See All Coders</a>
          {/* do không style được cho thẻ Link nên dùng thẻ a ở trong này để style */}
        </Link>
      </div>
      <style jsx>
        {
          `
          .btn {
            display: block;
            width: 150px;
            padding: 8px 0;
            margin: 20px auto;
            background: #ffbf49;
            border-radius: 4px;
            color: black;
            text-align: center; 
          }
          `
        }
      </style>
    </>
  )
}
