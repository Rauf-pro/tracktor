import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Banner() {
  return (
    <>
      <section className=" md:pt-[110px] h-screen   bg-center bg-no-repeat bg-cover  ">
        <div className="container mx-auto grid md:grid-cols-2 ">
          <div className=" ">
            <h2 className="text-whiteColor xl:text-[80px] lg:text-[60px] md:text-[40px] font-lexend-medium lg:pb-[60px]  ">
              Lorem ıpsum is simply dummy text of
            </h2>
            <p className="text-whiteColor font-lexend-light lg:text-[16px] md:mb-[61px] mb-[46px] w-1/2 relative before:[content] before:absolute before:h-full before:w-[1px] before:bg-whiteColor ml-[20px] before:left-[-20px]  ">
              Lorem ıpsum has been the industry`s standard dummy text ever
            </p>
            <Link href={"/"} className="flex items-center gap-[16px] pt-[60px] relative z-[25]">
              <span className="text-whiteColor font-lexend-light">
                Daha ətraflı
              </span>
              <div href="">
                <img src="/img/Group 2.svg" alt="" />
              </div>
            </Link>
          </div>
          <div className="md:pr-[140px]">
            <div className="w-full lg:h-[700px] h-[220px]  relative ">
              <Image
                src={"/img/traktor.png"}
                fill
                className="object-cover w-full h-auto "
                alt=""
              />
              <Image
                src={"/img/pattern.svg"}
                fill
                className="object-cover w-full h-auto relative z-[-1] "
                alt=""
              />
              
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
