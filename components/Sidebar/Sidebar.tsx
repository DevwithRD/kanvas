'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Authorization } from "@/config/shared/auth";
import { DashboardRoutes } from "@/utils/DashboardRoutes";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className=" w-[15%] h-screen bg-white relative xs:block">
      {/* <div className="h-[90vh]"> */}
        {DashboardRoutes.map(
          (item, idx) =>
            item?.authorization === Authorization.SHOW && (
              <div key={idx} className="w-full px-2">
                {pathname === item?.path ? (
                  <Link
                    href={item?.path}
                    className="active rounded-md nav-link flex items-center justify-center md:justify-start gap-2 text-base drop-shadow-lg px-2 text-white"
                  >
                    {/* <p className="text-lg font-light ">{item?.avatar}</p> */}
                    <p className="font-light hidden md:flex">{item?.title}</p>
                  </Link>
                ) : (
                  <Link
                    href={item?.path}
                    className="nav-link rounded-md justify-center md:justify-start flex items-center gap-2 text-base drop-shadow-sm px-2"
                  >
                    {/* <p className="text-lg font-light">{item?.avatar}</p> */}
                    <p className="font-light hidden md:flex">{item?.title}</p>
                  </Link>
                )}
              </div>
            )
        )}
      {/* </div> */}

      {/* <div className="absolute w-full bottom-0 border-1 solid border-t-2 border-slate-100 flex justify-end items-center p-3">
        <RiMenu3Line className="text-gray-500" />
      </div> */}
    </div>
  );
};
