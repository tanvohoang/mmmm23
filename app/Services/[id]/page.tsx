"use client";
import { useEffect, useState } from "react";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { GetItemServices } from "@/app/apis/GetDataHome";
import { ResolvingMetadata, type Metadata } from "next";
import {GetAbout} from'../../apis/GetDataHome';
import {getImg} from'../../utils/util'




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


const ServiceItemPage = (params) => {
  const [data,setData] = useState<any>({});

  const DataServices = async () => {
    try {
      const res = await GetItemServices(params.params.id);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DataServices();
  }, [params.params.id]);

  return (
    <>
      <Breadcrumb
        pageName={data?.data?.title}
        description=""
      />

      <section id={`service-${params.params.id}`}>
        <div className="container"><div dangerouslySetInnerHTML={{ __html: data?.data?.content }} /></div>
      </section>
    </>
  );
};

export default ServiceItemPage;
