import * as migration_20260926_021200 from './20260926_021200';

export const migrations = [
  {
    up: migration_20260926_021200.up,
    down: migration_20260926_021200.down,
    name: '20260926_021200'
  },
];
