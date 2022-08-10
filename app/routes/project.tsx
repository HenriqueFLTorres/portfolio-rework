import { Outlet } from "@remix-run/react";

import Background from "~/components/Background";
import Navbar from "~/components/Navbar";

export default function Project() {
  return (
    <div className="h-[1800px]">
      <Background />
      <Navbar />
      <Outlet />
    </div>
  );
}
