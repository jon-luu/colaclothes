import "./Slideshow.css";
import { useState, useEffect } from "react";
import Slide from "../slide/Slide";
import SlideDot from "../slidedot/SlideDot";

// PART 10 FEATURE: Slide show (coded from scratch, no library)
// - fades between slides every 6 seconds
// - prev / next arrows and dots to jump to a slide
// - pauses while the mouse is over it or a button inside has focus
const Slideshow = ({ slides, delay = 6000 }) => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const goTo = (index) => {
        // wrap around at both ends
        setCurrent((index + slides.length) % slides.length);
    };

    const nextSlide = () => goTo(current + 1);
    const prevSlide = () => goTo(current - 1);

    // auto advance - the timer restarts any time the slide changes,
    // so clicking an arrow or dot gives that slide the full delay
    useEffect(() => {
        if (paused) return;

        const timer = setTimeout(() => {
            setCurrent((current + 1) % slides.length);
        }, delay);

        return () => clearTimeout(timer);
    }, [current, paused, delay, slides.length]);

    // left / right arrow keys work when the slideshow has focus
    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
    };

    return (
        <div
            className="slideshow"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured"
            tabIndex="0"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="slides">
                {slides.map((slide, i) => (
                    <Slide key={slide.id} {...slide} active={i === current} position={`${i + 1} of ${slides.length}`} />
                ))}
            </div>

            <button className="slide-arrow slide-arrow--prev" type="button" aria-label="Previous slide" onClick={prevSlide}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button className="slide-arrow slide-arrow--next" type="button" aria-label="Next slide" onClick={nextSlide}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" />
                </svg>
            </button>

            <div className="slide-dots">
                {slides.map((slide, i) => (
                    <SlideDot key={slide.id} label={`Go to slide ${i + 1}`} active={i === current} onClick={() => goTo(i)} />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
