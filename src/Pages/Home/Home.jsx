

import React, { useLayoutEffect, useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Fundo from "../../assets/fundo.jpg";
import logoE from "../../assets/logoE.png";
import logoD from "../../assets/logoD.png";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dotRef = useRef(null);
  const timiline2 = useRef(null);
  const elemento2 = useRef(null)

  // Efeito Preencher
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
          borderRadius: "0",
          overflowY: "scroll"
        }
      );

    return () => {
      // Cleanup ScrollTrigger instance on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const timiline = useRef();
  const elemento = useRef();

  // Efeito Mexer imagens
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
        rotate: "0deg"
      }, {
        opacity: 0,
        x: -160,
        rotate: "-60deg"
      })
      .fromTo("#img2", {
        opacity: 1,
        x: 0,
        rotate: "0deg"
      }, {
        opacity: 0,
        x: 160,
        rotate: "-60deg"
      });
    });

  }, [elemento]);






  // Efeito Zoom
  useLayoutEffect(() => {
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

            const cp = gsap.context( () => {
                timiline2.current = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        // markers: true,
                        start: "top 85%",
                        end: "+=125%",
                        ontoggle(self){
                            if(self.isActive){
                                gsap.effects.zoom(".photo", {
                                    scale: zoom.scale,
                                    origin: zoom.origin,
                                    duration: 1,
                                    ease: "power1.inOut",
                                })
                            }
                        }
                    }
                })
            })

                });




        }, []);


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

        <div className="titulo">
            <p id="title" >Bem Vindo  a <strong > Web Fusion  <span>!</span> </strong></p>
            <p className="desc">e preparese para ver um novo conceito de site moderno</p>
        </div>
        
      </div>
     
      <div className="dot" ref={dotRef}>
        <div className="servicos">
          
          <div className="servicosDentro">
          <h1>A solução ideal para <strong> o seu serviço</strong></h1>

          <ul className="card">
            <li>
              <h3>SITE <strong>INSTITUCIONAL</strong> </h3>
              <p>Um site completo para melhorar o posicionamento digital da sua empresa, do zero ou adaptando o seu atual.
              </p>
            </li>

            <li>
              <h3>LANDING <strong>PAGE</strong> </h3>
              <p>Uma única página com foco em conversão direta. Ideal para quem está no começo ou tem apenas 1 serviço ou produto.
              </p>
            </li>

            <li>
              <h3> <strong>LANÇAMENTOS</strong> </h3>
              <p>Todas as páginas que você precisar para o seu lançamento e/ou campanhas de marketing.
              </p>
            </li>
          </ul>


          </div>
          

        <div ref={elemento2} className="performace">

          <div  className="right-side">
            <div className="photo"></div>
          </div>

          <section id="z1" className="zoomI blue">
            <h1>ScrollTrigger Zoom by Section</h1>
          </section>

          <section id="z2" className="zoomI green">
            <h1>Section 2</h1>
          </section>

          <section id="z3" className="zoomI white">
            <h1>Section 3</h1>
          </section>

          <section id="z4" className="zoomI yellow">
            <h1>Section 4</h1>
          </section>
        </div>


       
        </div>


      </div>

      


        <div className="seta">
                <span>V</span>
        </div>

    </section>
    
  );
}

export default Home;
