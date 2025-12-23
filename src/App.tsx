import { useState, useEffect } from 'react';
import backgroundImage from 'figma:asset/8753b371cf0479e35a4b170ca6e6d0f7f2780ec4.png';
import logoImage from 'figma:asset/ba58a5f3aa25196557a855b49dbf09f5e5ecb6ab.png';
import villaImage from 'figma:asset/9972f4784194880db4bcdb7739e82bbdba642935.png';
import telereaImage from 'figma:asset/48cd90b6dc0cca744201c8074cd57f82c191345a.png';
import telereaSecondaryImage from 'figma:asset/08c90b93dfdb23e5f8f2eacdd3f391af731fe2af.png';
import sonasImage from 'figma:asset/1a28d1300648ac8c1a4187a1f5b9d942bf10c648.png';
import sonasSecondaryImage from 'figma:asset/bae3ba7fda1cb6a231d8008ea010df8e70048e47.png';
import wineryBarnImage from 'figma:asset/fc242ee5367c08266055da979c2edd8235d8a8af.png';
import wineryBarnSecondaryImage from 'figma:asset/65a2f56098521bfbbfd7ae96dc864eef28ea4ee6.png';
import salesforceOfficeImage from 'figma:asset/27475f32d38816e33432b356aaa1c55d709b34da.png';
import salesforceOfficeSecondaryImage from 'figma:asset/b2efd5b1521bcd12f2dc43dcdcf3697965446046.png';
import aiCodingImage from 'figma:asset/d5c6f2b13c7bbe15b67252c3487b25f433ef7e54.png';
import aiCodingSecondaryImage from 'figma:asset/495aad397da894c43aedb020fe0661d999f6968e.png';
import aiCodingDiagramImage from 'figma:asset/b74506a5967f1f2b15ac8ed014a8cfbaaaa5d1cc.png';
import unityPrepImage from 'figma:asset/4db9d4fd5e1d09aa2bf7d30e85264fd4afd2189a.png';
import unityPrepSecondaryImage from 'figma:asset/944e1aba4213f6788037dbc40ccaf8f0d5aaf25d.png';

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  fullDescription: string;
  link: string;
  links?: { text: string; url: string }[];
  secondaryImage: string;
  secondaryDescription?: string;
  tertiaryImage?: string;
  role: string;
  company?: string;
  hideLink?: boolean;
}

