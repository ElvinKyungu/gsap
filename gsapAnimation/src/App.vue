
<template>
    <section class="section-banner bg-slate-500 ">
        <div class="line1">
            <h1>
                <div data-char=".">C</div>
                <div data-char="R">L</div>
                <div data-char=".">E</div>
                <div data-char="A">A</div>
                <div data-char="T">N</div>
                <div data-char=".">I</div>
                <div data-char="V">E</div>
                <div data-char="E">N</div>
            </h1>
            <div class="img-line1">
                <img 
                    class="img-banner"
                    src="https://images.unsplash.com/photo-1686859161298-0d0159e9c71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=756&q=80" 
                    alt="">

            </div>
        </div>
        <div class="line2" >
            <div class="img-line2">
                <img 
                    class="img-banner"
                    src="https://plus.unsplash.com/premium_photo-1682965455471-07caac97f1ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                    alt="">

            </div>
            <h1>
                <div data-char="P">C</div>
                <div data-char=".">R</div>
                <div data-char="O">A</div>
                <div data-char="D">D</div>
                <div data-char=".">U</div>
                <div data-char=".">C</div>
                <div data-char="T">C</div>
            </h1>
            
        </div>
        <div class="line3" >
           
            <h1>
                <div data-char=".">D</div>
                <div data-char="E">A</div>
                <div data-char="S">D</div>
                <div data-char=".">I</div>
                <div data-char="G">C</div>
                <div data-char=".">N</div>
            </h1>
            <h1 class="lead">
                <div data-char="L">Y</div>
                <div data-char=".">E</div>
                <div data-char="A">E</div>
                <div data-char=".">D</div>
            </h1>
            <div class="img-line3">
                <img 
                    class="img-banner"
                    src="https://images.unsplash.com/photo-1687017563985-a7193fcd7032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" 
                    alt="">

            </div>
            
        </div>
        <div class="line3">
           
           <h1>
               <div data-char=".">A</div>
               <div data-char="T">C</div>
           </h1>
          
           <div class="img-line3">
               <img 
                   class="img-banner"
                   src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                   alt="">

           </div>
           <h1 class="lead">
               <div data-char="L">K</div>
               <div data-char=".">I</div>
               <div data-char="A">N</div>
               <div data-char=".">A</div>
           </h1>
       </div>
    </section>
</template>

<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      animatedText: "Deux mots",
    };
  },
  mounted() {
    
    gsap.set("h1 div", {yPercent: -103})
    const tl = gsap.timeline()

    tl.to("h1 div ", {duration: .8, yPercent: 0, stagger: 0.05, ease: "expo.inOut"})

    .to("h1 div:not([data-char='.'])", {duration: .5, yPercent: 103, stagger: 0.05, ease:"expo.inOut"})
    // GSDeveTools.create({animation:tl})
    console.log(tl);

  }
}
</script>
  
<style>
.section-banner{
    height: 100%;
}
.line1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh/4);
    width: 70%;
    margin: 0 auto;
}
.line2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh/4);
    width: 100%;
}
.line3{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh/4);
    width: 100%;
    gap: 3rem;
}
.line1 h1{
    width: 100%;
}
.line2 h1{
    width: 100%;
}
.img-line1{
    width: 50%;
    position: relative;
}
.img-line1 img{
    width: 60%;
    border-radius: .9rem;
    margin-left: 70%;
}
.img-line2 img{
    width: 40%;
    border-radius: .9rem;
    margin: 0 auto;
}
.img-line3 img{
    width: 30%;
    border-radius: .9rem;
    margin: 0 auto;
}
.line3 h1{
    width: 50%;
    border-radius: .9rem;
    margin: 0 auto;
    
}
.lead{
    margin-left: -50rem;
}
</style>