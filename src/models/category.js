import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String },
  Description: { type: String },

});

export default mongoose.model('Category', categorySchema);