import { GetAbout } from "../../apis/GetDataHome";
import { ResolvingMetadata, type Metadata } from "next";
import Head from "next/head";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Introduction from "@/components/Common/Introduction";
import React from "react";
import {getImg} from '../../utils/util'
import Contact from "@/components/Contact";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

    const product = await GetAbout(Number(id));

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title:product?.data?.title,
    description:product?.data?.short_content,
    openGraph: {
      images: [getImg(product?.data?.gallery), ...previousImages],
    },
  };
}

export default async function page({ params, searchParams }: Props) {
  const data = await GetAbout(Number(params.id));
  return (
    <>
      <Head>
        <title>okkk</title>
        <meta>item okk</meta>
      </Head>
        <Introduction
          pageName={data.data.title}
          description={data.data.short_content}
          metaImage={getImg(data.data.gallery)}
        />
      <section className="overflow-hidden pt-[80px]">
        <div className="container mt-36" dangerouslySetInnerHTML={{ __html: data.data.content }}></div>
      </section>
      <Contact />
    </>
  );
}
