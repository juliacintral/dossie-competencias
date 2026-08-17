export type Categoria = "Técnica" | "Comportamental" | "Ferramenta" | "Idioma";
export type Nivel = "Básico" | "Intermediário" | "Avançado" | "Especialista";
export type Senioridade = "Estagiário" | "Júnior" | "Pleno" | "Senior" | "Especialista" | "Liderança";
export interface Competencia { nome: string; categoria: Categoria; nivel: Nivel; nivel_numerico: number; senioridade: Senioridade; evidencia: string; }
export interface DossieData { nome: string; titulo_profissional: string; resumo: string; senioridade_geral: Senioridade; competencias: Competencia[]; }
export interface AnalyzeRequestBody { nome: string; cargoAlvo: string; bio: string; trajetoria: string; }
