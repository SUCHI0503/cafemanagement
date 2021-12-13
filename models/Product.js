import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    username: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    slug: { type: String, required: false, unique: true },
    status: { type: Boolean, required: false },
    isFeatured: { type: Boolean, required: false },
    isDeleted: { type: Boolean, required: false },
    type: { type: String, required: false },
    digitalAccessType: { type: String, required: false },
    categories: { type: Array, required: false },
    features: { type: Array, required: false },
    image: { type: Array, required: false },
    pricing: { type: Object, required: false },
    options: { type: Object, required: false },
    reviews: { type: Array, required: false },
    rating: { type: Number, required: false, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product =mongoose.models.Product || mongoose.model('Product', productSchema, "products");
export default Product;

