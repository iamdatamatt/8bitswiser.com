import { useState, useEffect, useRef } from "react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;

      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const timer = setInterval(scroll, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`max-w-6xl mx-auto p-8 text-center ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="flex justify-center items-center mb-8">
        <img
          src="/8-bits-wiser.svg"
          className="logo hover:scale-110 transition-transform"
          alt="8 Bits Wiser logo"
          width={137}
          height={48}
        />
      </div>

      <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        8 Bits Wiser
      </h1>

      <h2 className="text-gray-300">Technology Consulting</h2>

      <div className="space-y-2 mb-8">
        <h3 className="text-gray-200">AI/ML & Data Analytics</h3>
        <h3 className="text-gray-200">Website Development & SEO</h3>
      </div>

      <div className="max-w-[600px] mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-4">
        <h2 className="text-white/70 bg-clip-text text-transparent font-bold mb-4">
          Empowering Innovation Across Industries
        </h2>

        <div
          ref={scrollRef}
          className="flex items-center gap-8 overflow-hidden px-4 pt-2 pb-1"
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <a
                href="https://gobeacon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:-translate-y-1 duration-300 shrink-0"
              >
                <img
                  src="/cdn-cgi/image/fit=scale-down,format=avif,width=258/beacon.png"
                  srcSet="/cdn-cgi/image/fit=scale-down,format=avif,width=86/beacon.png 86w,
                          /cdn-cgi/image/fit=scale-down,format=avif,width=129/beacon.png 129w"
                  sizes="(max-width: 768px) 86px,
                         129px"
                  alt="Beacon Mobility"
                  className="h-8 md:h-12 w-auto brightness-0 invert"
                  width={129}
                  height={48}
                />
              </a>
              <a
                href="https://www.cincinnatigeriatricpsych.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:-translate-y-1 duration-300 shrink-0"
              >
                <img
                  src="/cdn-cgi/image/fit=scale-down,format=avif,width=354/ncgc.png"
                  srcSet="/cdn-cgi/image/fit=scale-down,format=avif,width=118/ncgc.png 118w,
                          /cdn-cgi/image/fit=scale-down,format=avif,width=177/ncgc.png 177w"
                  sizes="(max-width: 768px) 118px,
                         177px"
                  alt="The NeuroPsych Center of Greater Cincinnati"
                  className="h-8 md:h-12 w-auto brightness-0 invert"
                  width={177}
                  height={48}
                />
              </a>
              <a
                href="https://github.com/iamdatamatt/sideline-sprint-website"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:-translate-y-1 duration-300 shrink-0"
              >
                <img
                  src="/cdn-cgi/image/fit=scale-down,format=avif,width=252/sideline-sprint.png"
                  srcSet="/cdn-cgi/image/fit=scale-down,format=avif,width=91/sideline-sprint.png 91w,
                          /cdn-cgi/image/fit=scale-down,format=avif,width=136/sideline-sprint.png 136w"
                  sizes="(max-width: 768px) 91px,
                         136px"
                  alt="Sideline Sprint"
                  className="h-8 md:h-12 w-auto brightness-0 invert"
                  width={136}
                  height={48}
                />
              </a>
              <a
                href="https://datamatt.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:-translate-y-1 duration-300 shrink-0"
              >
                <img
                  src="/cdn-cgi/image/fit=scale-down,format=avif,width=144/data-matt.png"
                  srcSet="/cdn-cgi/image/fit=scale-down,format=avif,width=48/data-matt.png 48w,
                          /cdn-cgi/image/fit=scale-down,format=avif,width=72/data-matt.png 72w"
                  sizes="(max-width: 768px) 48px,
                         72px"
                  alt="Data Matt"
                  className="h-8 md:h-12 w-auto"
                  width={72}
                  height={48}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <button
          onClick={() =>
            (window.location.href = "mailto:contact@8bitswiser.com")
          }
          className="bg-gradient-to-r from-primary to-secondary text-white 
                     px-6 py-3 rounded-lg font-semibold shadow-lg
                     hover:shadow-primary/50 hover:-translate-y-0.5 
                     transition-all duration-300"
        >
          Get in Contact
        </button>
      </div>

      <p className="copyright mt-8">© 8 Bits Wiser. All rights reserved.</p>
    </div>
  );
}
