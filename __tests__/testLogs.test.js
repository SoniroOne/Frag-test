const fs = require('fs');
const path = require('path');

function parseLogs(logFile) {
  const logContent = fs.readFileSync(logFile, 'utf8');
  const shots = logContent.match(/Shoot from: '[^']+'/g);
  const hits = logContent.match(/Hit player: '[^']+'/g);
  return { shots, hits };
}

describe('Log Tests', () => {
  const logsFolder = path.join(__dirname, '../logs');
  const logFiles = fs.readdirSync(logsFolder).filter((file) => file.endsWith('.log'));

  logFiles.forEach((logFile) => {
    const filePath = path.join(logsFolder, logFile);
    const { shots, hits } = parseLogs(filePath);

    test(`${logFile} - Shoots equal Hits`, () => {
      console.log(`Shots: ${shots.length}`);
      console.log(`Hits: ${hits.length}`);
      expect(shots.length).toEqual(hits.length);
    });

    test(`${logFile} - Each Hit entity is unique`, () => {
      const hitEntities = hits.map((hit) => hit.match(/Hit player: '([^']+)'/)[1]);
      console.log(`Hit Entities: ${hitEntities}`);
      const uniqueHitEntities = new Set(hitEntities);
      console.log(`Unique Hit Entities: ${[...uniqueHitEntities]}`);
      expect(hitEntities.length).toEqual(uniqueHitEntities.size);
      const uniqueHits = new Set(hits);
      expect(hits.length).toEqual(uniqueHits.size);
    });
  });
});