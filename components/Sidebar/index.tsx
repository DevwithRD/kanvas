'use client';
import { authorization } from "@/utils/config/shared/shared";
import { usePathname } from "next/navigation";
import customRoutes from "@/utils/config/route.config";
import Link from "next/link";
const Sidebar = () => {
  const router = usePathname();
  return (
    <div className="w-[30%] sidebar h-full bg-white relative ">
      <div className="pt-2">
        {customRoutes.map(
          (item, idx) =>
            item?.authorization === authorization.SHOW && (
              <div key={idx} className="w-full px-2">
                {router === item?.path ? (
                  <Link
                    href={item?.path}
                    className="active rounded-md nav-link flex items-center justify-center md:justify-start gap-2 text-base drop-shadow-lg px-2 text-white"
                  >
                    <p className="text-lg font-light ">{item?.avatar}</p>
                    <p className="font-light hidden md:flex">{item?.title}</p>
                  </Link>
                ) : (
                  <Link
                    href={item?.path}
                    className="nav-link rounded-md justify-center md:justify-start flex items-center gap-2 text-base drop-shadow-sm px-2"
                  >
                    <p className="text-lg font-light">{item?.avatar}</p>
                    <p className="font-light hidden md:flex">{item?.title}</p>
                  </Link>
                )}
              </div>
            )
        )}
      </div>

      {/* <div className="absolute w-full bottom-0 border-1 solid border-t-2 border-slate-100 flex justify-end items-center p-3">
        <RiMenu3Line className="text-gray-500" />
      </div> */}
    </div>
  );
};

export default Sidebar;
