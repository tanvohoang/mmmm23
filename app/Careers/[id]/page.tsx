import React from 'react'
import {GetAbouct} from'../../../app/apis/GetDataHome'
import Breadcrumb from "@/components/Common/Breadcrumb";


export default async function  Careers({params}:any) {

  const data= await GetAbouct(params.id)


  console.log(params.id)


  return (
    <div>
      <Breadcrumb classitem={'mt-[20px]'} pageName={data.data.title} renderHTML={data.data.content}/>
    </div>
  )
}
