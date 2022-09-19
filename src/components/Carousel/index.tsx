import React from "react";
import styles from "./styles.module.css";

type RefType = { div: HTMLDivElement | null };
type ScrollRefType = { scollLeft: () => void; scrollRight: () => void } | null;

const CarouselCard = React.forwardRef<RefType, { src: string }>(function (
  { src },
  ref
) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => ({ div: containerRef.current }));
  return (
    <div className={styles.CarouselCard} ref={containerRef}>
      <img src={src} alt="Not Found" />
    </div>
  );
});

function getOffSets(el: HTMLDivElement) {
  let coordinates = el.getBoundingClientRect();
  return { left: coordinates.left, right: coordinates.right };
}

const CarouselWrapper = React.forwardRef<
  ScrollRefType,
  {
    slides: Array<string>;
    setIsleftVisible: (val: boolean) => void;
    setIsRightVisible: (val: boolean) => void;
  }
>(function CarouselWrapper(
  { slides, setIsleftVisible, setIsRightVisible },
  ref
) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const firstCardRef = React.useRef<RefType>(null);
  const lastCardRef = React.useRef<RefType>(null);

  function scollLeft() {
    if (
      firstCardRef &&
      firstCardRef.current &&
      firstCardRef.current.div &&
      containerRef &&
      containerRef.current
    ) {
      let width = firstCardRef.current.div.offsetWidth + 23;
      let carouselOffsets = getOffSets(containerRef.current);
      if (
        Math.ceil(carouselOffsets.left) + 10 <=
        Math.ceil(getOffSets(firstCardRef.current.div).left)
      ) {
        setIsleftVisible(false);
      } else {
        setIsRightVisible(true);
      }
      containerRef.current.scrollBy(-width, 0);
    }
  }

  function scrollRight() {
    if (
      lastCardRef &&
      lastCardRef.current &&
      lastCardRef.current.div &&
      containerRef &&
      containerRef.current
    ) {
      let width = lastCardRef.current.div.offsetWidth + 23;
      let carouselOffsets = getOffSets(containerRef.current);
      if (
        Math.ceil(carouselOffsets.right) - 10 >=
        Math.ceil(getOffSets(lastCardRef.current.div).left)
      ) {
        setIsRightVisible(false);
      } else {
        setIsleftVisible(true);
      }
      containerRef.current.scrollBy(width, 0);
    }
  }

  React.useImperativeHandle(ref, () => ({ scrollRight, scollLeft }));

  return (
    <div className={styles.CarouselWrapper} ref={containerRef}>
      {slides.map((slide: string, index: number) => {
        return index === 0 ? (
          <CarouselCard src={slide} ref={firstCardRef} key={index} />
        ) : index === slides.length - 1 ? (
          <CarouselCard src={slide} ref={lastCardRef} key={index} />
        ) : (
          <CarouselCard src={slide} key={index} />
        );
      })}
    </div>
  );
});

export default function Carousel({ slides }: { slides: Array<string> }) {
  const carouselWarrpperRef = React.useRef<ScrollRefType>(null);
  const [leftVisible, setIsleftVisible] = React.useState(true);
  const [rightVisible, setIsRightVisible] = React.useState(true);

  const handleLeftScroll = () => {
    carouselWarrpperRef &&
      carouselWarrpperRef.current &&
      carouselWarrpperRef.current.scollLeft();
  };

  const handleRightScroll = () => {
    carouselWarrpperRef &&
      carouselWarrpperRef.current &&
      carouselWarrpperRef.current.scrollRight();
  };

  return (
    <>
      <div className={styles.CarouselBtn} data-direction="left">
        {leftVisible ? (
          <button onClick={handleLeftScroll}>
            <span className="material-symbols-outlined" data-testid="left-btn">
              arrow_back_ios
            </span>
          </button>
        ) : null}
      </div>
      <div className={styles.CarouselContainer}>
        <CarouselWrapper
          slides={slides}
          ref={carouselWarrpperRef}
          setIsRightVisible={(val: boolean) => setIsRightVisible(val)}
          setIsleftVisible={(val: boolean) => {
            setIsleftVisible(val);
          }}
        />
      </div>
      <div className={styles.CarouselBtn} data-direction="right">
        {rightVisible ? (
          <button onClick={handleRightScroll}>
            <span className="material-symbols-outlined" data-testid="right-btn">
              arrow_forward_ios
            </span>
          </button>
        ) : null}
      </div>
    </>
  );
}
