export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  descriptionComplete: string;
  image: string;
  category: string;
}

export interface IProductOnOffer {
  id: number;
  productId: number;
  percentage: number;
  endDate: string;
}
