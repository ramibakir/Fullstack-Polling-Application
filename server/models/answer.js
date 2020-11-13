import mongoose from 'mongoose';

const { Schema } = mongoose;

const AnswerSchema = new Schema({
  answerDescription: {
    type: String,
    minlength: ['3', 'Name must be more than 3 characters'],
    maxlength: ['10', 'Name must be under 10 characters'],
  },
});

AnswerSchema.virtual('answers', {
  ref: 'Poll',
  localField: '_id',
  foreignField: 'answer',
  justOne: false,
});

const Answer = mongoose.model('Answer', AnswerSchema);

export default Answer;
