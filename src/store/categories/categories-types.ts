export type Product = {
  id: number,
  imageUrl: string,
  name: string,
  price: number
}

export type Category = {
  title: string,
  order: number,
  items: Product[]
}

export type CategoriesState = {
  isLoading: boolean,
  categories: Category[],
  error: Error | null
}

export type CategoriesMap = {
  [key: string]: Product[]
}