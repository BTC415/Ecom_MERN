import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-40 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            width={800}
            height={500}
            src="/fastbooks.png"
            alt="fastbooks"
            priority
          />
        </div>
        <div>
          <Image
            width={800}
            height={500}
            src="/fastmovies.png"
            alt="fastmovies"
          />
        </div>
        <div>
          <Image
            width={800}
            height={500}
            src="/fastmusic.png"
            alt="fastmusic"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
