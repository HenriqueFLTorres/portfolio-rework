import { Outlet } from "@remix-run/react";
import { LanguageContext } from "~/hooks/LanguageContext";

import Background from "~/components/Shared/Background";
import Navbar from "~/components/Shared/Navbar";

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
