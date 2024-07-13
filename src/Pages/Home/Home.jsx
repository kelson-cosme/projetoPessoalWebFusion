import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef, useLayoutEffect, useEffect } from "react"
import { Link } from "react-router-dom";

// Efeitos sumir
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


import "./Home.css"


import logod from "../../assets/logoD.png"
import logoe from "../../assets/logoE.png"
import seta from "../../assets/seta.png"
import portifolio1 from "../../assets/portifolio1.png"
import portifolio2 from "../../assets/portifolio2.png"
import sobre from "../../assets/sobre.png"
import logo from "../../assets/logo.png"
import projeto1 from "../../assets/projeto1.jpg"
import projeto2 from "../../assets/projeto2.jpg"


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
    gsap.killTweensOf(".logos")
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


  const elemento4 = useRef()
  const timiline4 = useRef()

  // Efeito Imagens passar do lado
 useLayoutEffect( () => { //animações encadeadas
  const passar = gsap.context( () =>{//criar timiline
    timiline4.current = gsap.timeline({
        scrollTrigger:{
          trigger: ".content",
          scrub: true, //apegar no scroll
          // markers: true,
          start: "top 650vh",//ponto de inicio no scroll
          end: "bottom 160vh"
        }
      })
      .fromTo(".content",{ //primeira div
        opacity: 1,
        x: 0,
      }, {
        x: -1250,
      })
  }, elemento4 )
  

  return () => { //ao sair da pagina ele mata o processo de animação
    gsap.killTweensOf(".content")
  }
},[])

  
const containerRef = useRef(null);

useLayoutEffect(() => {
  let proxy = { skew: 0 };
  const skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg");
  const clamp = gsap.utils.clamp(-20, 20);

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: "power3",
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew)
        });
      }
    }
  });

  gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

  return () => {
    ScrollTrigger.killAll();
  };
}, []);


  return(
    <div className="preencher">
      <section className="section one">
        <header  className="apresentacao">
          <h1 >Bem Vindo a <strong>Web Fusion</strong> </h1>
          <p >e prepare-se para ver um novo conceito de site moderno !</p>
        </header>
  
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

      <main className="section tree">

        <article className="left">
          <section data-aos="fade-right" id="left1" className="lefts left1">
            <div  className="tecnologia">
              <h1>DESIGN <strong>INDIVIDUAL</strong> </h1>
              <p>Nem precisa se preocupar, aqui não teremos nada de templates. Você vai receber um design personalizado seguindo sua identidade visual. Se ainda não tiver uma, nós criamos juntos.</p>
            </div>
          </section>

          <section data-aos="fade-right" id="left2" className="lefts left2">
          <div className="tecnologia">
              <h1>DESENVOLVIMENTO <strong>LIMPO</strong> </h1>
              <p>Todo o processo de desenvolvimento feito do zero, na melhor plataforma disponível: webflow. Estrutura limpa, animações e interações (tudo isso sem deixar seu site lento).</p>
            </div>

           
          </section>

          <section data-aos="fade-right"  id="left3" className="lefts left3">
          <div className="tecnologia">
              <h1><strong>ACOMPANHAMENTO</strong> </h1>
              <p>Podemos tomar conta do seu site para você pelo tempo que você quiser! Seja para manutenção ou para criações novas, eu posso ser o braço de tecnologia que você precisa.</p>
            </div>

          </section>
        </article>

        <aside  className="rigth">
          <div ref={elemento2} className="foto">
          </div>
        </aside>
      </main>

            
      
      <section className="four">
        <div ref={elemento4} className="portifolio">

          <div className="content">
            <div className="item" style={{backgroundImage: `url("${portifolio1}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio2}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio1}")`}}></div>
          </div>
        
          <div className="content">
            <div className="item" style={{backgroundImage: `url("${portifolio2}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio1}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio2}")`}}></div>
          </div>

          <div className="content">
            <div className="item" style={{backgroundImage:`url("${portifolio1}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio2}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio1}")`}}></div>
          </div>

          <div className="content">
            <div className="item" style={{backgroundImage: `url("${portifolio2}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio1}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio2}")`}}></div>
          </div>

          <div className="content">
            <div className="item" style={{backgroundImage: `url("${portifolio1}")`}}></div>
            <div className="item" style={{backgroundImage:`url("${portifolio2}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio1}")`}}></div>
          </div>

          <div className="content">
            <div className="item" style={{backgroundImage: `url("${portifolio2}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio1}")`}}></div>
            <div className="item" style={{backgroundImage: `url("${portifolio2}")`}}></div>
          </div>
        </div>


        <div>
            <div className="imgPortifolio" ref={containerRef}>
              <div className="skewElem"> 
                <img
                  src={projeto1}
                  alt=""
                />
              </div>

              <div className="skewElem"> 
                <img
                  src={projeto2}
                  alt=""
                />
              </div>
              
            </div>

        <div className="sobre">
              
            <div className="sobreImg">
                <img src={sobre} alt="" />
            </div>  

            <div className="sobreDentro"> 
                  <div className="logo2">
                    <div data-aos="fade-right" className="dentroImg">
                      <img src={logo} alt="" />
                    </div>
                    {/* <h1>Web <strong>Fusion</strong> </h1> */}

                  </div>

                  <div data-aos="fade-left" className="dentroTexto">
                      <h1>Muito prazer, somos a <strong>Web Fusion</strong></h1>

                      <p>Somos especializados na criação de landing pages que transformam visitantes em clientes. Nossa missão é impulsionar o sucesso online dos nossos clientes, proporcionando experiências digitais envolventes e eficazes.
                       Acreditamos que a primeira impressão é crucial. É por isso que nos dedicamos a criar páginas que sejam não apenas esteticamente agradáveis, mas também otimizadas para conversão, carregamento rápido e navegação intuitiva. Seja para uma campanha de marketing, lançamento de produto ou qualquer outra necessidade específica, nossas landing pages são projetadas para maximizar seu impacto.</p>
                  </div>
            </div>

            <div data-aos="zoom-in-up" className="chamada">
              <h1>CHEGOU A HORA DE VOCÊ TER UM <br />
              <strong>SITE PROFISSIONAL </strong>
            </h1>
            </div>

            <div className="desafio">
                <h3>ABERTO PARA DESAFIOS</h3>
                <h4>O que vamos construir juntos?</h4>

                <div className="desafioSeta">
                  <img src={seta} alt="" />
                </div>
            </div>

                <div data-aos="zoom-in-up" className="zap">
                  <h1><Link to={"whatsapp.com"}>MANDA UM ZAP</Link> </h1>
                </div>
        </div>


          <footer>
            <p>Web Fusion  © All Rights Reserved.</p>
          </footer>

        </div>

      </section>



    </div>
  )
}

export default Home;