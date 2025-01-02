// GSAP animation for the card and form fields
window.onload = () => {
    gsap.from("#login-card", {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from("#login-title", {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.from("#username, #password", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from("button", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 1.5,
        ease: "power2.out"
    });

    // Anime.js animation for the link
    anime({
        targets: '#forgot-password',
        translateY: [-10, 10],
        loop: true,
        easing: 'easeInOutSine',
        duration: 1000
    });
};
