import { Feature } from "@/types/feature";
import { join } from "path";
import { json } from "stream/consumers";
import Image from "next/image";

const SingleFeature = ({ feature }: any) => {
  // const {  title,multiple_language } = feature;
  // console.log(JSON.parse( multiple_language))

  console.log(feature);
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <Image
            alt=""
            src={feature.img}
            className="aspect-square w-48 md:w-72 xl:w-48"
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {feature.title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {feature.intro}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
