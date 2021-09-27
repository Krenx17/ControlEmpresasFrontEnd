export class Product{
  constructor(
    public _id: String,
    public company: String,
    public product: String,
    public provider: String,
    public stock: Number,
    public sold: Number
  ){}
}