const portfolioProjects: Project[] = [
  {
    id: 3,
    image: telereaImage,
    title: 'Telarea Studio',
    description: 'Curating the presence of a boutique studio.',
    fullDescription: 'Telarea is a boutique spatial experience studio designing and implementing calm, human-centered technology to create spaces that feel natural, memorable, and seamlessly integrated.',
    link: 'https://telarea.com',
    secondaryImage: telereaSecondaryImage,
    secondaryDescription: 'The client wanted a premium, future-facing presence that would position them as a high-taste partner for real estate developers and placemakers. The design delivers that through an editorial layout, gallery-like aesthetic and grid discipline, with oversized serif typography, restrained copy, and lots of negative space. Subtle biophilic accents soften the tech-forward tone, and minimal visuals communicate technological expertise without drifting into gimmicky sci-fi aesthetics.',
    role: 'Web Designer, Web Developer, Art Director',
  },
  {
    id: 4,
    image: sonasImage,
    title: 'Sonas Marketing',
    description: 'Helping a metrics-forward agency feel approachable and fresh.',
    fullDescription: 'Sonas Marketing is a full-service marketing agency that combines data analytics with content optimization to drive measurable growth. The brand identity and web platform were designed to reflect their modern, metrics-driven approach.',
    link: 'https://sonas.pro',
    secondaryImage: sonasSecondaryImage,
    secondaryDescription: 'The brand system balances approachability with authority through clean typography, strategic color usage, and data visualization elements that make complex analytics feel accessible and actionable. The result is a neo-brutalist, high-energy, punchy aesthetic.',
    role: 'Web Designer, Web Developer, Brand Designer',
  },
  {
    id: 5,
    image: wineryBarnImage,
    title: 'Winery Barn',
    description: 'An intimate, personal anchor for a top-ten wine family business.',
    fullDescription: 'The Winery Barn is a remote scenic tasting room that serves as an intimate and personal anchor for a top-ten wine family business. The project focused on creating a space that not only amplifies the beauty of the surrounding landscape, but also leans into sustainable measures and highlights the family\'s unique character.',
    link: 'https://winerybarn.com',
    secondaryImage: wineryBarnSecondaryImage,
    secondaryDescription: 'The design features reclaimed wood ceilings, high-performance windows, and a material palette that marries traditional barn architecture with contemporary comfort and sophistication.',
    role: 'Conceptual Designer, Technical Designer, Sustainability Coordinator',
    company: 'Feldman Architecture',
    hideLink: true,
  },
  {
    id: 6,
    image: villaImage,
    title: 'Villa Lattuga',
    description: 'Tuscan village meets Californian modern outdoor living.',
    fullDescription: 'Villa Lattuga is a unique blend of Tuscan village charm and modern Californian outdoor living. The project focused on creating a serene and inviting space that combines traditional Italian architecture with contemporary design elements, offering a perfect retreat for both relaxation and entertainment.',
    link: 'https://villalattuga.com',
    secondaryImage: villaImage,
    secondaryDescription: 'Stone pathways, terraced gardens, and outdoor entertaining spaces create a seamless transition between interior and exterior, while thoughtful material choices ground the design in both European heritage and West Coast sensibility.',
    role: 'Conceptual Designer, Technical Designer, VR Specialist, Construction Administrator, Sustainability Coordinator',
    company: 'Feldman Architecture',
  },
  {
    id: 7,
    image: salesforceOfficeImage,
    title: 'Salesforce Office',
    description: 'Global finance infused with residential sensibility.',
    fullDescription: 'The Salesforce Office is a modern and functional office space that combines the efficiency of global finance with the comfort and sensibility of a home. The project focused on creating a space that is both productive and inviting, serving as a cultural anchor in San Francisco.',
    link: 'https://salesforceoffice.com',
    links: [
      { text: 'amazingarchitecture.com', url: 'https://amazingarchitecture.com/office-buildings/feldman-architecture-designs-salesforce-tower-office-space-perched-above-the-50th-floor-in-downtown-san-francisco-california' },
      { text: 'archiscene.net', url: 'https://www.archiscene.net/offices/salesforce-tower-office-space-feldman-architecture/' },
    ],
    secondaryImage: salesforceOfficeSecondaryImage,
    secondaryDescription: 'The main circulation was designed to double as both a walking meeting space and a scenic tour of the city. Warm wood tones, textured fabrics, and residential-scale furniture create intimate zones within the larger corporate environment, supporting both focused work and collaborative interaction. A custom brass sculpture combines Arabic and Latin script – gracing the entryway with a personal, narrative touch.',
    role: 'Conceptual Designer, Competition Strategist, Rendering & 3D Modeling Specialist',
    company: 'Feldman Architecture',
  },
  {
    id: 8,
    image: aiCodingImage,
    title: 'AI Toolkit',
    description: 'New tools i\'m experimenting with.',
    fullDescription: 'I\'ve been expanding my AI toolkit to increase my output speed by an order of magnitude while maintaining rigor in my craft. I believe every project demands a tailored solution, and when used thoughtfully, AI becomes a powerful execution partner, enabling fresh thinking, faster iteration, and a more agile design process.',
    link: 'https://aiassistedcoding.com',
    secondaryImage: aiCodingDiagramImage,
    tertiaryImage: aiCodingSecondaryImage,
    secondaryDescription: 'My workflows are supplemented with ideation and image-generation tools like ideamap.ai, florafauna.ai, and Figma Make, alongside coding tools such as Figma MCP, Cursor, Github and various UI libraries. This enables me to dedicate more time to design research, strategy and exploration, building stronger design identities and richer experiences.',
    role: 'New tools i\'m experimenting with',
    hideLink: true,
  },
  {
    id: 1,
    image: unityPrepImage,
    title: 'Unity Prep',
    description: 'Making a school\'s identity shine.',
    fullDescription: 'Unity Prep is a tuition-free public charter middle & high school that empowers students as scholars and citizens so they may lead fulfilling academic, personal, and professional lives. I performed a research-driven website redesign, focused on clarifying Unity Prep\'s story.',
    link: 'https://unityprep.org',
    secondaryImage: unityPrepSecondaryImage,
    secondaryDescription: 'Working within an existing design system, I led qualitative and quantitative research to refine Unity\'s verbal identity, restructure the site\'s information architecture, and strengthen information scent—making what sets Unity apart immediately clear to prospective families.',
    role: 'Qualitative & Quantitative Researcher, Branding Strategist, Information Architect',
    company: 'Contract Role',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN1bWUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2NDE3OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Resume.io',
    description: 'Bringing simplicity to a feature-rich platform.',
    fullDescription: 'Resume.io is an online platform that helps users create professional resumes with ease. The design strategy focused on simplifying complex features while maintaining powerful functionality for job seekers.',
    link: 'https://resume.io',
    secondaryImage: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN1bWUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2NDE3OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    secondaryDescription: 'Working closely with users and stakeholders, we streamlined the interface and improved the information architecture to make resume building intuitive and accessible.',
    role: 'Qualitative & Quantitative Researcher, Workshop Facilitator, Design Strategist',
    hideLink: true,
  },
];

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [textParallaxOffset, setTextParallaxOffset] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of viewport
      // Range: -1 to 1
      const xPercent = (e.clientX / window.innerWidth) * 2 - 1;
      const yPercent = (e.clientY / window.innerHeight) * 2 - 1;

      setMousePosition({ x: xPercent, y: yPercent });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Move the image in the opposite direction of mouse movement with smooth animation
    // Scale factor controls how much the image moves
    const moveScale = 20;
    const targetX = -mousePosition.x * moveScale;
    const targetY = -mousePosition.y * moveScale;
    
    // Smooth transition using requestAnimationFrame
    let animationFrame: number;
    const animate = () => {
      setParallaxOffset(prev => {
        const dx = (targetX - prev.x) * 0.1;
        const dy = (targetY - prev.y) * 0.1;
        
        if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
          animationFrame = requestAnimationFrame(animate);
          return { x: prev.x + dx, y: prev.y + dy };
        }
        return { x: targetX, y: targetY };
      });
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  useEffect(() => {
    // Move the text in the opposite direction of mouse movement with smooth animation
    // Scale factor controls how much the text moves
    const moveScale = 10;
    const targetY = -mousePosition.y * moveScale;
    
    // Smooth transition using requestAnimationFrame
    let animationFrame: number;
    const animate = () => {
      setTextParallaxOffset(prev => {
        const dy = (targetY - prev) * 0.1;
        
        if (Math.abs(dy) > 0.01) {
          animationFrame = requestAnimationFrame(animate);
          return prev + dy;
        }
        return targetY;
      });
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  // Calculate opacity for landing section based on scroll
  const landingOpacity = Math.max(0, 1 - scrollY / 150);
  
  // Calculate vertical clip for image based on scroll (shrinks from top and bottom)
  const clipPercent = Math.min(50, (scrollY / window.innerHeight) * 50);

  const handleEnterClick = () => {
    const startTime = performance.now();
    const duration = 2000; // 2 seconds (twice as slow as default smooth)
    const startY = window.scrollY;
    const targetY = window.innerHeight;
    const distance = targetY - startY;

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeInOutCubic = (t: number) => 
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
  };

  // If a project is selected, show project detail page
  if (selectedProject) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FDFDFB' }}>
        {/* Hero Image - Full Bleed */}
        <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden bg-gray-100">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-full object-cover object-[left_top] md:object-center"
          />
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-8 md:px-32 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={handleBackToPortfolio}
              className="mb-8 text-black underline" 
              style={{ fontSize: '16px', textUnderlineOffset: '4px' }}
            >
              ← Back
            </button>

            {/* Project Title */}
            <h1 className="mb-2 text-[32px] md:text-[48px]" style={{ fontWeight: 600, letterSpacing: '0em' }}>
              {selectedProject.title}
            </h1>

            {/* Project Role */}
            <p className="mb-2 text-gray-400 text-[14px] md:text-[16px]" style={{ lineHeight: 1.4 }}>
              {selectedProject.role}
            </p>

            {/* Project Company */}
            {selectedProject.company && (
              <p className="mb-6 text-gray-400 text-[14px] md:text-[16px] italic" style={{ lineHeight: 1.4 }}>
                {selectedProject.company}
              </p>
            )}
            {!selectedProject.company && <div className="mb-6" />}

            {/* Project Description */}
            <p className="mb-8 text-black text-[18px] md:text-[20px]" style={{ lineHeight: 1.6 }}>
              {selectedProject.fullDescription}
            </p>

            {/* Project Links */}
            {!selectedProject.hideLink && (
              <>
                {selectedProject.links && selectedProject.links.length > 0 ? (
                  <div className="mb-16 flex flex-col gap-2">
                    {selectedProject.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-black underline"
                        style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '0.05em', textUnderlineOffset: '4px' }}
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-16 text-black underline"
                    style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '0.05em', textUnderlineOffset: '4px' }}
                  >
                    {selectedProject.link.replace('https://', '')}
                  </a>
                )}
              </>
            )}

            {/* Secondary Image - Centered and matching text width */}
            <div className="w-full overflow-hidden bg-gray-100 mb-16 mx-auto">
              <img
                src={selectedProject.secondaryImage}
                alt={`${selectedProject.title} detail`}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Secondary Description - Matching first paragraph style */}
            {selectedProject.secondaryDescription && (
              <p className="text-black text-[18px] md:text-[20px] mb-16" style={{ lineHeight: 1.6 }}>
                {selectedProject.secondaryDescription}
              </p>
            )}

            {/* Tertiary Image - If exists, show below secondary description */}
            {selectedProject.tertiaryImage && (
              <div className="w-full overflow-hidden bg-gray-100 mb-16 mx-auto">
                <img
                  src={selectedProject.tertiaryImage}
                  alt={`${selectedProject.title} additional detail`}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="pb-12 md:pb-24 flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-8">
          <a 
            href="https://www.linkedin.com/in/liza-karimova/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block w-auto"
          >
            <span className="block px-6 py-2 text-black relative z-10 underline" style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.1em', textUnderlineOffset: '4px' }}>
              LinkedIn
            </span>
            
            {/* SVG Border - visible on mobile, animated on desktop */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ overflow: 'visible' }}
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="black"
                strokeWidth="1"
                pathLength="400"
                className="md:[stroke-dasharray:400] md:[stroke-dashoffset:400] md:group-hover:[stroke-dashoffset:0] md:transition-[stroke-dashoffset] md:duration-[1500ms] md:ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </svg>
          </a>

          <a 
            href="mailto:lkarimova.design@gmail.com"
            className="relative group inline-block w-auto"
          >
            <span className="block px-6 py-2 text-black relative z-10 underline" style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.1em', textUnderlineOffset: '4px' }}>
              Email
            </span>
            
            {/* SVG Border - visible on mobile, animated on desktop */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ overflow: 'visible' }}
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="black"
                strokeWidth="1"
                pathLength="400"
                className="md:[stroke-dasharray:400] md:[stroke-dashoffset:400] md:group-hover:[stroke-dashoffset:0] md:transition-[stroke-dashoffset] md:duration-[1500ms] md:ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </svg>
          </a>
        </footer>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* SVG filter for edge distortion */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="distortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Landing page with parallax background - Fixed position */}
      <div className="relative w-full h-screen overflow-hidden">
        <div 
          className="fixed inset-0"
          style={{ 
            pointerEvents: scrollY > 100 ? 'none' : 'auto'
          }}
        >
          {/* Background container with vertical clip */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(${clipPercent}% 0 ${clipPercent}% 0)`,
            }}
          >
            {/* Animated background image */}
            <div
              className="absolute inset-0"
              style={{
                transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  transform: 'scale(1.15)',
                  transformOrigin: 'center',
                }}
              />
            </div>

            {/* Radial blur mask - blurs only edges */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backdropFilter: 'blur(4px)',
                maskImage: `
                  linear-gradient(to right, black 0%, transparent 8%, transparent 92%, black 100%),
                  linear-gradient(to bottom, black 0%, transparent 8%, transparent 92%, black 100%)
                `,
                WebkitMaskImage: `
                  linear-gradient(to right, black 0%, transparent 8%, transparent 92%, black 100%),
                  linear-gradient(to bottom, black 0%, transparent 8%, transparent 92%, black 100%)
                `,
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            />

            {/* Edge distortion layer using SVG filter */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backdropFilter: 'blur(1px)',
                filter: 'url(#distortion)',
                maskImage: `
                  linear-gradient(to right, black 0%, transparent 8%, transparent 92%, black 100%),
                  linear-gradient(to bottom, black 0%, transparent 8%, transparent 92%, black 100%)
                `,
                WebkitMaskImage: `
                  linear-gradient(to right, black 0%, transparent 8%, transparent 92%, black 100%),
                  linear-gradient(to bottom, black 0%, transparent 8%, transparent 92%, black 100%)
                `,
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            />

            {/* Shiny overlay from left side */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.25) 0%,
                    rgba(255, 255, 255, 0.1) 15%,
                    rgba(255, 255, 255, 0.05) 30%,
                    transparent 50%
                  )
                `,
              }}
            />
            {/* Shiny overlay from left side */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.25) 0%,
                    rgba(255, 255, 255, 0.1) 15%,
                    rgba(255, 255, 255, 0.05) 30%,
                    transparent 50%
                  )
                `,
              }}
            />

            {/* 10% white overlay */}
            <div 
              className="absolute inset-0 pointer-events-none bg-white"
              style={{ opacity: 0.10 }}
            />
          </div>

          {/* Content area - with text fade */}
          <div 
            className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-16 gap-16"
            style={{ opacity: landingOpacity }}
          >
            {/* Title */}
            <h1 className="text-white text-center max-w-4xl px-4 text-[32px] md:text-[64px]" style={{ fontWeight: 600, letterSpacing: '0em', lineHeight: 1.4 }}>
              Liza Karimova is a full stack designer & licensed architect building digital and physical experiences.
            </h1>

            {/* Enter Button */}
            <button
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleEnterClick}
            >
              <span className="block px-12 py-4 text-white relative z-10 underline text-[16px] md:text-[24px]" style={{ fontWeight: 500, letterSpacing: '0.1em', textUnderlineOffset: '8px' }}>
                Enter
              </span>
              
              {/* SVG Border Animation - visible on mobile, animated on desktop */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ overflow: 'visible' }}
              >
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="md:[stroke-dasharray:400] md:[stroke-dashoffset:400] md:group-hover:[stroke-dashoffset:0] md:transition-[stroke-dashoffset] md:duration-[1500ms] md:ease-[cubic-bezier(0.4,0,0.2,1)]"
                  pathLength="400"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Grid Section - Below landing section */}
      <div className="relative min-h-screen" style={{ backgroundColor: '#FDFDFB' }}>
        <div className="container mx-auto px-8 md:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Featured Projects Heading */}
            <div className="mb-12 md:mb-24">
              <h2 
                className="mb-6 text-[32px] md:text-[64px] relative inline-block"
                style={{ 
                  fontWeight: 600,
                  letterSpacing: '0em',
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: `center ${scrollY * 0.2}px`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                Featured Projects
              </h2>
              <div className="w-full h-px bg-black"></div>
            </div>
            
            {/* Asymmetrical Grid - 3 columns on desktop, 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-20 md:gap-x-16 mb-12 md:mb-24">
              {/* Row 1 */}
              <div key={portfolioProjects[0].id} className="col-span-1 md:col-span-2 group cursor-pointer" onClick={() => handleProjectClick(portfolioProjects[0])}>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={portfolioProjects[0].image}
                    alt={portfolioProjects[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[24px] md:text-[28px]" style={{ fontWeight: 600 }}>
                    {portfolioProjects[0].title}
                  </h2>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {portfolioProjects[0].description}
                  </p>
                </div>
              </div>

              <div key={portfolioProjects[1].id} className="col-span-1 group cursor-pointer" onClick={() => handleProjectClick(portfolioProjects[1])}>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={portfolioProjects[1].image}
                    alt={portfolioProjects[1].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[24px] md:text-[28px]" style={{ fontWeight: 600 }}>
                    {portfolioProjects[1].title}
                  </h2>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {portfolioProjects[1].description}
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div key={portfolioProjects[2].id} className="col-span-1 group cursor-pointer" onClick={() => handleProjectClick(portfolioProjects[2])}>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={portfolioProjects[2].image}
                    alt={portfolioProjects[2].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[24px] md:text-[28px]" style={{ fontWeight: 600 }}>
                    {portfolioProjects[2].title}
                  </h2>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {portfolioProjects[2].description}
                  </p>
                </div>
              </div>

              <div key={portfolioProjects[3].id} className="col-span-1 md:col-span-2 group cursor-pointer" onClick={() => handleProjectClick(portfolioProjects[3])}>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={portfolioProjects[3].image}
                    alt={portfolioProjects[3].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[24px] md:text-[28px]" style={{ fontWeight: 600 }}>
                    {portfolioProjects[3].title}
                  </h2>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {portfolioProjects[3].description}
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div key={portfolioProjects[4].id} className="col-span-1 md:col-span-2 group cursor-pointer" onClick={() => handleProjectClick(portfolioProjects[4])}>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={portfolioProjects[4].image}
                    alt={portfolioProjects[4].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[24px] md:text-[28px]" style={{ fontWeight: 600 }}>
                    {portfolioProjects[4].title}
                  </h2>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {portfolioProjects[4].description}
                  </p>
                </div>
              </div>

              <div key={portfolioProjects[5].id} className="col-span-1 group cursor-pointer" onClick={() => handleProjectClick(portfolioProjects[5])}>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={portfolioProjects[5].image}
                    alt={portfolioProjects[5].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[24px] md:text-[28px]" style={{ fontWeight: 600 }}>
                    {portfolioProjects[5].title}
                  </h2>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {portfolioProjects[5].description}
                  </p>
                </div>
              </div>

              <div key={portfolioProjects[6].id} className="col-span-1 group cursor-pointer" onClick={() => handleProjectClick(portfolioProjects[6])}>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={portfolioProjects[6].image}
                    alt={portfolioProjects[6].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[24px] md:text-[28px]" style={{ fontWeight: 600 }}>
                    {portfolioProjects[6].title}
                  </h2>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {portfolioProjects[6].description}
                  </p>
                </div>
              </div>

              <div key={portfolioProjects[7].id} className="col-span-1 md:col-span-2 group cursor-pointer" onClick={() => handleProjectClick(portfolioProjects[7])}>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={portfolioProjects[7].image}
                    alt={portfolioProjects[7].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[24px] md:text-[28px]" style={{ fontWeight: 600 }}>
                    {portfolioProjects[7].title}
                  </h2>
                  <p className="text-gray-600" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                    {portfolioProjects[7].description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Line below grid */}
            <div className="w-full h-px bg-black mb-12 md:mb-24"></div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="container mx-auto px-8 md:px-32 mb-12 md:mb-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logoImage} alt="LK Logo" className="w-32 h-auto" />
            </div>
            
            {/* Bio Text */}
            <div className="flex-1">
              <p className="text-black text-[16px] md:text-[18px] text-center md:text-left" style={{ lineHeight: 1.6 }}>
                Liza Karimova is a Licensed building Architect, Full Stack Designer, and AI-assisted Developer. She has built bespoke architectural projects for some of the most prominent tech leaders, wine makers, and investment funds of our time. She strategized software and web solutions for startups and established companies across many industries. Liza holds an M.S. degree in Human-Centered Design and a B.A. degree in Architecture.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="pb-12 md:pb-24 flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-8">
          <a 
            href="https://www.linkedin.com/in/liza-karimova/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block w-auto"
          >
            <span className="block px-6 py-2 text-black relative z-10 underline" style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.1em', textUnderlineOffset: '4px' }}>
              LinkedIn
            </span>
            
            {/* SVG Border - visible on mobile, animated on desktop */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ overflow: 'visible' }}
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="black"
                strokeWidth="1"
                pathLength="400"
                className="md:[stroke-dasharray:400] md:[stroke-dashoffset:400] md:group-hover:[stroke-dashoffset:0] md:transition-[stroke-dashoffset] md:duration-[1500ms] md:ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </svg>
          </a>

          <a 
            href="mailto:lkarimova.design@gmail.com"
            className="relative group inline-block w-auto"
          >
            <span className="block px-6 py-2 text-black relative z-10 underline" style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.1em', textUnderlineOffset: '4px' }}>
              Email
            </span>
            
            {/* SVG Border - visible on mobile, animated on desktop */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ overflow: 'visible' }}
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="black"
                strokeWidth="1"
                pathLength="400"
                className="md:[stroke-dasharray:400] md:[stroke-dashoffset:400] md:group-hover:[stroke-dashoffset:0] md:transition-[stroke-dashoffset] md:duration-[1500ms] md:ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </svg>
          </a>
        </footer>
      </div>
    </div>
  );
}