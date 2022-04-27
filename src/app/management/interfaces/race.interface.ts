import { RiderInterface } from "./rider.interface";

export interface RaceInterface{
  url: string;
  nombre: string;
  fecha: string;
  corredores: RiderInterface[];
  comments: string;
}
