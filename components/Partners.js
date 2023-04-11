import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Partners() {
  return (
    <section className="pt-[100px] ">
      <div className="container mx-auto">
        <h2 className=" font-lexend-semibold md:text-[120px] text-[40px] md:pb-[65px] pb-[37px] relative top-0   ">
          Partnyorlar
        </h2>
        <div className="w-3/4   grid lg:grid-cols-4 grid-cols-2  gap-[24px]">
          {Item()}
          {Item()}
          {Item()}
          {Item()}
          {Item()}
          {Item()}
          {Item()}

          {Button()}
          {Item()}

        </div>
      </div>
    </section>
  );
}
function Item() {
  return (
    <div className="relative z-[25] text-center overflow-hidden group border-[1px] border-grayColor lg:hover:bg-white">
      <div className="transition-all duration-[0.5s] ease-in-out group-hover:mt-[-100px]">
        <img src="/img/partnyor-2.png" alt="" className="relative z-20 " />
      </div>
      <div className="absolute w-full top-[100%]   group-hover:top-0 transition-all duration-[0.5s] ease-in-out">
        <img src="/img/partnyor-2c.png" alt="" className="relative z-20" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <Link href={"/"} className="text-dark">
    <div className="product-item group relative z-[30] group   before:[content] before:absolute before:bg-yellowColor before:transition-all duration-[0.3s] ease-in-out before:right-0 before:top-0 before:w-full before:h-full hover:before:w-[0] before:z-[-1] ">
      <div className="border-[1px] border-grayColor flex justify-center items-center h-[100%]  lg:px-[29px] lg:py-[54px] px-[38px] py-[54px]  ">
        <h2 className=" font-lexend-regular text-[20px] group-hover:text-whiteColor transition-all duration-[0.3s] ease-in-out ">Hamısına bax</h2>
      </div>
    </div>
  </Link>
  );
}
