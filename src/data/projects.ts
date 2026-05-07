export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  cover: string;
  tags: string[];
  description: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: '3d-character-animation',
    title: '3D Character Animation',
    category: '3D Animation',
    year: '2024',
    client: 'Personal Project',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/e20bbb239841833.Y3JvcCwxMTM2LDg4OSwwLDA.png',
    tags: ['Maya', 'Rigging', 'Animation'],
    description:
      'A short character performance piece exploring weight, timing, and expressive acting. Modeled, rigged, and animated end-to-end.',
    link: 'https://www.behance.net/gallery/239841833/3D-Character-Animation',
  },
  {
    id: 'cartoon-character-modelling',
    title: 'Cartoon Character Modelling',
    category: '3D Modeling',
    year: '2024',
    client: 'Personal Project',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/0671dd239733809.Y3JvcCw4NjIsNjc1LDE2OCww.png',
    tags: ['Character', 'Sculpt', 'Stylized'],
    description:
      'Stylized cartoon character built from concept to final model. Clean topology and friendly proportions for animation-ready use.',
    link: 'https://www.behance.net/gallery/239733809/Cartoon-Character-Modelling',
  },
  {
    id: '3d-animation-showreel',
    title: '3D Animation Showreel',
    category: '3D Animation',
    year: '2024',
    client: 'Self-Initiated',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/64174e239733481.Y3JvcCwxMzc5LDEwNzksMjY5LDA.png',
    tags: ['Showreel', 'Animation', 'Compositing'],
    description:
      'A curated showreel pulling together character, vehicle, and environment animation work into a single tightly-edited piece.',
    link: 'https://www.behance.net/gallery/239733481/3D-ANIMATION-SHOWREEL',
  },
  {
    id: 'brochure-design',
    title: 'Brochure Design',
    category: 'Editorial Design',
    year: '2024',
    client: 'Jain Group',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/5e3770188097776.Y3JvcCwyOTQwLDIzMDAsMjU0LDA.png',
    tags: ['Editorial', 'Print', 'Layout'],
    description:
      'Multi-page brochure design balancing dense information with calm, readable layout. Typography-led with a confident grid system.',
    link: 'https://www.behance.net/gallery/188097776/Brochure-Design',
  },
  {
    id: 'typeface-poster',
    title: 'Typeface Poster',
    category: 'Poster Design',
    year: '2024',
    client: 'Self-Initiated',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/5992f8187156453.Y3JvcCwzNjY5LDI4NzAsMzE3LDA.png',
    tags: ['Typography', 'Poster', 'Print'],
    description:
      'A typography-driven poster exploring rhythm, hierarchy, and the expressive limits of a single typeface across one composition.',
    link: 'https://www.behance.net/gallery/187156453/TYPEFACE-POSTER',
  },
  {
    id: 'vfx-showreel',
    title: 'VFX Showreel',
    category: 'VFX',
    year: '2024',
    client: 'Self-Initiated',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/d00edd169229067.Y3JvcCwxMjk1LDEwMTMsMzEwLDA.png',
    tags: ['VFX', 'Compositing', 'Showreel'],
    description:
      'Visual effects showreel covering tracking, integration, and compositing across short live-action and CG sequences.',
    link: 'https://www.behance.net/gallery/169229067/VFX-Showreel',
  },
  {
    id: '3d-showreel',
    title: '3D Showreel',
    category: '3D Modeling',
    year: '2024',
    client: 'Self-Initiated',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/55ada9165265535.Y3JvcCw4NjAsNjczLDUxNywyMDQ.png',
    tags: ['3D', 'Modeling', 'Showreel'],
    description:
      'A reel of selected 3D modeling work — vehicles, props, and environments — presented with consistent lighting and framing.',
    link: 'https://www.behance.net/gallery/165265535/3D-Showreel',
  },
  {
    id: '3d-vintage-car',
    title: '3D Vintage Car Model',
    category: '3D Modeling',
    year: '2023',
    client: 'Personal Project',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/6242d9163538841.Y3JvcCwxMzgwLDEwODAsMjg3LDA.png',
    tags: ['Hard Surface', 'Modeling', 'Render'],
    description:
      'Detailed hard-surface model of a vintage automobile. Studied period reference, then built panel-by-panel for accurate proportions.',
    link: 'https://www.behance.net/gallery/163538841/3D-Vintage-Car-Model',
  },
  {
    id: 'fantasy-sword',
    title: 'Fantasy Sword',
    category: '3D Modeling',
    year: '2023',
    client: 'Personal Project',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/b94faa141246801.Y3JvcCwxMzgwLDEwODAsMTc0LDA.png',
    tags: ['Prop', 'Sculpt', 'Texturing'],
    description:
      'Stylized fantasy weapon with sculpted ornamental detailing, hand-painted textures, and dramatic studio lighting.',
    link: 'https://www.behance.net/gallery/141246801/Fantasy-Sword',
  },
  {
    id: '3d-vehicle',
    title: '3D Vehicle Model',
    category: '3D Modeling',
    year: '2023',
    client: 'Personal Project',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/83edef140643021.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png',
    tags: ['Vehicle', 'Hard Surface', '3D'],
    description:
      'Production-friendly vehicle model with clean topology, ready for further texturing and animation pipeline use.',
    link: 'https://www.behance.net/gallery/140643021/3D-Vechile-Model',
  },
  {
    id: 'interior-isometric',
    title: 'Interior Isometric Model',
    category: 'Isometric',
    year: '2023',
    client: 'Personal Project',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/329aa2140642757.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png',
    tags: ['Isometric', 'Interior', 'Render'],
    description:
      'Cozy isometric interior diorama — furniture, lighting, and small props composed into a balanced, illustrative scene.',
    link: 'https://www.behance.net/gallery/140642757/Interior-Isometric-Model',
  },
  {
    id: 'exterior-isometric',
    title: 'Exterior Isometric Model',
    category: 'Isometric',
    year: '2023',
    client: 'Personal Project',
    cover:
      'https://mir-s3-cdn-cf.behance.net/projects/404/f37a9d140642489.Y3JvcCwxMzgwLDEwODAsMzI4LDA.png',
    tags: ['Isometric', 'Architecture', 'Render'],
    description:
      'Exterior isometric scene exploring light, foliage, and architectural detail in a compact, stylized presentation.',
    link: 'https://www.behance.net/gallery/140642489/Exterior-Isometric-Model',
  },
];
