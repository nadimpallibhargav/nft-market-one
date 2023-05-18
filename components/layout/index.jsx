import React from "react";
import { useRouter } from "next/router";

import DownloadApp from "components/downloadApp";
import Footer from "components/footer";
import Header from "components/header";

function Layout({ children }) {
  const route = useRouter();
  const isPage = () => {
    if (route.pathname === "/college-titan" || route.pathname === "/register") {
      return <main className="clan">{children}</main>;
    } else if (
      route.pathname === "/video-details/[videodetail]" ||
      route.pathname === "/article-details/[articledetail]" ||
      route.pathname === "/terms-and-conditions" ||
      route.pathname === "/risk-disclosure-policy" ||
      route.pathname === "/privacy-policy" ||
      route.pathname === "/aml-kyc-policy" ||
      route.pathname === "/quests/bullieverse" ||
      route.pathname === "/quests/dark-throne" ||
      route.pathname === "/quests/colexion"
    ) {
      return (
        <>
          <main className="main">{children}</main>
          <DownloadApp />
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Header />
          <main>{children}</main>
          <DownloadApp />
          <Footer />
        </>
      );
    }
  };

  return <>{isPage()}</>;
}
export default Layout;
