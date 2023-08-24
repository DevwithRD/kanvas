import { Routes } from "@/config/route.config";
import { Authorization } from "@/config/shared/auth";
// import { AiOutlineHome } from "react-icons/ai";

export const DashboardRoutes = [
  {
    title: "Blogs",
    path: Routes.BLOG,
    // avatar: <AiOutlineHome />,
    authorization: Authorization.SHOW,
  },
  {
    title: "Profile",
    path: Routes.PROFILE,
    // avatar: <AiOutlineHome />,
    authorization: Authorization.SHOW,
  },
];
