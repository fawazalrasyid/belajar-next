interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}

interface CartProduct {
  productId: number;
  quantity: number;
}
