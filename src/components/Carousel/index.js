import React from "react";
import styles from "./styles.module.css"

function CarouselCard({ src }, ref) {
    const containerRef = React.useRef()
    React.useImperativeHandle(ref, () => ({ div: containerRef.current }))
    return (
        <div className={styles.CarouselCard} ref={containerRef}>
            <img src={src} alt="Not Found" />
        </div>
    )
}

// eslint-disable-next-line no-func-assign
CarouselCard = React.forwardRef(CarouselCard)

function getOffSets(el) {
    let coordinates = el.getBoundingClientRect()
    return { left: coordinates.left, right: coordinates.right }
}

function CarouselWrapper({ slides, setIsleftVisible, setIsRightVisible }, ref) {
    const containerRef = React.useRef()
    const firstCardRef = React.useRef()
    const lastCardRef = React.useRef()

    function scollLeft() {
        let width = firstCardRef.current.div.offsetWidth + 23;
        let carouselOffsets = getOffSets(containerRef.current)
        if (Math.ceil(carouselOffsets.left) + 10 <= Math.ceil(getOffSets(firstCardRef.current.div).left)) {
            setIsleftVisible(false)
        } else {
            setIsRightVisible(true)
        }

        containerRef.current.scrollBy(-width, 0)
    }

    function scrollRight() {
        let width = firstCardRef.current.div.offsetWidth + 23;
        let carouselOffsets = getOffSets(containerRef.current)
        if (Math.ceil(carouselOffsets.right) - 10 >= Math.ceil(getOffSets(lastCardRef.current.div).left)) {
            setIsRightVisible(false)
        } else {
            setIsleftVisible(true)
        }
        containerRef.current.scrollBy(width, 0)
    }

    React.useImperativeHandle(ref, () => ({ scrollRight, scollLeft }))

    return (
        <div className={styles.CarouselWrapper} ref={containerRef}>
            {
                slides.map((slide, index) => {
                    return index === 0 ? <CarouselCard src={slide} ref={firstCardRef} key={index} /> : index === slides.length - 1 ? <CarouselCard src={slide} ref={lastCardRef} key={index} /> : <CarouselCard src={slide} key={index} />
                })
            }
        </div>
    )
}

// eslint-disable-next-line no-func-assign
CarouselWrapper = React.forwardRef(CarouselWrapper)

export default function Carousel({ slides }) {
    const CarouselWarrpperRef = React.useRef()
    const [leftVisible, setIsleftVisible] = React.useState(true);
    const [rightVisible, setIsRightVisible] = React.useState(true);

    const handleLeftScroll = () => {
        CarouselWarrpperRef.current.scollLeft()
    }

    const handleRightScroll = () => {
        CarouselWarrpperRef.current.scrollRight()
    }


    return (
        <>
            <div className={styles.CarouselBtn} data-direction="left"> {leftVisible ? <button onClick={handleLeftScroll}><span className="material-symbols-outlined" data-testid="left-btn">
                arrow_back_ios
            </span></button> : null}</div>
            <div className={styles.CarouselContainer}>
                <CarouselWrapper slides={slides} ref={CarouselWarrpperRef} setIsRightVisible={(val) => (setIsRightVisible(val))} setIsleftVisible={(val) => { setIsleftVisible(val) }} />
            </div>
            <div className={styles.CarouselBtn} data-direction="right">{rightVisible ? <button onClick={handleRightScroll}><span className="material-symbols-outlined" data-testid="right-btn">
                arrow_forward_ios
            </span></button> : null}</div>
        </>
    )
}

