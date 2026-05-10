import path from 'node:path';
import {mkdir} from 'node:fs/promises';
import {bundle} from '@remotion/bundler';
import {getCompositions, renderMedia} from '@remotion/renderer';

const compositionId = 'Eleicao2026';
const entryPoint = path.resolve(process.cwd(), 'src/index.ts');
const outputLocation = path.resolve(process.cwd(), 'output/final.mp4');

const main = async () => {
  await mkdir(path.dirname(outputLocation), {recursive: true});

  const bundleLocation = await bundle({
    entryPoint,
    webpackOverride: (config) => config,
  });

  const compositions = await getCompositions(bundleLocation);
  const composition = compositions.find((item) => item.id === compositionId);

  if (!composition) {
    throw new Error(`Composition "${compositionId}" não encontrada.`);
  }

  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: 'h264',
    outputLocation,
    inputProps: {},
  });

  console.info(`Vídeo renderizado em: ${outputLocation}`);
};

main().catch((error: unknown) => {
  console.error('Falha ao renderizar o vídeo.');
  console.error(error);
  process.exit(1);
});
