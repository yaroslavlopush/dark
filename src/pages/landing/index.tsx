import Head from "next/head";
import Landing from '../../components/pages/Landing/Landing';

export default function Home() {
  return (
    <>
       <Head>
        <title>Landing page</title>
      </Head>
      <div>
        <Landing />
      </div>
    </>
  );
}
