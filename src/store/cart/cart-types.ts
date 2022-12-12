import {Product} from "../categories/categories-types";

export type CartItem = Product & {
  quantity: number
}

export type CartState = {
  items: CartItem[],
  totalQuantity: number,
  isOpen: boolean
}