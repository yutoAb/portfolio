import { FC } from "react";
import MobileContents from "./mobile/MobileContents";
import PcContents from "./pc/PcContents";
import { useMediaQueryContext } from "./common/Provider/MediaQueryProvider";
import { Helmet } from "react-helmet-async";

const MainComponent: FC = () => {
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  return (
    <>
      <Helmet>
        <title>yutoAb</title>
        <link rel="icon" type="image/png" href="/assets/yutoAb.png" />
      </Helmet>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: "#f59e0b",
          color: "#000",
          textAlign: "center",
          padding: "10px 16px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        こちらは古いポートフォリオです。新しい方は{" "}
        <a
          href="https://yutoab.github.io/portfolio-new/"
          style={{ color: "#1e3a8a", textDecoration: "underline" }}
        >
          https://yutoab.github.io/portfolio-new/
        </a>{" "}
        です。
      </div>
      {isMobileSite && <MobileContents />}
      {/* {isTabletSite && <TabletContents />} */}
      {isTabletSite && <PcContents />}
      {isPcSite && <PcContents />}
    </>
  );
};

export default MainComponent;
