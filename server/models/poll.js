import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const PollSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
      min: ['3', 'Poll question must be more than 3 characters'],
      max: ['100', 'Poll question must be under 100 characters'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    slug: String,
    answer: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Answer',
        default: 'No answer',
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

PollSchema.pre('save', function (next) {
  this.slug = slugify(this.question, { lower: true });
  next();
});

export default mongoose.model('Poll', PollSchema);
