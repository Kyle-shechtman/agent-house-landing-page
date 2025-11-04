import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Data Buddies Solutions',
    short_name: 'Data Buddies',
    description: 'AI automation consultancy for small businesses. Launch AI agents for lead follow-up, customer success, and workflow automation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f5',
    theme_color: '#cc6633',
    icons: [
      {
        src: '/favicon-old.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
