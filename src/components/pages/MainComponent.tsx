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
      {isMobileSite && <MobileContents />}
      {/* {isTabletSite && <TabletContents />} */}
      {isTabletSite && <PcContents />}
      {isPcSite && <PcContents />}
    </>
  );
};

export default MainComponent;
