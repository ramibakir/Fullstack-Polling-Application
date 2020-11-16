import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Type in name'],
      minlength: ['3', 'Name must be more than 3 characters'],
      maxlength: ['20', 'Name must be under 10 characters'],
    },
    email: {
      type: String,
      required: [true, 'Type in email address'],
      unique: true,
      validate: [validator.isEmail, 'Email address is not valid'],
    },
    password: {
      type: String,
      required: [true, 'Type in password'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.virtual('polls', {
  ref: 'Poll',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
