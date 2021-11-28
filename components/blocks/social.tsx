import Head from "next/head";

export const Social = ({data}) => {
  return (
      <Head>
        <title> {data.title} | Azmo</title>
        <meta property="og:title" content={data.title} />
        <meta property="twitter:title" content={data.title} />
        <meta property="description" content={data.description} />
        <meta property="og:description" content={data.description} />
        <meta property="twitter:description" content={data.description} />
        <meta property="og:socialImg" content={data.socialImg && data.socialImg} />
        <meta
          property="twitter:socialImg" content={data.socialImg && data.socialImg}
        />
      </Head>
    )
};

