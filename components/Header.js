import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-[20]  md:h-[100px] ">
      <div className="top-nav  container mx-auto lg:pt-[25px] flex items-center justify-between ">
        <Link href={"/"}>
          <Image
            src={"/img/Logos.svg"}
            width={100}
            height={50}
            alt="Logo"
            className=" object-cover "
          />
        </Link>
        <div className="right-side relative z-10 flex items-center lg:gap-[28px] ">
          <p className="text-grayColor hover:text-yellowColor transition duration-[0.2s] ease-in-out ">
            +994508570087
          </p>
          <p className="text-grayColor hover:text-yellowColor transition duration-[0.2s] ease-in-out">
            +994515150637
          </p>
          <p className="text-grayColor">Az</p>
        </div>
      </div>
      {SideNav()}
    </header>
  );
}

function SideNav(){
  return (
    <>
      <nav className=" relative  z-[23] right-[5px] container mx-auto top-[100px] before:[content] before:absolute before:w-[1px] before:h-[490px] before:bg-grayColor before:right-[15px] before:top-[-95px] before:z-[-1]">
        <div>
          <ul className="flex flex-col items-end md:gap-[40px] ">
            <li className=" navHover flex items-center gap-[24px] group  ">
              <Link
                href={"/"}
                className=" textHover group-hover:text-yellowColor text-whiteColor   font-lexend-light lg:text-[16px] group-hover:text-[20px]  transition-all duration-[0.3s] ease-in-out "
              >
                Haqqımızda
              </Link>
              <span className=" mark w-[7px] h-[7px] bg-whiteColor rounded-full  group-hover:bg-yellowColor group-hover:h-[9px] group-hover:w-[9px] transition-all duration-[0.3s] ease-in-out "></span>
            </li>
            <li className=" navHover flex items-center gap-[24px] group  ">
              <Link
                href={"/"}
                className=" textHover group-hover:text-yellowColor text-whiteColor   font-lexend-light lg:text-[16px] group-hover:text-[20px]  transition-all duration-[0.3s] ease-in-out "
              >
                Məhsullar
              </Link>
              <span className=" mark w-[7px] h-[7px] bg-whiteColor rounded-full  group-hover:bg-yellowColor group-hover:h-[9px] group-hover:w-[9px] transition-all duration-[0.3s] ease-in-out"></span>
            </li>
            <li className=" navHover flex items-center gap-[24px] group  ">
              <Link
                href={"/"}
                className=" textHover group-hover:text-yellowColor text-whiteColor   font-lexend-light lg:text-[16px] group-hover:text-[20px]  transition-all duration-[0.3s] ease-in-out "
              >
                Qalereya
              </Link>
              <span className=" mark w-[7px] h-[7px] bg-whiteColor rounded-full  group-hover:bg-yellowColor group-hover:h-[9px] group-hover:w-[9px] transition-all duration-[0.3s] ease-in-out "></span>
            </li>
            <li className=" navHover flex items-center gap-[24px] group  ">
              <Link
                href={"/"}
                className=" textHover group-hover:text-yellowColor text-whiteColor   font-lexend-light lg:text-[16px] group-hover:text-[20px]  transition-all duration-[0.3s] ease-in-out "
              >
                Partnyorlar
              </Link>
              <span className=" mark w-[7px] h-[7px] bg-whiteColor rounded-full  group-hover:bg-yellowColor group-hover:h-[9px] group-hover:w-[9px] transition-all duration-[0.3s] ease-in-out"></span>
            </li>
            <li className=" navHover flex items-center gap-[24px] group  ">
              <Link
                href={"/"}
                className=" textHover group-hover:text-yellowColor text-whiteColor  font-lexend-light lg:text-[16px] group-hover:text-[20px]  transition-all duration-[0.3s] ease-in-out "
              >
                Əlaqə
              </Link>
              <span className=" mark w-[7px] h-[7px] bg-whiteColor rounded-full  group-hover:bg-yellowColor group-hover:h-[9px] group-hover:w-[9px] transition-all duration-[0.3s] ease-in-out"></span>
            </li>
            <div className="group  relative left-[17px]  border-[2px] border-grayColor  rounded-full p-[9px] hover:border-yellowColor bg-black transition duration-[0.3s]">
              <Link href={"/"}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9103 9.99533L13.3767 6.92398H10.4589V4.93174C10.4589 4.09127 10.8658 3.27155 12.1726 3.27155H13.5V0.656743C13.5 0.656743 12.2959 0.449219 11.1452 0.449219C8.7411 0.449219 7.17123 1.92057 7.17123 4.5831V6.92398H4.5V9.99533H7.17123V17.4206C7.70753 17.5056 8.25616 17.5492 8.81507 17.5492C9.37397 17.5492 9.9226 17.5056 10.4589 17.4206V9.99533H12.9103Z"
                    fill="#5E626A"
                    className="group-hover:fill-yellowColor transition duration-[0.3s] ease-in-out"
                  />
                </svg>
              </Link>
            </div>
            <div className="group relative top-[-30px] left-[17px] border-[2px] rounded-full p-[9px] bg-black border-grayColor hover:border-yellowColor transition duration-[0.3s] ">
              <Link href={"/"}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_396_172)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.00001 0C6.55618 0 6.24891 0.0107185 5.28782 0.0535927C4.33029 0.0964669 3.67646 0.250099 3.10481 0.471616C2.51171 0.700278 2.01151 1.01112 1.51131 1.51131C1.01112 2.01151 0.703851 2.51528 0.471616 3.1048C0.250099 3.67646 0.0964669 4.33029 0.0535927 5.29139C0.0107185 6.24891 0 6.55617 0 9C0 11.4438 0.0107185 11.7511 0.0535927 12.7122C0.0964669 13.6697 0.250099 14.3235 0.471616 14.8988C0.700278 15.4919 1.01112 15.9921 1.51131 16.4923C2.01151 16.9925 2.51529 17.2997 3.10481 17.532C3.67646 17.7535 4.33029 17.9071 5.29139 17.95C6.25249 17.9929 6.55618 18.0036 9.00358 18.0036C11.451 18.0036 11.7547 17.9929 12.7158 17.95C13.6733 17.9071 14.3271 17.7535 14.9024 17.532C15.4954 17.3033 15.9956 16.9925 16.4958 16.4923C16.996 15.9921 17.3033 15.4883 17.5355 14.8988C17.7571 14.3271 17.9107 13.6733 17.9536 12.7122C17.9964 11.7511 18.0072 11.4474 18.0072 9C18.0072 6.5526 17.9964 6.24891 17.9536 5.28781C17.9107 4.33029 17.7571 3.67646 17.5355 3.10123C17.3069 2.50814 16.996 2.00794 16.4958 1.50774C15.9956 1.00754 15.4919 0.700278 14.9024 0.468043C14.3307 0.246526 13.6769 0.092894 12.7158 0.0500198C11.7511 0.0107185 11.4438 0 9.00001 0ZM9.00022 4.38037C6.4492 4.38037 4.37695 6.44905 4.37695 9.00363C4.37695 11.5582 6.44563 13.6269 9.00022 13.6269C11.5548 13.6269 13.6235 11.5582 13.6235 9.00363C13.6235 6.44905 11.5548 4.38037 9.00022 4.38037ZM9.00022 12.0012C7.34242 12.0012 5.99903 10.6579 5.99903 9.00006C5.99903 7.34226 7.34242 5.99887 9.00022 5.99887C10.658 5.99887 12.0014 7.34226 12.0014 9.00006C12.0014 10.6579 10.658 12.0012 9.00022 12.0012ZM14.8846 4.19448C14.8846 4.79039 14.4015 5.27348 13.8056 5.27348C13.2096 5.27348 12.7266 4.79039 12.7266 4.19448C12.7266 3.59856 13.2096 3.11548 13.8056 3.11548C14.4015 3.11548 14.8846 3.59856 14.8846 4.19448Z"
                      fill="#5E626A"
                      className="group-hover:fill-yellowColor transition duration-[0.3s] ease-in-out"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_396_172">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}
