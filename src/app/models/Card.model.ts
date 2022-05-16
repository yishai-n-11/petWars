export class Card {
  type: string;
  imageUrl: string;
  power: number;
  name: string;
  constructor(name: string, type: string, imageUrl: string, power: number) {
    this.name = name;
    this.type = type;
    this.imageUrl = imageUrl;
    this.power = power;
  }
}
