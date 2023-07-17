export interface Animal {
    id: number;
    name: string;
    type: string;
    families_id: Family;
    gender: string;
    date: Date;
    img_url: string;
    continents_id: Continent;
  }

interface Family {
    id: number;
    name: string;
    img_url: string;
  }
  
  interface Continent {
    id: number;
    name: string;
    img_url: string;
  }