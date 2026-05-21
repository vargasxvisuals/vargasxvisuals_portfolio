import Link from 'next/link'

export const metadata = {
  title: 'Contact | Vargas Visuals',
  description: 'Book a session with Vargas Visuals — wedding and portrait photographer in Fresno, CA.',
}

export default function Contact() {
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

      {/* CONTENT */}
      <section style={{paddingTop:'160px', paddingBottom:'120px', paddingLeft:'48px', paddingRight:'48px', maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start'}}>
        <div>
          <p style={{fontSize:'11px', letterSpacing:'5px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'24px'}}>Get in touch</p>
          <h1 style={{fontFamily:'Georgia, serif', fontSize:'clamp(36px, 5vw, 64px)', fontWeight:'400', lineHeight:'1.1', marginBottom:'32px'}}>
            Let's make something unforgettable.
          </h1>
          <p style={{fontSize:'16px', lineHeight:'1.9', color:'#6b6058', marginBottom:'48px'}}>
            Whether you're planning a wedding, want family portraits, or need professional headshots — I'd love to hear about it. Reach out and let's talk.
          </p>

          <div style={{display:'flex', flexDirection:'column', gap:'32px'}}>
            <div>
              <p style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'8px'}}>Email</p>
              <a href="mailto:david@vargasxvisuals.com" style={{color:'#f0ede8', textDecoration:'none', fontSize:'18px', fontFamily:'Georgia, serif'}}>david@vargasxvisuals.com</a>
            </div>
            <div>
              <p style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'8px'}}>Phone</p>
              <a href="tel:3237142484" style={{color:'#f0ede8', textDecoration:'none', fontSize:'18px', fontFamily:'Georgia, serif'}}>(323) 714-2484</a>
            </div>
            <div>
              <p style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'8px'}}>Instagram</p>
              <a href="https://instagram.com/vargasxvisuals" target="_blank" style={{color:'#f0ede8', textDecoration:'none', fontSize:'18px', fontFamily:'Georgia, serif'}}>@vargasxvisuals</a>
            </div>
            <div>
              <p style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'8px'}}>Location</p>
              <p style={{color:'#f0ede8', fontSize:'18px', fontFamily:'Georgia, serif'}}>Fresno, CA — Available statewide</p>
            </div>
          </div>
        </div>

        <div style={{background:'#111', padding:'48px', borderLeft:'1px solid #222'}}>
          <p style={{fontSize:'11px', letterSpacing:'4px', textTransform:'uppercase', color:'#c9b99a', marginBottom:'32px'}}>Send a message</p>
          <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
            {[['Your Name','text','name'],['Email Address','email','email'],['Phone (optional)','tel','phone']].map(([label, type, id]) => (
              <div key={id}>
                <label style={{display:'block', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', color:'#6b6058', marginBottom:'8px'}}>{label}</label>
                <input type={type} style={{width:'100%', background:'#0a0a0a', border:'1px solid #2a2a2a', padding:'14px 16px', color:'#f0ede8', fontSize:'15px', outline:'none'}} />
              </div>
            ))}
            <div>
              <label style={{display:'block', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', color:'#6b6058', marginBottom:'8px'}}>What are you looking for?</label>
              <select style={{width:'100%', background:'#0a0a0a', border:'1px solid #2a2a2a', padding:'14px 16px', color:'#f0ede8', fontSize:'15px', outline:'none'}}>
                <option>Wedding Photography</option>
                <option>Family Portraits</option>
                <option>Couples & Engagements</option>
                <option>Graduation Photos</option>
                <option>Headshots</option>
                <option>Concert / Event</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={{display:'block', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', color:'#6b6058', marginBottom:'8px'}}>Tell me about your vision</label>
              <textarea rows={5} style={{width:'100%', background:'#0a0a0a', border:'1px solid #2a2a2a', padding:'14px 16px', color:'#f0ede8', fontSize:'15px', outline:'none', resize:'vertical'}} />
            </div>
            <a href="mailto:david@vargasxvisuals.com" style={{display:'block', padding:'18px', background:'#c9b99a', color:'#0a0a0a', textDecoration:'none', fontSize:'12px', letterSpacing:'3px', textTransform:'uppercase', fontWeight:'600', textAlign:'center'}}>
              Send Message
            </a>
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
