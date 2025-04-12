import React, { createContext, FC, useContext, useMemo } from "react";
import useMedia from "use-media";

// https://qiita.com/ZuNo/items/5ad6314bab4fe0ddbbe4 を参照

type Props = {
  children: React.ReactNode;
};

// アプリケーション全体で共有する値の定義
type Context = {
  // モバイルか？
  isMobileSite: boolean;
  // タブレットか？
  isTabletSite: boolean;
  // PCか？
  isPcSite: boolean;
};

// Contextの生成
// デフォルトはPCとする。
const MediaQueryContext = createContext<Context>({
  isMobileSite: false,
  isTabletSite: false,
  isPcSite: true,
});

// 各デバイスでのサイズを定義
const mediaQueries = {
  mobile: "(max-width: 519px)",
  tablet: "(min-width: 520px) and (max-width: 959px)",
  pc: "(min-width: 960px)",
};

export const MediaQueryProvider: FC<Props> = ({ children }: Props) => {
  const isMobileSite = useMedia(mediaQueries.mobile);
  const isTabletSite = useMedia(mediaQueries.tablet);
  const isPcSite = useMedia(mediaQueries.pc);
  const value = useMemo(
    () => ({ isMobileSite, isTabletSite, isPcSite }),
    [isMobileSite, isTabletSite, isPcSite]
  );

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = (): Context =>
  useContext(MediaQueryContext);
