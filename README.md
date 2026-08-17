# Dossiê de Competências — Gerador para Recrutadores

Aplicação web que transforma a trajetória profissional em um dossiê de competências em PDF. A IA identifica competências técnicas, comportamentais, ferramentas e idiomas, atribuindo nível (Básico → Especialista), nota 1–5, senioridade e evidências.

## Stack
- Next.js 14 + TypeScript
- Tailwind CSS
- Groq API (`llama-3.3-70b-versatile`)
- `@react-pdf/renderer`

## Rodando localmente
```bash
npm install
cp .env.example .env.local
# preencha GROQ_API_KEY
npm run dev
```
Acesse `http://localhost:3000`.

## Deploy
Importe na Vercel e configure `GROQ_API_KEY` e, opcionalmente, `GROQ_MODEL`.

## Aviso
O dossiê é uma ferramenta de apoio e não substitui entrevistas, testes técnicos ou avaliações formais.
