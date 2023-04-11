import Image from "next/image";
import Link from "next/link";



export default function About() {
  return (
    <>
      <section className=" pt-[100px]  ">
        <h2 className=" font-lexend-semibold md:text-[120px] text-[40px] md:pb-[65px] pb-[37px] relative top-0 z-10 container mx-auto ">
          Haqqımızda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:px-0  px-[16px]">
          <div className="grid grid-cols-2  gap-[24px] ">
            <div className="w-full  md:h-[350px] h-[208px]  relative">
              <Image
                src={"/img/gallery-3.png"}
                alt=""
                fill
                className="object-cover "
              />
            </div>
            <div className="w-full md:h-[400px]  h-[208px]  relative">
              <Image
                src={"/img/gallery-4.png"}
                alt=""
                fill
                className=" object-cover md:pt-[70px]"
              />
            </div>
          </div>

          <div className="md:pt-[70px]">
            <p className="w-2/3 text-white md:text-[18px] text-[16px] pb-[32px]">
              Traktor Detal şirkəti 1994-cü ildə yaradılıb və traktor hissələri
              üzrə aparıcı satıcıdır. Şirkətimizin əsas ixtisaslaşması
              traktorlar və kənd təsərrüfatı texnikası üçün hissələrin
              satışıdır. Siz burada hissələri geniş çeşiddə və yüksək
              keyfiyyətdə tapa bilərsiniz.
            </p>
            <Link href={"/"} className=" group relative z-[20] text-dark  ">
              <button className="  font-lexend-medium text-[16px] bg-yellowColor py-[17px] px-[20px] group-hover:text-whiteColor   group-hover:bg-black group-hover:border">
                Daha ətraflı
              </button>
            </Link>
          </div>
        </div>
      
      </section>
    </>
  );
}
