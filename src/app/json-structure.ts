export interface Picture{
  small: string;
  large: string;
}

export interface Flower{
  id: string;
  label: string;
  price: number;
  description: string;
  picture: Picture;
  wiki: string;
}

export interface Catalog{
  flowers: Flower[];
}
