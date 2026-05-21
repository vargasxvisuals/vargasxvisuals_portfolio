import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Vargas Visuals',
  description: 'Central Valley based photographer capturing real moments and golden light.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-800 selection:bg-stone-300 selection:text-stone-900">
      {/* Navigation */}
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-stone-500 transition-colors">
          VARGAS VISUALS
        </Link>
        <Link href="/" className="text-sm uppercase tracking-widest font-medium hover:text-stone-500 transition-colors">
          Back to Portfolio
        </Link>
      </nav>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <div className="relative aspect-[4/5] w-full bg-stone-200 overflow-hidden rounded-sm">
          {/* Replace src with your actual headshot image path once you upload it to the public folder */}
          <Image 
            src="/images/david-portrait.jpg" 
            alt="David Vargas" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Side */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Hi, I'm David.
            </h1>
            <div className="w-12 h-1 bg-stone-800 mb-8"></div>
          </div>
          
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
            <p>
              I am a photographer based right here in the heart of California's Central Valley. For me, photography isn't just about perfectly posed subjects; it's about chasing the golden light, documenting real moments, and capturing the authentic aesthetic of the people and places around me.
            </p>
            <p>
              Having spent time deep on the industry side of camera and technical gear, I know my way around the hardware—but my real passion is what happens in front of the lens. I approach every shoot with the goal of creating warm, timeless visuals that tell your unique story.
            </p>
            <p>
              When I'm not behind the camera or editing a gallery, you can usually find me under the hood of a car doing some DIY wrenching, tracking down the best local spots in the Fresno area, or cheering on the Bulldogs. 
            </p>
            <p className="pt-4 font-medium text-stone-800">
              Let's create something great together.
            </p>
          </div>

          <div>
            <a 
              href="mailto:your-email@example.com" 
              className="inline-block bg-stone-800 text-stone-50 px-8 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
