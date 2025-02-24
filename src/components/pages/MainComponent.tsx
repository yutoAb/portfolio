import React, { FC } from "react";
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
      </Helmet>
      {isMobileSite && <MobileContents />}
      {/* {isTabletSite && <TabletContents />} */}
      {isTabletSite && <PcContents />}
      {isPcSite && <PcContents />}
    </>
  );
};

export default MainComponent;
