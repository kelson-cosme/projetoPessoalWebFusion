import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef, useLayoutEffect, useEffect } from "react"

// Efeitos sumir
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


import "./Home.css"


import logod from "../../assets/logoD.png"
import logoe from "../../assets/logoE.png"
import seta from "../../assets/seta.png"

import figma from "../../assets/figma.png"
import cod from "../../assets/cod.png"
import acompanhar from "../../assets/acompanhar.png"

function Home(){
//AOS
  useEffect( () => {
    AOS.init();
}, [])


  //Efeito desaparecer imagens GSASP
  const timiline3 = useRef()
  const elemento3 = useRef()

 //-----------------------------------
 useLayoutEffect( () => { //animações encadeadas
  gsap.registerPlugin(ScrollTrigger)
  const ctx = gsap.context( () =>{//criar timiline
      timiline3.current = gsap.timeline({
        scrollTrigger:{
          trigger: ".logos",
          scrub: true, //apegar no scroll
          // markers: true,
          start: "top 350vh",//ponto de inicio no scroll
          end: "bottom 80px"
        }
      })
      .fromTo("#logoE",{ //primeira div
        opacity: 1,
        x: 0,
      }, {
        opacity:0,
        x: -160,
      }) .fromTo("#logoD",{ //primeira div
        opacity: 1,
        x: 0,
      }, {
        opacity:0,
        x: 160,
      })
  }, elemento3 )
  

  return () => { //ao sair da pagina ele mata o processo de animação
    gsap.killTweensOf(".model")
  }
},[])




  // Efeito Preencher
  const timiline = useRef()
  const elemento = useRef()

  useLayoutEffect ( () => {
    gsap.registerPlugin(ScrollTrigger)
    const cpx = gsap.context( () => {
      timiline.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#sectionTwo",
          scrub: true,
          // markers: true,
          start: "top 550vh",
          end: "bottom 700vh",
        }
      }).fromTo("#sectionTwo", {
        
        y: "0"
      },{
        clipPath: "circle(150% at 50% 15%)",
        y: "0"

        // opacity: 0,
        // y: 160
      })
      
    })
    return () => { //ao sair da pagina ele mata o processo de animação
      gsap.killTweensOf("#sectionTwo")
    }

  },[])



  // Efeito Zoom
  const timiline2 = useRef()
  const elemento2 = useRef()

  useLayoutEffect ( () => {
    gsap.registerPlugin(ScrollTrigger)
    const cpx = gsap.context( () => {
      timiline2.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".left",
          scrub: true,
          // markers: true,
          start: "top 550vh",
          end: "bottom 700vh",
          
        }
      }).fromTo(".foto",{
        transform: "scale(1.0)"

      },{
        transform: "scale(3.0)",
        transformOrigin: "0% 100%"

      }).fromTo(".foto", {
        transform: "scale(1.0)"

      },{
        transform: "scale(3.0)",
        transformOrigin: "100% 0"
        
      }).fromTo(".foto", {
        transform: "scale(1.0)"

      },{
        transform: "scale(3.0)",
        transformOrigin: "50% 50%"
        
      })
      
    })

    return () => { //ao sair da pagina ele mata o processo de animação
      gsap.killTweensOf(".left")
    }
  },[])

  return(
    <div className="preencher">
      <section className="section one">
        <div  className="apresentacao">
          <h1 >Bem Vindo a <strong>Web Fusion</strong> </h1>
          <p >e prepare-se para ver um novo conceito de site moderno !</p>
        </div>
  
        <div ref={elemento3} className="logo">
          <div  className="logos">
            <img  src={logoe} id="logoE" alt="" />
            <img src={logod} id="logoD" alt="" />
          </div>
          
          
        </div>
        <div className="circ"> 
            <img src={seta} alt="" />
          </div>
      </section>
      
      <section ref={elemento} className="section two" id="sectionTwo" >

        <div className="card">

          <h1 data-aos="fade-down">A Solução ideal para <strong>o seu Serviço</strong> </h1>

          <ul>
            <li data-aos="fade-up-right" data-aos-duration="1000"> 
              <h2>SITE <strong>INSTITUCIONAL</strong> </h2>
              <p>Um site completo para melhorar o posicionamento digital da sua empresa, do zero ou adaptando o seu atual.</p>
            </li>

            <li data-aos="fade-up-left" data-aos-duration="1000">
              <h2>LANDING <strong>PAGE</strong> </h2>
              <p>Uma única página com foco em conversão direta. Ideal para quem está no começo ou tem apenas 1 serviço ou produto.</p>
            </li>

            <li data-aos="fade-up" data-aos-duration="1000">
              <h2><strong>LANÇAMENTOS</strong></h2>
              <p>Todas as páginas que você precisar para o seu lançamento e/ou campanhas de marketing.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section tree">

        <div className="left">
          <section data-aos="flip-right" id="left1" className="lefts left1">
            <div className="tecnologia">
              <h1>DESIGN INDIVIDUAL</h1>
              <p>Nem precisa se preocupar, aqui não teremos nada de templates. Você vai receber um design personalizado seguindo sua identidade visual. Se ainda não tiver uma, nós criamos juntos.</p>
            </div>

            <div className="tecnologiaImg">
              <img src={figma} alt="" />
            </div>

          </section>

          <section data-aos="flip-left" id="left2" className="lefts left2">
          <div className="tecnologia">
              <h1>DESENVOLVIMENTO LIMPO</h1>
              <p>Todo o processo de desenvolvimento feito do zero, na melhor plataforma disponível: webflow. Estrutura limpa, animações e interações (tudo isso sem deixar seu site lento).</p>
            </div>

            <div className="tecnologiaImg">
              <img src={cod} alt="" />
            </div>
          </section>

          <section data-aos="flip-right" id="left3" className="lefts left3">
          <div className="tecnologia">
              <h1>ACOMPANHAMENTO</h1>
              <p>Eu posso tomar conta do seu site para você pelo tempo que você quiser! Seja para manutenção ou para criações novas, eu posso ser o braço de tecnologia que você precisa.</p>
            </div>

            <div className="tecnologiaImg">
              <img src={acompanhar} alt="" />
            </div>
          </section>
        </div>

        <div  className="rigth">
          <div ref={elemento2} className="foto">
          </div>
        </div>
      </section>




      

    </div>
  )
}

export default Home;