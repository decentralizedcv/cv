import gsap from "gsap";

export const overlayAnimation = () => {
    const tl = gsap.timeline({
        delay: -2,
    });
    tl.to(".intro__overlay-line", {
        duration: 3.5,
        width: "25vw",
        ease: "expo.inOut",
        // delay: -0.8,
    })
        .to(".intro__overlay-line", {
            duration: 2,
            width: 0,
            ease: "expo.inOut",
            // delay: -0.8,
        })
        .to(".intro__overlay", { duration: 0, css: { display: "none" } });
};
