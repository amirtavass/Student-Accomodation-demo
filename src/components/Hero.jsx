import HeroImg from "../../public/images/hero.jpg";
import LockIcon from "../../public/images/icons/lockicon.png";
import CoinIcon from "../../public/images/icons/coinicon.png";
import LocationIcon from "../../public/images/icons/locationicon.png";
import gymIcon from "../../public/images/icons/gymicon.png";
import HeroRoom from "../../public/images/rooms/heroroom.png";
import ArrowIcon from "../../public/images/circledarrowicon.png";

function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 ">
      {/* image section and overlay */}
      <div className="z-0 inset-0 absolute">
        <img
          src={HeroImg}
          alt="Students looking down"
          className="h-full w-full object-cover"
        />
        <div className=" absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl text-text-light font-bold md:text-5xl ">
              Why Book with Us?
            </h1>
            <p className="pt-4 text-text-light text-lg">
              More than just student rooms in Bolton
            </p>
            <p className="pt-2 text-text-light text-lg">
              Newly refurbished and centrally located, The CUBE offers modern
              student living in the heart of Bolton.
            </p>
            {/* 4 icons */}
            <div className="mt-10 grid grid-cols-2 gap-8 md:max-w-md mx-auto md:mx-0">
              {/* frist icon */}
              <div className="flex flex-col items-center text-center ">
                <div className="flex flex-col items-center justify-center h-35 w-35 rounded-full  text-text-light  bg-accent/50">
                  <img src={LockIcon} />
                  <span className="mt-2 font-bold text-text-dark">Secure</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center ">
                <div className="flex flex-col items-center justify-center h-35 w-35 rounded-full  text-text-light  bg-accent/50">
                  <img src={CoinIcon} />
                  <span className="mt-2 font-bold text-text-dark">
                    Affordable
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center ">
                <div className="flex flex-col items-center justify-center h-35 w-35 rounded-full  text-text-light  bg-bg-light/50">
                  <img src={gymIcon} />
                  <span className="mt-2 font-bold text-text-dark">
                    Amenities
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center ">
                <div className="flex flex-col items-center justify-center h-35 w-35 rounded-full  text-text-light  bg-bg-light/50">
                  <img src={LocationIcon} />
                  <span className="mt-2 font-bold text-text-dark">
                    Great <br /> Location
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center md:items-start justify-center">
            <img src={HeroRoom} className="hidden md:block" />
            <div className="flex flex-col items-center md:items-start gap-5">
              <button className="border-4 border-accent bg-black/35 text-text-light font-bold px-3 py-4 rounded-lg flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,153,0,0.5)] hover:bg-accent/20">
                BOOK A ROOM <img src={ArrowIcon} />
              </button>
              <button className="border-4 border-text-light bg-black/35 text-text-light font-bold px-6 py-4 rounded-lg flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-white/10">
                ARRANGE A VIEWING <img src={ArrowIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
