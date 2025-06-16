import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import dynamic from "next/dynamic";


const DynamicAboutDnilson = dynamic(() => import("../components/AboutDnilson"), {
  ssr: false, // This ensures the component is only rendered on the client side
});

export default function Home() {
  return (
    <>
      <h1>Bienvenido</h1>
      <DynamicAboutDnilson />
    </>
  );
}


// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Mi Sitio Optimizado - Home</title>
//         <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
//         <meta name="keywords" content="Next.js, SEO, optimización web" />
//         <meta property="og:title" content="Mi Sitio Optimizado" />
//         <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
//         <meta property="og:image" content="/images/seo-image.png" />
//         <meta property="og:type" content="website" />
//       </Head>

//       <h1>Bienvenido a mi página optimizada</h1>
//       <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
//     </>
//   );
// }
