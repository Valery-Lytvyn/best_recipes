import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LazyImageProps } from "../types";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "./Loader";

const LazyImage = memo(function LazyImage({ src, alt }: LazyImageProps) {
  return (
    <>
      {src ? (
        <LazyLoadImage
          alt={alt}
          src={src}
          delayTime={2000}
          effect="blur"
          width="100%"
          height="100%"
        />
      ) : (
        <Loader />
      )}
    </>
  );
});

export default LazyImage;
