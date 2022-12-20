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
  error: string | undefined
}

export type CategoriesMap = {
  [key: string]: Product[]
}