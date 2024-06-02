import Card from "./Card";
import mockData from "../mock-data/card.json";
import { useEffect, useState } from "react";
import CardSkeleton from "./skeletons/CardSkeleton";

function Carousel() {
  const data = mockData;
  const dataLength = data.length - 1;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div id="carousel">
      <div className="flex overflow-x-auto snap-x gap-4 h-full carousel-scrollbar pb-8">
        {data &&
          data.map((item, index) => (
            <div
              className={
                dataLength === index ? "snap-end" : "snap-start scroll-mx-10"
              }
              key={item.id}
            >
              {isLoading ? (
                <CardSkeleton />
              ) : (
                <Card
                  title={item.title}
                  description={item.description}
                  rating={item.rating}
                  name={item.image.name}
                  url={item.image.url}
                  isRecommended={item.isRecommended}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Carousel;
