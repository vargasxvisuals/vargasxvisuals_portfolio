"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const photos = {
    hero: '/images/ae51ff2e-9527-4799-93fa-f56c7d432454_rw_1200.jpg',
    field: '/images/770e539d-34b7-40c3-9a11-3c47daf4dc8a_rw_1200.jpg',
    wedding: '/images/06209d02-9ac4-4907-9e43-6d20657e3833_rw_1200.jpg',
    intimate: '/images/a40ac128-15a8-4f22-a883-11f46983cabc_rw_1200.jpg',
    sunset: '/images/DSC08736.jpg',
  };

  // Reusable animation rules to keep the code clean
  const scrollReveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const scrollRevealDelayed = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main style={{background:'#f7f3ee', minHeight:'100vh', color:'#2c2420'}}>
      
      {/* NAV */}
      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, padding:'20px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'rgba(247,243,238,0.95)', backdropFilter:'blur(8px)', borderBottom:'1px solid #e8e0d8'}}>
        <Link href="/" style={{fontFamily:'Georgia, serif', fontSize:'16px', letterSpacing:'4px', color:'#2c2420', textDecoration:'none', textTransform:'uppercase'}}>
          Vargas Visuals
        </Link>
        <div style={{display:'flex', gap:'36px'}}>
          {[['Portfolio','/portfolio'],['About','/about'],['Contact','/about']].map(([l,h]) => (
            <Link key={l} href={h} style={{color:'#9a8070', textDecoration:'none', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase'}}>{l}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{display:'grid', gridTemplateColumns:'55% 45%', minHeight:'100vh', paddingTop:'0'}}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
          style={{position:'relative', overflow:'hidden'}}
        >
          <img src={photos.hero} alt="Couple in golden California wildflower field" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center'}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, transparent 70%, rgba(247,243,238,0.3))'}} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'80px 56px 80px 48px', background:'#f7f3ee'}}
        >
          <p style={{fontSize:'10px', letterSpacing:'5px', textTransform:'uppercase', color:'#b8864a', marginBottom:'24px'}}>
            California wedding & portrait photographer
          </p>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(36px, 4vw, 64px)', fontWeight:'400', lineHeight:'1.15', marginBottom:'24px', color:'#2c2420'}}>
            Real moments.<br/>Golden light.<br/>California.
          </h1>
          <p style={{fontSize:'16px', lineHeight:'1.9', color:'#8a7060', marginBottom:'40px', maxWidth:'380px'}}>
            Based in Fresno, shooting all of California. I capture the in-between moments — the laughs, the glances, the real stuff.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/about" style={{padding:'14px 40px', background:'#2c2420', color:'#f7f3ee', textDecoration:'none', fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase'}}>
              Book a Session
            </Link>
            <Link href="/portfolio" style={{padding:'14px 40px', border:'1px solid #c4a888', color:'#8a7060', textDecoration:'none', fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase'}}>
              View Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* PHOTO MOSAIC */}
      <section style={{padding:'80px 48px'}}>
        <motion.div {...scrollReveal}>
          <p style={{fontSize:'10px', letterSpacing:'5px', textTransform:'uppercase', color:'#b8864a', marginBottom:'12px', textAlign:'center'}}>The work</p>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'clamp(28px, 3vw, 44px)', fontWeight:'400', textAlign:'center', marginBottom:'48px', color:'#2c2420'}}>
            Stories worth remembering
          </h2>
        </motion.div>
        
        <motion.div {...scrollRevealDelayed} style={{display:'grid', gridTemplateColumns:'1.3fr 1fr 1fr', gridTemplateRows:'280px 280px', gap:'6px', maxWidth:'1200px', margin:'0 auto'}}>
          <div style={{gridRow:'span 2', overflow:'hidden'}}>
            <img src={photos.field} alt="Couple in wildflower field" style={{width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.6s ease'}} onMouseEnter={e=>e.target.style.transform='scale(1.03)'} onMouseLeave={e=>e.target.style.transform='scale(1)'} />
          </div>
          <div style={{overflow:'hidden'}}>
            <img src={photos.wedding} alt="Wedding couple editorial portrait" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block', transition:'transform 0.6s ease'}} onMouseEnter={e=>e.target.style.transform='scale(1.03)'} onMouseLeave={e=>e.target.style.transform='scale(1)'} />
          </div>
          <div style={{overflow:'hidden'}}>
            <img src={photos.intimate} alt="Intimate couple portrait" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block', transition:'transform 0.6s ease'}} onMouseEnter={e=>e.target.style.transform='scale(1.03)'} onMouseLeave={e=>e.target.style.transform='scale(1)'} />
          </div>
          <div style={{overflow:'hidden', gridColumn:'span 2'}}>
            <img src={photos.sunset} alt="Couple at golden hour" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%', display:'block', transition:'transform 0.6s ease'}} onMouseEnter={e=>e.target.style.transform='scale(1.03)'} onMouseLeave={e=>e.target.style.transform='scale(1)'} />
          </div>
        </motion.div>
        
        <motion.div {...scrollReveal} style={{textAlign:'center', marginTop:'40px'}}>
          <Link href="/portfolio" style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#b8864a', textDecoration:'none', borderBottom:'1px solid #b8864a', paddingBottom:'4px'}}>
            View Full Portfolio
          </Link>
        </motion.div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{background:'#efe9e2', padding:'100px 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center', maxWidth:'1200px', margin:'0 auto 0'}}>
        <motion.div {...scrollReveal}>
          <p style={{fontSize:'10px', letterSpacing:'5px', textTransform:'uppercase', color:'#b8864a', marginBottom:'20px'}}>The photographer</p>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'clamp(28px, 3vw, 44px)', fontWeight:'400', marginBottom:'24px', color:'#2c2420', lineHeight:'1.2'}}>
            Eight years. Thousands of moments.
          </h2>
          <p style={{fontSize:'16px', lineHeight:'1.9', color:'#6b5a50', marginBottom:'16px'}}>
            I'm David — I believe the best photos happen when people forget they're being photographed. No stiff poses. Just real moments.
          </p>
          <p style={{fontSize:'16px', lineHeight:'1.9', color:'#6b5a50', marginBottom:'40px'}}>
            Whether it's a wedding in the Central Valley or an engagement session in the hills, I'm there for every laugh, every tear, every glance.
          </p>
          <Link href="/about" style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#b8864a', textDecoration:'none', borderBottom:'1px solid #b8864a', paddingBottom:'4px'}}>
            More About David
          </Link>
        </motion.div>
        
        <motion.div {...scrollRevealDelayed} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3px'}}>
          {[['8+','Years of experience'],['CA','Statewide coverage'],['∞','Moments captured'],['★','Unforgettable days']].map(([num, label]) => (
            <div key={label} style={{background:'#f7f3ee', padding:'32px 24px'}}>
              <p style={{fontFamily:'Georgia, serif', fontSize:'36px', color:'#b8864a', marginBottom:'8px', fontWeight:'400'}}>{num}</p>
              <p style={{fontSize:'12px', color:'#9a8070', letterSpacing:'1px'}}>{label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SERVICES */}
      <section style={{padding:'100px 48px', background:'#f7f3ee'}}>
        <motion.div {...scrollReveal}>
          <p style={{fontSize:'10px', letterSpacing:'5px', textTransform:'uppercase', color:'#b8864a', marginBottom:'12px', textAlign:'center'}}>What I offer</p>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'clamp(28px, 3vw, 44px)', fontWeight:'400', textAlign:'center', marginBottom:'56px', color:'#2c2420'}}>
            Every celebration, beautifully told
          </h2>
        </motion.div>
        
        <motion.div {...scrollRevealDelayed} style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'3px', maxWidth:'1200px', margin:'0 auto'}}>
          {[{title:'Weddings', desc:'Your love story captured with intention, artistry, and care.'},
            {title:'Families', desc:'Warm, candid portraits that capture who you are right now.'},
            {title:'Couples & Engagements', desc:'Natural sessions that feel like an adventure, not a photo shoot.'},
            {title:'Graduations', desc:'Milestone moments that deserve to be remembered beautifully.'},
            {title:'Headshots', desc:'Professional portraits that make a lasting first impression.'},
            {title:'Concerts & Events', desc:'The energy, the crowd, the moment — all of it preserved.'},
          ].map(({title, desc}) => (
            <div key={title} style={{background:'#efe9e2', padding:'40px 32px', borderTop:'2px solid #b8864a'}}>
              <h3 style={{fontFamily:'Georgia, serif', fontSize:'22px', fontWeight:'400', marginBottom:'12px', color:'#2c2420'}}>{title}</h3>
              <p style={{fontSize:'14px', lineHeight:'1.8', color:'#8a7060'}}>{desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{padding:'100px 48px', background:'#2c2420', textAlign:'center'}}>
        <motion.div {...scrollReveal}>
          <p style={{fontFamily:'Georgia, serif', fontSize:'clamp(18px, 2.5vw, 28px)', fontStyle:'italic', fontWeight:'400', color:'#e8ddd0', lineHeight:'1.7', maxWidth:'700px', margin:'0 auto 32px'}}>
            "It was everything we were hoping for and more. The experience was professional, easy-going, and overall extremely fun. Thank you for capturing our beautiful moments."
          </p>
          <p style={{fontSize:'10px', letterSpacing:'4px', textTransform:'uppercase', color:'#b8864a'}}>— Jonathan Castillo</p>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{padding:'120px 48px', textAlign:'center', background:'#f7f3ee'}}>
        <motion.div {...scrollReveal}>
          <p style={{fontSize:'10px', letterSpacing:'5px', textTransform:'uppercase', color:'#b8864a', marginBottom:'20px'}}>Ready?</p>
          <h2 style={{fontFamily:'Georgia, serif', fontSize:'clamp(32px, 4vw, 60px)', fontWeight:'400', marginBottom:'16px', color:'#2c2420'}}>
            Let's make something<br/>you'll never forget.
          </h2>
          <p style={{color:'#9a8070', marginBottom:'48px', fontSize:'15px', letterSpacing:'1px'}}>
            Fresno, CA — available throughout all of California
          </p>
          <Link href="/about" style={{padding:'18px 56px', background:'#b8864a', color:'#f7f3ee', textDecoration:'none', fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase'}}>
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'40px 48px', borderTop:'1px solid #e0d8d0', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px', background:'#f7f3ee'}}>
        <p style={{fontFamily:'Georgia, serif', letterSpacing:'3px', fontSize:'14px', color:'#2c2420', textTransform:'uppercase'}}>Vargas Visuals</p>
        <p style={{color:'#c4b0a0', fontSize:'12px'}}>© 2026 Vargas Visuals · Fresno, CA</p>
        <div style={{display:'flex', gap:'24px'}}>
          <a href="https://instagram.com/vargasxvisuals" style={{color:'#9a8070', fontSize:'12px', textDecoration:'none', letterSpacing:'1px'}}>Instagram</a>
          <a href="mailto:david@vargasxvisuals.com" style={{color:'#9a8070', fontSize:'12px', textDecoration:'none', letterSpacing:'1px'}}>Email</a>
        </div>
      </footer>
    </main>
  )
}
