export interface Article {
  id: string;
  name: string;
  description: string;
  img: string;
  currentPrice: number;
  oldPrice?: number;
}
