export interface Hero {
  id: number;
  name: string;
  power?: string
}

export interface AddHeroDto {
  name: string;
  power?: string
}
