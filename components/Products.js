import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <section className="pt-[100px]">
      <div className="container mx-auto">
        <h2 className=" font-lexend-semibold md:text-[120px] text-[40px] md:pb-[65px] pb-[37px] relative top-0 z-[30]  ">
          Məhsullar
        </h2>
        <div className="xl:w-3/4 lg:w-3/4 md:w-3/4 w-3/4 ">
          <div className=" text-right relative z-[24] group pb-[25px] ">
            <select
              name=""
              id=""
              className="bg-black text-white hover:border-yellowColor cursor-pointer outline-none border-[1px] py-[20px] px-[16px]"
            >
              <option value="" className="bg-white text-black hover:bg-white">
                Bütün markalar
              </option>
              <option value="" className="bg-white text-black">
                Marka seçin
              </option>
            </select>
          </div>
          <div className="grid xxl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-[26px] gap-[72px]  ">
            {ProductItem()}
            {ProductItem()}
            {ProductItem()}
            {ProductItem()}
            {ProductItem()}
            {ProductItem()}
            {AllProduct()}
          </div>
        </div>
      </div>
    </section>
  );
}
function ProductItem() {
  return (
    <Link href={"/"}>
      <div className="product-item group relative z-[30] group  ">
        <div className="border-[1px]   flex justify-center items-center border-grayColor group-hover:border-yellowColor lg:px-[29px] lg:py-[54px] py-[54px] px-[38px]  transition-all duration-[0.3s] ease-in-out  ">
          <div className="w-full md:h-[115px] h-[150px]  relative  ">
            <Image
              src={"/img/detal-1.png"}
              fill
              className="object-cover w-full h-full z-[25] group-hover:scale-[1.1] transition-all duration-[0.3s] ease-in-out"
              alt=""
            />
          </div>
        </div>
        <p className="text-white font-lexend-regular md:text-[16px] group-hover:text-[18px] pt-[16px] group-hover:scale-x-[1.05] group-hover:pt-[10px] transition-all duration-[0.3s] ease-in-out ">
          Mühərrikin yağ filtri
        </p>
      </div>
    </Link>
  );
}
function AllProduct() {
  return (
    <Link href={"/"} className="text-dark">
    <div className="product-item group relative z-[30] group  md:h-[85%] before:[content] before:absolute before:bg-yellowColor before:transition-all duration-[0.3s] ease-in-out before:right-0 before:top-0 before:w-full before:h-full hover:before:w-[0] before:z-[-1] ">
      <div className="border-[1px] border-grayColor flex justify-center items-center h-[100%]  lg:px-[29px] lg:py-[54px] px-[38px] py-[54px]  ">
        <h2 className=" font-lexend-regular text-[20px] group-hover:text-whiteColor transition-all duration-[0.3s] ease-in-out ">Hamısına bax</h2>
      </div>
    </div>
  </Link>
  )
 
}
