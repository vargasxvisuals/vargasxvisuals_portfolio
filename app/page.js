import Link from 'next/link'

export default function Home() {
  return (
    <main style={{background:'#0a0a0a', minHeight:'100vh', color:'#f0ede8'}}>

      {/* NAV */}
      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, padding:'24px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'linear-gradient(to bottom, rgba(10,10,10,0.9), transparent)'}}>
        <Link href="/" style={{fontFamily:'Georgia, serif', fontSize:'20px', letterSpacing:'3px', color:'#f0ede8', textDecoration:'none', textTransform:'uppercase'}}>
          Vargas Visuals
        </Link>
        <div style={{display:'flex', gap:'36px'}}>
          {[['Portfolio','/portfolio'],['About','/about'],['Contact','/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{color:'#c9b99a', textDecoration:'none', fontSize:'13px', letterSpacing:'2px', textTransform:'uppercase'}}>{label}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', position:'relative', background:'linear-gradient(160deg, #1a1410 0%, #0a0a0a 50%, #0f0d0a 100%)'}}>
        <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse at center, rgba(180,140,90,0.08) 0%, transparent 70%)'}}/>
        <p className="fade-up" style={{fontSize:'12px', letterSpacing:'6px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'24px'}}>California Wedding & Portrait Photographer</p>
        <h1 className="fade-up-delay" style={{fontFamily:'Georgia, serif', fontSize:'clamp(48px, 8vw, 96px)', fontWeight:'400', lineHeight:'1.05', letterSpacing:'-1px', marginBottom:'32px'}}>
          Capture.<br/>Create.<br/>Remember.
        </h1>
        <p className="fade-up-delay-2" style={{fontSize:'16px', color:'#9a8a78', letterSpacing:'1px', marginBottom:'48px', maxWidth:'480px', lineHeight:'1.8'}}>
          Timeless, cinematic photography for your most meaningful moments. Based in Fresno — shooting all of California.
        </p>
        <Link className="fade-up-delay-2" href="/contact" style={{padding:'16px 48px', border:'1px solid #c9b99a', color:'#c9b99a', textDecoration:'none', fontSize:'12px', letterSpacing:'3px', textTransform:'uppercase', transition:'all 0.3s'}}>
          Book a Session
        </Link>
      </section>

      {/* SERVICES */}
      <section style={{padding:'120px 48px', maxWidth:'1200px', margin:'0 auto'}}>
        <p style={{fontSize:'11px', letterSpacing:'5px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'16px', textAlign:'center'}}>What I shoot</p>
        <h2 style={{fontFamily:'Georgia, serif', fontSize:'clamp(32px, 5vw, 56px)', fontWeight:'400', textAlign:'center', marginBottom:'80px'}}>Every moment, beautifully told</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'2px'}}>
          {[
            {title:'Weddings', desc:'Your love story, documented with intention and artistry.'},
            {title:'Families', desc:'Candid, warm portraits that capture who you are right now.'},
            {title:'Couples & Engagements', desc:'Romantic sessions that feel natural, never posed.'},
            {title:'Graduations', desc:'Milestone moments that deserve to be remembered beautifully.'},
            {title:'Headshots', desc:'Professional portraits that make a lasting first impression.'},
            {title:'Concerts & Festivals', desc:'The energy, the crowd, the moment — all of it preserved.'},
          ].map(({title, desc}) => (
            <div key={title} style={{padding:'48px 36px', background:'#111', borderLeft:'1px solid #222'}}>
              <h3 style={{fontFamily:'Georgia, serif', fontSize:'24px', fontWeight:'400', marginBottom:'12px'}}>{title}</h3>
              <p style={{color:'#6b6058', fontSize:'15px', lineHeight:'1.7'}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{padding:'120px 48px', background:'#0f0d0a', textAlign:'center'}}>
        <p style={{fontSize:'11px', letterSpacing:'5px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'24px'}}>The photographer</p>
        <h2 style={{fontFamily:'Georgia, serif', fontSize:'clamp(28px, 4vw, 48px)', fontWeight:'400', marginBottom:'24px', maxWidth:'700px', margin:'0 auto 24px'}}>
          Eight years. Thousands of moments. One consistent goal.
        </h2>
        <p style={{color:'#6b6058', fontSize:'16px', lineHeight:'1.9', maxWidth:'560px', margin:'0 auto 48px'}}>
          I'm David — a media producer and photographer who believes every session should feel easy, fun, and true to who you are. No stiff poses. Just real moments.
        </p>
        <Link href="/about" style={{color:'#c9b99a', textDecoration:'none', fontSize:'12px', letterSpacing:'3px', textTransform:'uppercase', borderBottom:'1px solid #c9b99a', paddingBottom:'4px'}}>
          Learn More
        </Link>
      </section>

      {/* TESTIMONIAL */}
      <section style={{padding:'120px 48px', maxWidth:'800px', margin:'0 auto', textAlign:'center'}}>
        <p style={{fontFamily:'Georgia, serif', fontSize:'clamp(20px, 3vw, 32px)', fontWeight:'400', fontStyle:'italic', lineHeight:'1.6', color:'#d4c4b0', marginBottom:'32px'}}>
          "It was everything we were hoping for and more. The experience was very professional, easy-going, and overall extremely fun."
        </p>
        <p style={{fontSize:'12px', letterSpacing:'3px', textTransform:'uppercase', color:'#c9b99a'}}>— Jonathan Castillo</p>
      </section>

      {/* CTA */}
      <section style={{padding:'120px 48px', textAlign:'center', background:'linear-gradient(160deg, #1a1410, #0a0a0a)'}}>
        <h2 style={{fontFamily:'Georgia, serif', fontSize:'clamp(32px, 5vw, 64px)', fontWeight:'400', marginBottom:'24px'}}>Let's make something<br/>unforgettable.</h2>
        <p style={{color:'#6b6058', marginBottom:'48px', fontSize:'16px'}}>Fresno, CA — available throughout all of California</p>
        <Link href="/contact" style={{padding:'18px 56px', background:'#c9b99a', color:'#0a0a0a', textDecoration:'none', fontSize:'12px', letterSpacing:'3px', textTransform:'uppercase', fontWeight:'600'}}>
          Get in Touch
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'48px', borderTop:'1px solid #1a1a1a', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'}}>
        <p style={{fontFamily:'Georgia, serif', letterSpacing:'2px', fontSize:'14px'}}>Vargas Visuals</p>
        <p style={{color:'#3a3530', fontSize:'13px'}}>© 2026 Vargas Visuals. Fresno, CA.</p>
        <div style={{display:'flex', gap:'24px'}}>
          <a href="https://instagram.com/vargasxvisuals" style={{color:'#6b6058', fontSize:'13px', textDecoration:'none', letterSpacing:'1px'}}>Instagram</a>
          <a href="mailto:david@vargasxvisuals.com" style={{color:'#6b6058', fontSize:'13px', textDecoration:'none', letterSpacing:'1px'}}>Email</a>
        </div>
      </footer>

    </main>
  )
}
