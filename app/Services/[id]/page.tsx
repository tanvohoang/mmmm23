"use client";
import { useEffect, useState } from "react";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { GetItemServices } from "@/app/apis/GetDataHome";

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
  }, []);

  // const ServiceItem = data.data;
  console.log(data && data?.status);

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
