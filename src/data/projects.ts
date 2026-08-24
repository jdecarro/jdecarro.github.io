export type Project = {
    id: number
    title: string
    category: string
    description: string
    technologies: string[]
    github?: string
    featured?: boolean
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Transcendence',
      category: 'Full-stack web application',
      description:
        'Application web multijoueur avec parties en temps réel, spectateurs, chat, authentification et gestion de profils.',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Socket.IO',
        'Prisma',
        'PostgreSQL',
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'Minishell',
      category: 'Unix shell',
      description:
        'Implémentation en C d’un shell inspiré de Bash avec gestion des processus, pipes, redirections, signaux et variables d’environnement.',
      technologies: ['C', 'Unix', 'Processes', 'Pipes', 'Signals'],
    },
    {
      id: 3,
      title: 'Cub3D',
      category: '3D graphics',
      description:
        'Moteur de rendu 3D basé sur le raycasting, avec gestion des déplacements, collisions, textures et environnement.',
      technologies: ['C', 'Raycasting', 'MiniLibX', 'Algorithms'],
    },
    {
      id: 4,
      title: 'Philosophers',
      category: 'Concurrent programming',
      description:
        'Simulation du problème des philosophes permettant d’explorer la programmation concurrente et la synchronisation.',
      technologies: ['C', 'Threads', 'Mutex', 'Concurrency'],
    },
    {
      id: 5,
      title: 'C++ Modules',
      category: 'Object-oriented programming',
      description:
        'Série de projets consacrés à la programmation orientée objet, aux templates, aux exceptions, à la STL et au polymorphisme.',
      technologies: ['C++', 'OOP', 'STL', 'Templates'],
    },
    {
      id: 6,
      title: 'So_long',
      category: '2D game',
      description:
        'Petit jeu 2D développé en C avec gestion de carte, déplacements, collectibles et rendu graphique.',
      technologies: ['C', 'MiniLibX', 'Algorithms'],
    },
  ]