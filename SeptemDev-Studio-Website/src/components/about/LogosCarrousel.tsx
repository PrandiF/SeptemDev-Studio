import { useEffect, useRef } from "react";

interface LogoCarouselProps {
  logos: string[];
}

function LogoCarousel({ logos }: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  let timer: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth / 2;
      }
    };

    const scroll = () => {
      timer = setTimeout(() => {
        container.scrollLeft -= 2;
        handleScroll();
        scroll();
      }, 30);
    };

    scroll();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex relative overflow-hidden z-10 xl:px-4 xl:py-3 xl:gap-8 py-2 gap-4 shadow-2xl"
      style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)' }}
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index}`}
          className="xl:w-[83px] w-[60px] h-[60px] xl:h-[83px] rounded-full flex"
        />
      ))}
      {logos.map((logo, index) => (
        <img
          key={index + logos.length}
          src={logo}
          alt={`Logo ${index}`}
          className="xl:w-[83px] w-[60px] h-[60px] xl:h-[83px] rounded-full flex"
        />
      ))}
    </div>
  );
}

export default LogoCarousel;
