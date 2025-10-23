export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
