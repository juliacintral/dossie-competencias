import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Dossiê de Competências | Gerador para Recrutadores", description: "Descreva sua trajetória profissional e gere um dossiê em PDF com suas competências, níveis e senioridade, pronto para apresentar a recrutadores." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="pt-BR"><body className="min-h-screen text-slate-800">{children}</body></html>; }
