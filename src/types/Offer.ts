import { membership, weekdays } from './Base'

export interface Offer {
  price: number,
  hotelId: string,
  weekdays: weekdays[],
  membership: membership
}
