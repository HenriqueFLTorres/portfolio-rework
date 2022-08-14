import { Outlet } from "@remix-run/react";
import { LanguageContext } from "~/hooks/LanguageContext";

import Background from "~/components/Background";
import Navbar from "~/components/Navbar";

export default function Project() {
  return (
    <div className="h-[1800px]">
      <LanguageContext>
        <Background />
        <Navbar />
        <Outlet />
      </LanguageContext>
    </div>
  );
}
