import { AnalyzeRequestBody } from "./types";
export function buildPrompt({ nome, cargoAlvo, bio, trajetoria }: AnalyzeRequestBody) { return `Você é um especialista sênior em People Analytics e Recrutamento & Seleção. Sua tarefa é ler o texto que uma pessoa escreveu sobre si mesma e sobre sua trajetória profissional, e extrair um dossiê estruturado de competências para ser apresentado a recrutadores.

Regras importantes:
- Baseie-se SOMENTE no que está escrito no texto (não invente empresas, números ou fatos).
- Identifique competências técnicas, comportamentais (soft skills), ferramentas e idiomas mencionados ou claramente implícitos no texto.
- Para cada competência, defina nível (Básico, Intermediário, Avançado ou Especialista), nota de 1 a 5, senioridade (Estagiário, Júnior, Pleno, Senior, Especialista ou Liderança) e evidência curta (máx. 20 palavras).
- Defina senioridade geral e resumo profissional objetivo de 2 a 4 frases, em terceira pessoa.
- Gere entre 6 e 14 competências.
- Responda ESTRITAMENTE em JSON válido, sem markdown, seguindo o formato solicitado.

Formato: {"nome":"string","titulo_profissional":"string","resumo":"string","senioridade_geral":"Estagiário|Júnior|Pleno|Senior|Especialista|Liderança","competencias":[{"nome":"string","categoria":"Técnica|Comportamental|Ferramenta|Idioma","nivel":"Básico|Intermediário|Avançado|Especialista","nivel_numerico":1,"senioridade":"Estagiário|Júnior|Pleno|Senior|Especialista|Liderança","evidencia":"string"}]}

Nome: ${nome || "(não informado)"}
Cargo/área alvo: ${cargoAlvo || "(não informado)"}
Sobre a pessoa:\n${bio}\n
Trajetória profissional:\n${trajetoria}`; }
