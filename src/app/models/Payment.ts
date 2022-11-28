export interface Payment {
    name: string,
    currency: string,
    amount: number,
    quantity: number,
    imageUrl?: string,
    successUrl?: string,
    cancelUrl?: string
}