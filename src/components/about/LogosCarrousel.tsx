import { useRef, useEffect } from 'react';

interface Logo {
  src: string;
  rounded: boolean;
  big?: boolean;
}

interface LogoCarouselProps {
  logos: Logo[];
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
      className="w-full flex relative overflow-hidden z-10 xl:py-3 xl:gap-8 py-2 gap-4"
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={`Logo ${index}`}
          className={`${logo.big ? "xl:w-[120px] xl:h-[80px] w-[90px] h-[60px] rounded-full" : "xl:w-[85px] xl:h-[83px] w-[60px] h-[60px]"} ${logo.rounded ? 'rounded-full' : 'rounded-none'} flex`}
        />
      ))}
      {logos.map((logo, index) => (
        <img
          key={index + logos.length}
          src={logo.src}
          alt={`Logo ${index}`}
          className={`${logo.big ? "xl:w-[120px] xl:h-[80px] w-[90px] h-[60px] rounded-full" : "xl:w-[85px] xl:h-[83px] w-[60px] h-[60px]"}  ${logo.rounded ? 'rounded-full' : 'rounded-none'} flex`}
        />
      ))}
    </div>
  );
}

export default LogoCarousel;
