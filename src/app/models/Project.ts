export interface Project {
  name: string;
  thumbnail: string;
  url: string;
  technologies: { name: string; icon: string }[];
  codeUrl: string;
  description: string;
}
