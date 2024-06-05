import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
          },
        points: {
            type: Number,
            default: 0,
          },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema);