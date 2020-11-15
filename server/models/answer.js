import mongoose from 'mongoose';

const { Schema } = mongoose;

const AnswerSchema = new Schema({
  answerText: {
    type: String,
    minlength: ['3', 'Answer must be more than 3 characters'],
    maxlength: ['10', 'Answer must be under 10 characters'],
  },
});

AnswerSchema.virtual('polls', {
  ref: 'Poll',
  localField: '_id',
  foreignField: 'answer',
  justOne: false,
});

const Answer = mongoose.model('Answer', AnswerSchema);

export default Answer;
