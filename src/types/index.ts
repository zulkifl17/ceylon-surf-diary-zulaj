export interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  colorSrc: string;
}

export interface SurfStory {
  id: number;
  image: string;
  colorImage: string;
  title: string;
  description: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
