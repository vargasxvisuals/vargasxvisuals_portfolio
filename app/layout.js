import './globals.css'

export const metadata = {
  title: 'Vargas Visuals | California Wedding & Portrait Photographer',
  description: 'Vargas Visuals — Wedding, family, and portrait photographer based in Fresno, CA. Serving all of California with timeless, cinematic photography.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
