import Link from 'next/link'

export const metadata = {
  title: 'About | Vargas Visuals',
  description: 'Meet David Vargas — wedding and portrait photographer based in Fresno, CA with over 8 years of experience.',
}

export default function About() {
  return (
    <main style={{background:'#0a0a0a', minHeight:'100vh', color:'#f0ede8'}}>

      {/* NAV */}
      <nav style={{position:'fixed', top:0, left:0, right:0, zIndex:100, padding:'24px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'rgba(10,10,10,0.95)'}}>
        <Link href="/" style={{fontFamily:'Georgia, serif', fontSize:'20px', letterSpacing:'3px', color:'#f0ede8', textDecoration:'none', textTransform:'uppercase'}}>Vargas Visuals</Link>
        <div style={{display:'flex', gap:'36px'}}>
          {[['Portfolio','/portfolio'],['About','/about'],['Contact','/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{color:'#c9b99a', textDecoration:'none', fontSize:'13px', letterSpacing:'2px', textTransform:'uppercase'}}>{label}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{paddingTop:'160px', paddingBottom:'80px', paddingLeft:'48px', paddingRight:'48px', maxWidth:'900px', margin:'0 auto'}}>
        <p style={{fontSize:'11px', letterSpacing:'5px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'24px'}}>The photographer</p>
        <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(40px, 6vw, 80px)', fontWeight:'400', lineHeight:'1.1', marginBottom:'48px'}}>
          Hi, I'm David.
        </h1>
      </section>

      {/* CONTENT */}
      <section style={{padding:'0 48px 120px', maxWidth:'900px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start'}}>
        <div>
          <p style={{fontSize:'18px', lineHeight:'1.9', color:'#d4c4b0', marginBottom:'32px'}}>
            With over eight years of experience as a media producer and photographer, I've built a career around one simple belief: the best photos happen when people forget they're being photographed.
          </p>
          <p style={{fontSize:'16px', lineHeight:'1.9', color:'#6b6058', marginBottom:'32px'}}>
            I specialize in weddings, family portraits, engagements, graduations, and headshots — bringing the same care and creativity to every session, whether it's an intimate elopement or a large celebration.
          </p>
          <p style={{fontSize:'16px', lineHeight:'1.9', color:'#6b6058', marginBottom:'48px'}}>
            Outside of photography, you'll find me watching football, experimenting in the kitchen, or exploring the outdoors. Those experiences — being present, noticing details, appreciating moments — inform everything I do behind the camera.
          </p>
          <Link href="/contact" style={{padding:'16px 48px', border:'1px solid #c9b99a', color:'#c9b99a', textDecoration:'none', fontSize:'12px', letterSpacing:'3px', textTransform:'uppercase'}}>
            Work With Me
          </Link>
        </div>

        <div>
          <div style={{background:'#111', padding:'48px', borderLeft:'1px solid #222', marginBottom:'2px'}}>
            <p style={{fontSize:'11px', letterSpacing:'4px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'16px'}}>Based in</p>
            <p style={{fontFamily:'Georgia, serif', fontSize:'24px'}}>Fresno, California</p>
          </div>
          <div style={{background:'#111', padding:'48px', borderLeft:'1px solid #222', marginBottom:'2px'}}>
            <p style={{fontSize:'11px', letterSpacing:'4px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'16px'}}>Coverage</p>
            <p style={{fontFamily:'Georgia, serif', fontSize:'24px'}}>All of California</p>
          </div>
          <div style={{background:'#111', padding:'48px', borderLeft:'1px solid #222', marginBottom:'2px'}}>
            <p style={{fontSize:'11px', letterSpacing:'4px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'16px'}}>Experience</p>
            <p style={{fontFamily:'Georgia, serif', fontSize:'24px'}}>8+ Years</p>
          </div>
          <div style={{background:'#111', padding:'48px', borderLeft:'1px solid #222'}}>
            <p style={{fontSize:'11px', letterSpacing:'4px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'16px'}}>Specialties</p>
            <p style={{fontFamily:'Georgia, serif', fontSize:'18px', lineHeight:'1.7'}}>Weddings · Families<br/>Engagements · Headshots<br/>Graduations · Concerts</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'48px', borderTop:'1px solid #1a1a1a', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'}}>
        <Link href="/" style={{fontFamily:'Georgia, serif', letterSpacing:'2px', fontSize:'14px', color:'#f0ede8', textDecoration:'none'}}>Vargas Visuals</Link>
        <p style={{color:'#3a3530', fontSize:'13px'}}>© 2026 Vargas Visuals. Fresno, CA.</p>
        <div style={{display:'flex', gap:'24px'}}>
          <a href="https://instagram.com/vargasxvisuals" style={{color:'#6b6058', fontSize:'13px', textDecoration:'none'}}>Instagram</a>
          <a href="mailto:david@vargasxvisuals.com" style={{color:'#6b6058', fontSize:'13px', textDecoration:'none'}}>Email</a>
        </div>
      </footer>
    </main>
  )
}
