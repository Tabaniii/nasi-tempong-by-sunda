import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://tempong-sunda-dapur.akmal-tabani.chatgpt.site'), title: 'Nasi Tempong by Sunda — Pedasnya Bikin Pulang Lagi', description: 'Sambal dadak, nasi hangat, dan masakan Sunda yang bikin kangen. Jelajahi menu Nasi Tempong by Sunda di Setiabudi, Jakarta Selatan.', openGraph: {title: 'Nasi Tempong by Sunda', description: 'Dari ulekannya, turun ke hati.', images: ['/images/hero.webp']} };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="id">
      <body>
        {children}
        <script
          src="http://localhost:3000/widget/revision.js"
          data-project="wp_fb0410fd4142504c55d3d824"
          defer
        />
      </body>
    </html>
  );
}
