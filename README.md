# Eleições 2026 — Remotion

Projeto Remotion em React e TypeScript para um vídeo jornalístico vertical de 30 segundos sobre pesquisas eleitorais para a Presidência do Brasil em 2026.

## Características

- Duração: 30 segundos.
- FPS: 30.
- Total: 900 frames.
- Resolução: 1080x1920, formato vertical 9:16 para tela de celular.
- Composição Remotion: `Eleicao2026`.
- Estilo visual limpo, institucional e inspirado em página de notícia/explicador, adaptado para consumo mobile.
- Sem áudio, voice-over ou trilha sonora.
- Sem imagens binárias, fotos reais, vídeos externos, logos oficiais ou assets remotos.
- Gráficos criados apenas com React, CSS e animações do Remotion.

## Instalação

```bash
npm install
```

## Rodar o Remotion Studio

```bash
npm run dev
```

O Studio abrirá a composição `Eleicao2026`, com as quatro cenas do roteiro em sequência.

## Validar TypeScript

```bash
npm run build
```

## Renderizar o vídeo final

```bash
npm run render
```

O arquivo final será gerado em:

```text
output/final.mp4
```

## Pré-visualização

```bash
npm run preview
```

## Dados e fontes

Os textos, cenas, percentuais e fontes ficam estruturados em:

```text
src/data/scenes.json
```

As fontes exibidas discretamente em todas as cenas são:

```text
Fontes: BBC News Brasil, AtlasIntel/Bloomberg, Quaest, Datafolha, Real Time Big Data.
```

## Observação editorial

O vídeo usa tom neutro e jornalístico. Os números são apresentados como cenários de pesquisa, não como previsão de resultado. A mensagem final reforça que pesquisas são retratos do momento e podem variar conforme campanha, candidaturas, metodologia e margem de erro.

## Automação no GitHub Actions

O workflow `.github/workflows/render-video.yml` executa:

1. checkout;
2. setup do Node.js 20;
3. `npm install`;
4. `npm run build`;
5. `npm run render`;
6. upload do artifact `final.mp4`.

## Scripts auxiliares

- `scripts/render.ts`: renderização programática da composição `Eleicao2026` para `output/final.mp4`.
- `scripts/generate.ts`: placeholder para futura integração com IA/Codex; valida a existência e consistência básica das cenas em `src/data/scenes.json`.
- `scripts/upload.ts`: placeholder seguro para upload futuro; não envia arquivos para nenhum storage.
