export type Product = {
  id: number,
  imageUrl: string,
  name: string,
  price: number
}

export type Category = {
  title: string,
  items: Product[]
}

export type CategoriesState = {
  isLoading: boolean,
  categories: Category[]
}