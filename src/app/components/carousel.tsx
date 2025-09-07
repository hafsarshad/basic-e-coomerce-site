'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import singleStraightner from '@/assests/singlestraightner.jpg'
import headphones from '@/assests/headphones black.jpg'
import earpods from '@/assests/airdpod.jpg'
import dison from '@/assests/dison.jpg'
import googlesfront from '@/assests/googlesfront (1).jpg'
import googlesside from '@/assests/googlesside.jpg'
gsap.registerPlugin(Observer);

const Carousel = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.slide');
    const images = gsap.utils.toArray<HTMLElement>('.image').reverse();
    const slideImages = gsap.utils.toArray<HTMLElement>('.slide__img');
    const outerWrappers = gsap.utils.toArray<HTMLElement>('.slide__outer');
    const innerWrappers = gsap.utils.toArray<HTMLElement>('.slide__inner');
    const count = document.querySelector('.count') as HTMLElement;
    const wrap = gsap.utils.wrap(0, sections.length);

    let currentIndex = 0;
    let animating = false;

    // Set initial positions
    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });
    gsap.set('.slide:nth-of-type(1) .slide__outer', { xPercent: 0 });
    gsap.set('.slide:nth-of-type(1) .slide__inner', { xPercent: 0 });

    function gotoSection(index: number, direction: number) {
      animating = true;
      index = wrap(index);

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'expo.inOut' },
        onComplete: () => {
          animating = false;
        },
      });

      const currentSection = sections[currentIndex];
      const nextSection = sections[index];
      const heading = currentSection.querySelector('.slide__heading') as HTMLElement | null;
      const nextHeading = nextSection.querySelector('.slide__heading') as HTMLElement | null;

      gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
      gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 });
      gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 });

      if (count) {
        count.textContent = `${index + 1}`;
      }

      tl.fromTo(
        outerWrappers[index],
        { xPercent: 100 * direction },
        { xPercent: 0 },
        0
      )
        .fromTo(
          innerWrappers[index],
          { xPercent: -100 * direction },
          { xPercent: 0 },
          0
        );

      if (heading && nextHeading) {
        tl.to(
          heading,
          { '--width': 800, xPercent: 30 * direction },
          0
        ).fromTo(
          nextHeading,
          { '--width': 800, xPercent: -30 * direction },
          { '--width': 200, xPercent: 0 },
          0
        );
      }

      tl.fromTo(
        images[index],
        { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 },
        { xPercent: 0, scaleX: 1, scaleY: 1 },
        0
      )
        .fromTo(
          images[currentIndex],
          { xPercent: 0, scaleX: 1, scaleY: 1 },
          { xPercent: -125 * direction, scaleX: 1.5, scaleY: 1.3 },
          0
        )
        .fromTo(
          slideImages[index],
          { scale: 2 },
          { scale: 1 },
          0
        )
        .timeScale(0.8);

      currentIndex = index;
    }

    // GSAP Observer for scroll/touch
    Observer.create({
      type: 'wheel,touch,pointer',
      preventDefault: true,
      wheelSpeed: -1,
      onUp: () => {
        if (!animating) gotoSection(currentIndex + 1, 1);
      },
      onDown: () => {
        if (!animating) gotoSection(currentIndex - 1, -1);
      },
      tolerance: 10,
    });

    // Keyboard navigation
    const handleKey = (e: KeyboardEvent) => {
      if ((e.code === 'ArrowUp' || e.code === 'ArrowLeft') && !animating) {
        gotoSection(currentIndex - 1, -1);
      }
      if (
        (e.code === 'ArrowDown' ||
          e.code === 'ArrowRight' ||
          e.code === 'Space' ||
          e.code === 'Enter') &&
        !animating
      ) {
        gotoSection(currentIndex + 1, 1);
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <>
      {/* Slide Sections */}
      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <figure className="slide__img-cont">
                  <img
                    className="slide__img"
                    src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?&w=400"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <figure className="slide__img-cont">
                  <img
                    className="slide__img"
                    src="https://images.unsplash.com/photo-1558603668-6570496b66f8?&w=400"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <figure className="slide__img-cont">
                  <img
                    className="slide__img"
                    src="https://images.unsplash.com/photo-1537165924986-cc3568f5d454?&w=400"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <figure className="slide__img-cont">
                  <img
                    className="slide__img"
                    src="https://images.unsplash.com/photo-1589271243958-d61e12b61b97?&w=400"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay */}
      <section className="overlay">
        <div className="overlay__content">
          <figure className="overlay__img-cont">
            <img
              className="image"
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?&w=800"
              alt=""
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1594666757003-3ee20de41568?&w=800"
              alt=""
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1579830341096-05f2f31b8259?&w=800"
              alt=""
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1603771628302-c32c88e568e3?&w=800"
              alt=""
            />
          </figure>
        </div>
      </section>

      {/* Count indicator */}
      <div className="count" style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        zIndex: 9999
      }}>
        1
      </div>
    </>
  );
};

export default Carousel;
