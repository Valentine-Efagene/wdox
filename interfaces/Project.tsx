export interface IProject {
  _id: string | null
  name: string | null
  imageUrl: string | null
  about: string | null
  collection_slug: string | null
  contract_address: string | null
  health: string | number
  total_nfts: number
  website: string | null
  twitter: string
  discord: string
  medium: string | 'No account'
}

export interface IHydratedProject {
  _id: string | null
  name: string | null
  imageUrl: string | null
  about: string | null
  collection_slug: string | null
  contract_address: string | null
  health: string | number
  total_nfts: number
  website: string | null
  twitter: string | null
  discord: string | null
  medium: string | 'No account'

  opensea: { floor_price: number }
  looksrare: { floorPrice: number }
}
