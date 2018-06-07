import mongoose from 'mongoose';

const producSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String },
  category_id: { type: String },
});

export default mongoose.model('Product', producSchema);