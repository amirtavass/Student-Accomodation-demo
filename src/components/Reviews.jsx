import { useState } from "react";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Hamza Mukhtar",
      rating: 5,
      text: "Superb student accommodation in Welling distance from the University. People clean and watch out but admittedly...",
      date: "2 months ago",
      initial: "H",
      color: "bg-teal-500",
    },
    {
      id: 2,
      name: "nicole",
      rating: 5,
      text: "Harry is such a nice landlord. Communalities well and helps with any problems efficiently along any help we might need any way he can...",
      date: "3 months ago",
      initial: "N",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Hamza Ahmed",
      rating: 5,
      text: "Had a brilliant experience with this accommodation. Clean rooms and great location...",
      date: "1 month ago",
      initial: "H",
      color: "bg-purple-600",
    },
    {
      id: 4,
      name: "John Smith",
      rating: 5,
      text: "Amazing accommodation with great facilities. Staff are very helpful and responsive.",
      date: "1 month ago",
      initial: "J",
      color: "bg-blue-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="w-full py-5 bg-bg-dark">
      <div className="mx-auto max-w-6xl px-4">
        {/* Single Row Layout: Rating | Reviews | Arrows */}
        <div className="flex items-center gap-6">
          {/* Left: Rating Section */}
          <div className="flex-shrink-0 text-text-light">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-4xl font-bold">4.5</span>
              <div className="flex text-yellow-400 text-2xl">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
            <p className="text-text-light text-sm">Based on 84 reviews</p>
            <img
              src="/images/google-logo.png"
              alt="Google"
              className="h-8 mt-2"
            />
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="flex-shrink-0 bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition"
          >
            ←
          </button>

          {/* Middle: Reviews Carousel */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * 33.333}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-[calc(33.333%-1rem)] flex-shrink-0 bg-gray-800 rounded-lg p-6"
                >
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
                    {/* Google Icon */}
                    <div className="flex items-center">
                      <span className="text-white text-2xl">G</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-text-light text-sm mb-3 leading-relaxed">
                    {review.text}
                  </p>

                  {/* Read More Link */}
                  <button className="text-blue-400 text-sm hover:underline">
                    Read more
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="flex-shrink-0 bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
