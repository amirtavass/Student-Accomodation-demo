import { useState } from "react";
import Vector1 from "../../public/images/icons/vector1.png";
import Vector2 from "../../public/images/icons/vector2.png";
import GoogleLogo from "../../public/images/glogo2.jpg";

function Reviews() {
  const [expandedIds, setExpandedIds] = useState(() => new Set());

  const reviews = [
    {
      id: 1,
      name: "Gary Jopson",
      rating: 5,
      text: "The best Student accommodation in Bolton by far. The location is perfect, close to the university and all amenities. The rooms are spacious and well-maintained, with modern facilities throughout. Staff are incredibly helpful and responsive to any issues. Would highly recommend to any student looking for quality accommodation in Bolton.",
      date: "3 months ago",
      initial: "G",
      color: "bg-gray-600",
    },
    {
      id: 2,
      name: "Abasaye Poly Atchibong",
      rating: 5,
      text: "Good Residential building for students, my friend stays here. The price is fair enough too. The building has excellent security and communal areas are always clean. Great study spaces and social areas where you can meet other students. Transportation links are convenient and there are plenty of shops nearby.",
      date: "4 months ago",
      initial: "A",
      color: "bg-orange-600",
    },
    {
      id: 3,
      name: "Hamza Mukhtar",
      rating: 5,
      text: "Superb student accommodation in walking distance from the University. People clean and watch out but admittedly the facilities are top-notch. The gym and common areas are always well maintained. Internet speed is excellent for online classes and assignments. Really appreciate the 24/7 security and the friendly management team.",
      date: "2 months ago",
      initial: "H",
      color: "bg-teal-500",
    },
    {
      id: 4,
      name: "nicole",
      rating: 5,
      text: "Harry is such a nice landlord. Communicates well and helps with any problems efficiently along any help we might need any way he can. The maintenance team is quick to respond and fix any issues. The building is in a great location with easy access to campus and the town center. Overall, a fantastic place to live during university years.",
      date: "3 months ago",
      initial: "N",
      color: "bg-purple-500",
    },
    {
      id: 5,
      name: "Hamza Ahmed",
      rating: 5,
      text: "Had a brilliant experience with this accommodation. Clean rooms and great location close to everything you need as a student. The communal kitchen is well-equipped and spacious. Love the study rooms available for group projects. The laundry facilities are modern and affordable. Definitely worth the price for the quality you get.",
      date: "1 month ago",
      initial: "H",
      color: "bg-purple-600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = reviews.length - 3;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="w-full py-5 bg-bg-dark">
      <div className="mx-auto max-w-6xl px-4">
        {/* Single Row Layout: Rating | Reviews | Arrows */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
          {/* Left: Rating Section */}
          <div className="flex-shrink-0 text-text-light text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-4xl font-bold">4.5</span>
              <div className="flex text-yellow-400 text-2xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="relative inline-block">
                  <span className="text-gray-600">★</span>
                  <span className="absolute inset-0 overflow-hidden w-1/2 text-yellow-400">
                    ★
                  </span>
                </span>
              </div>
            </div>
            <p className="text-text-light text-sm mb-2 text-center">
              Based on 84 reviews
            </p>
            <div className="flex justify-center">
              <img
                src="/images/google-logo.png"
                alt="Google"
                className="h-12"
              />
            </div>
          </div>

          {/* Middle: Reviews Carousel with desktop arrows */}
          <div className="relative flex-1 w-full">
            <button
              onClick={prevReview}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-4 rounded-full transition hover:bg-accent shadow-lg"
              aria-label="Previous reviews"
            >
              <img src={Vector1} alt="Previous" />
            </button>
            {/* Desktop carousel */}
            <div className="hidden md:block overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${currentIndex * 33.333}%)`,
                }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="basis-1/3 flex-shrink-0 p-6">
                    {/* Review Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                        >
                          {review.initial}
                        </div>
                        <div>
                          <h4 className="font-bold text-white">
                            {review.name}
                          </h4>
                          <div className="flex text-yellow-400 text-sm">
                            {"★★★★★".split("").map((star, i) => (
                              <span key={i}>{star}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Google Icon */}
                      <div className="flex items-center">
                        <img
                          className="h-6 w-6 bg-transparent mix-blend-multiply"
                          src={GoogleLogo}
                        />
                      </div>
                    </div>

                    <p
                      className="text-text-light text-sm leading-relaxed whitespace-normal break-words"
                      style={
                        expandedIds.has(review.id)
                          ? undefined
                          : {
                              display: "-webkit-box",
                              WebkitLineClamp: 5,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }
                      }
                    >
                      {review.text}
                    </p>
                    <button
                      type="button"
                      onClick={() => toggleExpand(review.id)}
                      className="mt-2 text-blue-400 text-sm underline cursor-pointer"
                    >
                      {expandedIds.has(review.id)
                        ? "Read less"
                        : "...Read more"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile vertical list */}
            <div className="md:hidden flex flex-col gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="w-full p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                      >
                        {review.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{review.name}</h4>
                        <div className="flex text-yellow-400 text-sm">
                          {"★★★★★".split("").map((star, i) => (
                            <span key={i}>{star}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p
                    className="text-text-light text-sm leading-relaxed whitespace-normal break-words"
                    style={
                      expandedIds.has(review.id)
                        ? undefined
                        : {
                            display: "-webkit-box",
                            WebkitLineClamp: 5,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }
                    }
                  >
                    {review.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleExpand(review.id)}
                    className="mt-2 text-blue-400 text-sm underline cursor-pointer"
                  >
                    {expandedIds.has(review.id) ? "Read less" : "...Read more"}
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={nextReview}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-4 rounded-full transition hover:bg-accent shadow-lg"
              aria-label="Next reviews"
            >
              <img src={Vector2} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
