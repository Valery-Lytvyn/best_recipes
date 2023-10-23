import { useMemo } from "react";
import { bannerImages } from "../data/bannerData";
import { getRndInteger } from "../services";
import { BannerProps } from "../types";

const imageArrayLength = bannerImages.length;
const randomIndex = getRndInteger(imageArrayLength - 1);
const defaultBanner = bannerImages[randomIndex];

function Banner({ image, title, subtitle }: BannerProps): JSX.Element {
  const backgroundImage = useMemo(() => {
    if (image) {
      return image;
    }
    return defaultBanner;
  }, [image]);

  const bannerBackgroundStyle: React.CSSProperties = {
    backgroundImage: `
        linear-gradient(to bottom, rgba(245, 246, 252, 0.1)10%, rgba(0, 0, 0)100%),
        url(${backgroundImage})
        `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      className="w-full h-full min-h-[600px] flex flex-col justify-center items-center gap-2"
      style={bannerBackgroundStyle}
    >
      <h1 className="text-2xl sm:text-4xl md:text-6xl text-center p-2 sm:p-8 [&>span]:text-primary [&>span]:pl-2 ">
        {title}
      </h1>
      <div className="w-[95%] sm:w-[60%] lg:w-[40%]">
        {subtitle && (
          <p className="text-center text-xl text-primary bg-[#00000090] p-4 rounded-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default Banner;
