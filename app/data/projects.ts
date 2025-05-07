export interface Project {
  id: string;
  name: string;
  type: 'residential' | 'commercial';
  power: string;
  city: string;
  images: string[];
}

export const projects: Project[] = [
  // Projetos Residenciais
  {
    id: 'res-1',
    name: 'Projeto Residencial',
    type: 'residential',
    power: '5.5 kWp',
    city: 'Belo Horizonte, MG',
    images: [
      '/usinas/residencial/1/1.jpg',
      '/usinas/residencial/1/2.jpg',
    ],
  },
  {
    id: 'res-2',
    name: 'Projeto Residencial',
    type: 'residential',
    power: '7.2 kWp',
    city: 'Contagem, MG',
    images: [
      '/usinas/residencial/2/1.jpg',
    ],
  },
  {
    id: 'res-3',
    name: 'Projeto Residencial',
    type: 'residential',
    power: '6.8 kWp',
    city: 'Nova Lima, MG',
    images: [
      '/usinas/residencial/3/1.jpg',
      '/usinas/residencial/3/2.jpg',
    ],
  },

  // Projetos Empresariais
  {
    id: 'com-1',
    name: 'Supermercado Super Sô',
    type: 'commercial',
    power: '45 kWp',
    city: 'Abaeté, MG',
    images: [
      '/usinas/empresas/super-so/1.jpg',
      '/usinas/empresas/super-so/2.jpg',
      '/usinas/empresas/super-so/3.jpg',
    ],
  },
  {
    id: 'com-2',
    name: 'Hospital São Vicente de Paulo',
    type: 'commercial',
    power: '75 kWp',
    city: 'Abaeté, MG',
    images: [
      '/usinas/empresas/hospital-abaete/1.jpg',
      '/usinas/empresas/hospital-abaete/2.jpg',
      '/usinas/empresas/hospital-abaete/3.jpg',
      '/usinas/empresas/hospital-abaete/4.jpg',
      '/usinas/empresas/hospital-abaete/5.jpg',
      '/usinas/empresas/hospital-abaete/6.jpg',
      '/usinas/empresas/hospital-abaete/7.jpg',
      '/usinas/empresas/hospital-abaete/8.jpg',
    ],
  },
  {
    id: 'com-3',
    name: 'Empresa em Unaí',
    type: 'commercial',
    power: '120 kWp',
    city: 'Unaí, MG',
    images: [
      '/usinas/empresas/unai/1.jpg',
      '/usinas/empresas/unai/2.jpg',
    ],
  },
]; 