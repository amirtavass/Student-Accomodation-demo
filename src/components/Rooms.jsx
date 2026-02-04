import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../../public/images/icons/arrowicon.png";
import CircledArrowIcon from "../../public/images/circledarrowicon.png";
import lineImage from "../../public/images/lineImage.png";

function Rooms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const scrollRef = useRef(null);
  const rooms = [
    {
      id: 1,
      title: "En-Suite",
      price: "£152/week",
      image: "/images/rooms/room1.png",
    },
    {
      id: 2,
      title: "Premium En-Suite",
      price: "£156/week",
      image: "/images/rooms/room2.png",
    },
    {
      id: 3,
      title: "Wetroom En-Suite",
      price: "£160/week",
      image: "/images/rooms/room3.png",
    },
    {
      id: 4,
      title: "Studio",
      price: "£168/week",
      image: "/images/rooms/room4.png",
    },
    {
      id: 5,
      title: "Ground Floor Studio",
      price: "£173/week",
      image: "/images/rooms/room5.png",
    },
  ];

  const maxIndex = rooms.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const track = trackRef.current;
    const scrollEl = scrollRef.current;
    if (!track || !scrollEl) return;
    const firstCard = track.querySelector("[data-room-card]");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(
      getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0,
    );

    const scrollPosition = currentIndex * (cardWidth + gap);

    // FIX 1: Use 'scrollTo' with behavior: 'smooth'
    // This forces the browser to run the animation via JS engine,
    // which is much more reliable than CSS property assignment.
    scrollEl.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [currentIndex]);
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our Luxury Rooms
          </h2>
          <div className="flex justify-center ">
            <div className="w-40 h-2 mt-5  bg-accent"></div>
          </div>
          <div className="hidden md:flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-4 transition-all duration-300 hover:bg-accent hover:scale-110 rounded-lg"
            >
              <img
                src={ArrowIcon}
                alt="Previous"
                className="w-20 h-12 rotate-180 transition-transform duration-300"
              />
            </button>

            <button
              onClick={handleNext}
              className="p-4 transition-all duration-300 hover:bg-accent hover:scale-110 rounded-lg"
            >
              <img
                src={ArrowIcon}
                alt="Next"
                className="w-20 h-12 transition-transform duration-300"
              />
            </button>
          </div>
          {/* <div className="mt-6" /> */}
        </div>

        <div
          className="relative  overflow-x-auto md:overflow-x-hidden pb-4 -mx-4 px-4 "
          ref={scrollRef}
        >
          <div ref={trackRef} className="flex gap-6 snap-x md:snap-none ">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="min-w-[50%] sm:min-w-[45%] lg:min-w-[32%] flex-shrink-0 snap-start"
                data-room-card
              >
                <div className="relative bg-bg-dark rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-gray-800 p-3 sm:p-4">
                  {/* line image should be background of each image card */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={lineImage}
                      className="w-full h-full opacity-30 object-cover object-center rounded-tl-[76px] rounded-br-[76px]"
                    />
                  </div>
                  <div className="h-56 sm:h-64 relative rounded-tl-[50px] rounded-br-[50px] overflow-hidden z-10">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <h3 className="text-lg font-bold text-gray-900">
                        {room.title}
                      </h3>
                    </div>
                  </div>
                  <div className="relative z-10 p-6 text-white">
                    <p className="text-xl text-center font-bold text-text-light mb-4">
                      {room.price}
                    </p>
                    <button className="w-full gap-6 border-2 border-accent text-accent font-bold py-3 rounded-lg hover:opacity-70 cursor-pointer transition-opacity flex items-center justify-center">
                      VIEW ROOM
                      <img src={CircledArrowIcon} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
