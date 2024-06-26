export type ProductProps = {
  id: string,
  title: string,
  image: string,
  price: string,
  stars: number,
  type?: string | 'piece',
  brand: string | 'coffee-grounds' | 'starbucks' | 'highlands',
  isHot: boolean
}