import Line1 from "../../public/images/features/line1.png";
import Line2 from "../../public/images/features/line2.png";

function Features() {
  return (
    <section className="w-full relative">
      {/* Line2 overlay - spans from text area of 1st feature to entire 2nd feature */}

      {/* Feature 1: Location - Full Width with bg-gray */}
      <div className="w-full bg-bg-gray relative py-16">
        <div className="absolute inset-0 z-0">
          <img
            src={Line2}
            className="w-full h-full opacity-20 object-cover  object-top-right"
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-accent font-semibold mb-2">Features</p>
              <h2 className="text-4xl font-bold text-text-light mb-6">
                PRIME LOCATION & EXCELLENT CONNECTIVITY
              </h2>
              <p className="text-text-light mb-6">
                Perfectly positioned for students, with easy access to
                universities, shops, and nightlife. Walking distance to major
                transport links.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-text-light">
                    Around 8 minutes away
                  </h3>
                  <p className="text-text-light opacity-80">
                    High town to Bolton bus station, bus interchange at Bolton
                    station
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-text-light">
                    Around 10 to 18 minutes away
                  </h3>
                  <p className="text-text-light opacity-80">
                    Old town to Bolton and the University of Bolton
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-text-light">
                    Around 25 minutes away
                  </h3>
                  <p className="text-text-light opacity-80">
                    High town location walk to central Manchester
                  </p>
                </div>
              </div>
            </div>

            <div className="relative space-y-4">
              {/* Line1 overlay - only behind the two images, smaller size */}

              <img
                src="/images/features/town1.png"
                alt="Location 1"
                className="relative z-10 w-full h-64 object-contain rounded-3xl"
              />
              <img
                src="/images/features/town2.png"
                alt="Location 2"
                className="relative z-10 w-full h-64 object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Facilities - Full Width with bg-accent */}
      <div className="w-full bg-accent relative py-16">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
          <img
            src={Line1}
            className="w-full h-full opacity-20 object-cover object-bottom-right"
          />
        </div> */}
        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <img
                src="/images/features/commonroom.png"
                alt="Facilities"
                className="w-full h-96 object-contain rounded-3xl"
              />
              <img
                src="/images/features/gym.png"
                alt="Gym"
                className="w-full h-96 object-contain rounded-3xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-text-dark font-semibold mb-2">Features</p>
              <h2 className="text-4xl font-bold text-text-dark mb-6">
                EVERYTHING YOU NEED TO LIVE
              </h2>
              <p className="text-text-dark mb-6">
                This building has been designed right. Our welcoming communal
                areas have everything you need. From cinema room to study
                spaces, we've got you covered.
              </p>
              <p className="text-text-dark mb-8">
                Wi-Fi is included throughout the building, as is water. You're
                in a safe space at Kingsway as our property managers are always
                around.
              </p>

              <div className="flex gap-8 justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <p className="font-semibold text-text-dark">Wi-Fi</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">🔑</span>
                  </div>
                  <p className="font-semibold text-text-dark">Key Card</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">😊</span>
                  </div>
                  <p className="font-semibold text-text-dark">Social</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
