import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
const images=["https://images.squarespace-cdn.com/content/v1/53baea7fe4b032d466a92a62/1559857208124-E7KQQEK9IOZ5CFESSCTF/Bangabandhu+Bridge.jpg","https://www.newagebd.com/files/records/news/202301/192142_111.jpg","https://thedelegate.net/wp-content/uploads/2021/01/BSMRB-bridge.jpg","https://i0.wp.com/djugeralo.com/wp-content/uploads/2023/10/%E0%A6%AC%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%81-%E0%A6%9F%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B2.jpg?fit=768%2C470&ssl=1",]
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {images.map((img, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="h-[300px] overflow-hidden">
                <CardContent className="flex h-full w-full items-center justify-center p-0">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
};

export default Banner;
