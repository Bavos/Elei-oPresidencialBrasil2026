import {readFile} from 'node:fs/promises';
import path from 'node:path';

type Scene = {
  id: string;
  startSecond: number;
  endSecond: number;
};

type ScenesFile = {
  title: string;
  durationSeconds: number;
  scenes: Scene[];
};

const scenesPath = path.resolve(process.cwd(), 'src/data/scenes.json');

const main = async () => {
  const raw = await readFile(scenesPath, 'utf-8');
  const data = JSON.parse(raw) as ScenesFile;

  if (!data.title || typeof data.durationSeconds !== 'number') {
    throw new Error('Arquivo scenes.json sem título ou duração válidos.');
  }

  if (!Array.isArray(data.scenes) || data.scenes.length === 0) {
    throw new Error('Arquivo scenes.json não contém cenas.');
  }

  for (const scene of data.scenes) {
    if (!scene.id || scene.endSecond <= scene.startSecond) {
      throw new Error(`Cena inválida encontrada: ${JSON.stringify(scene)}`);
    }
  }

  console.info(`Arquivo validado: ${data.scenes.length} cenas para "${data.title}".`);
};

main().catch((error: unknown) => {
  console.error('Falha ao validar scenes.json.');
  console.error(error);
  process.exit(1);
});
