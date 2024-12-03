import { AicraftParts } from './aicraft-parts';

export interface Aircrafts {
  id: number,
  name: string,
  type: string,
  phase: string,
  equipments: AicraftParts[],
  image: string
}
