import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll instantly to top before paint
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    // Defer the AOS and GSAP refreshes until after the new page has fully mounted and painted
    setTimeout(() => {
      window.scrollTo(0, 0);
      try {
        AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
        AOS.refresh();
      } catch (e) { console.error("AOS error", e); }
      
      try {
        ScrollTrigger.refresh();
      } catch (e) { console.error("GSAP error", e); }
    }, 100);

  }, [pathname]);

  return null;
}
