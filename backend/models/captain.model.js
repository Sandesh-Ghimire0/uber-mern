import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, "First name must be at least 3 characters long"],
        },
        lastname: {
            type: String,
            minLength: [3, "Last name must be at least 3 characters long"],
        },
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false, // when captain information is fetched, password will not be included by default
    },
    socketId: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    vehicle: {
        color: {
            type: String,
            required: true,
        },
        plate: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"],
        },
        vehicleType: {
            type: String,
            enum: ["car", "bike", "auto"],
            required: true,
        },
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    },
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    return token;
};

captainSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};

captainSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

const captainModel = mongoose.model("Captain", captainSchema);

export default captainModel;
