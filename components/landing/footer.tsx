'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Link2 } from 'lucide-react'

const techLogos = [
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org' },
  // { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', url: 'https://azure.microsoft.com' },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', url: 'https://supabase.com' },
]

export function LandingFooter() {
  return (
    <footer className="border-t py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className=" ">
          <div className=" ">
            <div className=" ">
              {/* <Link2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" /> */}
            </div>
            {/* <span className="text-sm sm:text-base md:text-lg font-bold">SmartPostAI</span> */}
          </div>
          
        </div>
        
        {/* Tech Stack Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b">
          <span className="text-xs sm:text-sm text-muted-foreground font-medium">Tech Stacks Used :</span>
          {techLogos.map((tech, index) => (
            <Link
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors group"
              title={tech.name}
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 opacity-70 group-hover:opacity-100 transition-opacity">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">
                {tech.name}
              </span>
            </Link>
          ))}
        </div>

        {/* <div className="text-center text-xs sm:text-sm text-muted-foreground">
          © 2026 SmartPostAI. All rights reserved.
        </div> */}
      </div>
    </footer>
  )
}

