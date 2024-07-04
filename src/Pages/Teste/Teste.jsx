

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import "./Teste.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import logoE from "../../assets/logoE.png";
import logoD from "../../assets/logoD.png";

gsap.registerPlugin(ScrollTrigger);



function Teste() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dotRef = useRef(null);

  const elemento = useRef()
  const timiline  = useRef()

    // Efeito Preencher
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const mark = title.querySelector("span");
    const dot = dotRef.current;

    gsap.set(dot, {
      width: "100%",
    });

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section",
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: true,
        pin: "#section",
        invalidateOnRefresh: true,
      },
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
            return px - section.getBoundingClientRect().width / 2;

          },
          y: () => {
            let markBounds = mark.getBoundingClientRect();
            let py = markBounds.top + markBounds.height * 0.73;
            return py - section.getBoundingClientRect().height / 2;
          },
        },
        {
          x: 0,
          y: 0,
          // ease: "power.in",
          scale: 1,
          borderRadius: "0",
          top: 0,
          backgroundColor: "#1B1F2A"
        }
      );




      

    return () => {
      // Cleanup ScrollTrigger instance on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  //Efeito sumir imagens
  useLayoutEffect(() => {
    const cpx = gsap.context(() => {
      timiline.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".imgs",
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
        rotate: "0deg",
      }, {
        opacity: 0,
        x: -160,
        rotate: "-60deg",
        display: "none"
      })
      .fromTo("#img2", {
        opacity: 1,
        x: 0,
        rotate: "0deg"
      }, {
        opacity: 0,
        x: 160,
        rotate: "-60deg",
        display: "none"

      });
    });

  }, [elemento]);

  const elemento2 = useRef()

 // Efeito Zoom
 useEffect(() => {
  gsap.registerEffect({
    name: "zoom",
    effect: (targets, config) => {
      const vars = { transformOrigin: "0px 0px", ...config },
        { scale, origin } = config,
        clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
      delete vars.origin;
      vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
      vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
      vars.overwrite = "auto";
      return gsap.to(targets, vars);
    },
    extendTimeline: true,
    defaults: { origin: [0.5, 0.5], scale: 2 },
  });

  const zoomData = [
    { scale: 1, origin: [0.5, 0.5] },
    { scale: 3, origin: [0.6, 1] },
    { scale: 1, origin: [0.5, 0.5] },
    { scale: 2, origin: [0.8, 0.4] },
  ];

  gsap.utils.toArray(".zoomI").forEach((section, index) => {
    const zoom = zoomData[index];
    ScrollTrigger.create({
      trigger: section,
      markers: true,
      start: "top 85%",
      end: "+=125%",
      onToggle(self) {
        if (self.isActive) {
          gsap.effects.zoom(".photo", {
            scale: zoom.scale,
            origin: zoom.origin,
            duration: 1,
            ease: "power1.inOut",
          });
        }
      },
    });
  });
}, [""]);


  return (
    <section id="section" ref={sectionRef}>

       <div ref={elemento} className="imagens">
            <img id="img1" className="logoE imgs" src={logoE} alt="" />
            <img id="img2" className="logoD imgs" src={logoD} alt="" />
        </div>

        <h1>Bem Vindo  a <strong> Web Fusion</strong></h1>
      <p id="title" ref={titleRef}>
      e prepare-se para ver um novo conceito de site moderno <span>!</span>
      </p>



      <section className="dot" ref={dotRef}>
        <section className="empresa">
            
            <section className="card">
              <div>
                <h1>A Solução ideal para <strong>o seu Serviço </strong> </h1>
                <ul>
                    <li>
                      <h2>SITE <strong>INSTITUCIONAL</strong> </h2>
                      <p>Um site completo para melhorar o posicionamento digital da sua empresa, do zero ou adaptando o seu atual.</p>
                    </li>

                    <li>
                      <h2>LANDING <strong>PAGE</strong> </h2>
                      <p>Uma única página com foco em conversão direta. Ideal para quem está no começo ou tem apenas 1 serviço ou produto.</p>
                    </li>

                    <li>
                      <h2><strong>LANÇAMENTOS</strong></h2>
                      <p>Todas as páginas que você precisar para o seu lançamento e/ou campanhas de marketing.</p>
                    </li>
                    

                </ul>
              </div>
             
            </section>


            <section  className="performace">
            
            <div className="zoom">
            <div className="right-side">
              <div className="photo"></div>
            </div>

            <section className="zoomI">
              <h1>ScrollTrigger Zoom by Section</h1>
            </section>

            <section className="zoomI">
              <h1>Section 2</h1>
            </section>

            <section className="zoomI">
              <h1>Section 3</h1>
            </section>

            <section className="zoomI">
              <h1>Section 4</h1>
            </section>
          </div>
            
            </section>




            <h1>dentro da div</h1>
            <h1>dentro da div</h1>
            <h1>dentro da div</h1>
            <h1>dentro da div</h1>
            <h1>dentro da div</h1>
            <h1>dentro da div</h1>
            <h1>dentro da div</h1>
            <h1>dentro da div</h1>
            <h1>dentro da div</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>
                <h1>ultimo</h1>

        </section>
      </section>


    </section>
    

    
  );
}

export default Teste;
