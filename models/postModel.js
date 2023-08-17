import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
      author: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      important: {
        type: Boolean,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
const Post = mongoose.model('Post', postSchema);

export default Post;