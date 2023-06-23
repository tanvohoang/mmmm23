import Image from "next/image";

import { Products } from "@/types/products";
import { join } from "path";
import { json } from "stream/consumers";

const SingleProduct = ({ product }: any) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-full items-center justify-center rounded-md bg-[green] bg-opacity-10 text-primary">
          <Image
            alt=""
            src={product.image.props.src}
            className="aspect-square w-full"
            width={500}
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {product.title}
        </h3>
      </div>
    </div>
  );
};

export default SingleProduct;
