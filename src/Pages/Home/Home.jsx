
import React, { useLayoutEffect, useReducer, useRef } from "react";
import "./Home.css"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Fundo from "../../assets/fundo.jpg"
import logoE from "../../assets/logoE.png"
import logoD from "../../assets/logoD.png"

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dotRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const mark = title.querySelector("span");
    const dot = dotRef.current;

    gsap.set(dot, {
      width: "100%",
      height: "100%",
      xPercent: -50,
      yPercent: -50,
      top: "50%",
      left: "50%",
    });

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 1.5,
        pin: section,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    tl1
      .to(title, { opacity: 1 })
      .fromTo(
        dot,
        {
          scale: 0,
          x: () => {
            let markBounds = mark.getBoundingClientRect();
            let px = markBounds.left + markBounds.width * 0.54;
            return px - section.getBoundingClientRect().width / 1.4;
          },
          y: () => {
            let markBounds = mark.getBoundingClientRect();
            let py = markBounds.top + markBounds.height * 0.73;
            return py - section.getBoundingClientRect().height / 20;
          },
        },
        {
          x: 0,
          y: 0,
          ease: "power3.in",
          scale: 1,
          borderRadius: "0"
        }
      );

    return () => {
      // Cleanup ScrollTrigger instance on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



    const timiline = useRef()
    const elemento = useRef()

    
    useLayoutEffect( () => {
        const cpx = gsap.context( () => {
          timiline.current = gsap.timeline({
            scrollTrigger:{
                trigger:".imgs",
                scrub: true,
                // markers: true,
                start: "top 20px",
                end: "bottom 100vw",
                rotate: "0deg"
            }
          })
          .fromTo("#img1", {
            opacity: 1,
            x: 0,
            rotate: "0deg"

          }, {
            opacity: 0,
            x: -160,
            rotate: "-60deg"

          }) .fromTo("#img2", {
            opacity: 1,
            x: 0,
            rotate: "0deg"
        },{
            opacity: 0,
            x: 160,
            rotate: "-60deg"

          })
        })

    } , elemento)



  return (
    <section id="section" ref={sectionRef}>
      <img
        className="imagem"
        src={Fundo}
        alt=""
      />

      <div className="apresentacao" ref={titleRef}> 
        <div ref={elemento} className="imagens">
            <img id="img1" className="logoE imgs" src={logoE} alt="" />
            <img id="img2" className="logoD imgs" src={logoD} alt="" />
        </div>

        <div>
            <p id="title" >
            Bem Vindo  a <strong > Web Fusion  <span>!</span> </strong>
            </p>
            <p className="desc">e preparese para ver um novo conceito de site moderno</p>
        </div>
        
      </div>
     
      <div className="dot" ref={dotRef}>
        <div className="teste">
            <h1>dentro da div</h1>

        </div>
      </div>


        <div className="seta">
                <span>V</span>
        </div>

    </section>
    
  );
}

export default Home;