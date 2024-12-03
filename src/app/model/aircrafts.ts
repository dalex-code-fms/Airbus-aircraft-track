import { AicraftParts } from './aicraft-parts';

export class Aircrafts {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public phase: string,
    public equipments: AicraftParts[],
    public image: string
  ) {}
}
