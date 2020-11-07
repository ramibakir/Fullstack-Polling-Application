import mongoose from 'mongoose';
import slugify from 'slugify';

const {Schema} = mongoose;

const PollSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            min: ['3', 'Poll name must be more than 3 characters'],
            max: ['100', 'Poll name must be under 100 characters'],
        },
        slug: String,
        description: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

PollSchema.pre('save', function (next) {
    this.slug = slugify(this.name, {lower: true});
    next();
});

export default mongoose.model('Poll', PollSchema);