import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    admin: { type: Boolean, default: false },
    FullName: { type: String },
    GraduationYear: { type: String },
    MobileNumber: { type: String },
    Degree: { type: String },
    Branch: { type: String },
    designation:{type:String},
    Company:{type:String},
    WorkExperience: [
      {
        Job: {
          type: String,
          default: null,
        },
        Company: {
          type: String,
          default: null,
        },
        Industry: {
          type: String,
          default: null,
        },
        startEndYear: {
          type: String,
          default: null,
        },
      },
    ],
    bio: {
      type: String,
    },

    password: {
      type: String,
      required: true,
      validate: {
        validator: function (pass) {
          return pass?.length && pass.length >= 5;
        },
        message: "password must be at least 5 characters",
      },
    },
    social: {
      linkedin: {
        type: String,
        default: null,
      },
      instagram: {
        type: String,
        default: null,
      },
      twitter: {
        type: String,
        default: null,
      },
      website: {
        type: String,
        default: null,
      },
    },
    resetToken: {
      type: String,
      required: false,
    },
    resetTokenExpiry: {
      type: Date,
      required: false,
    },
  },

  { timestamps: true }
);

// UserSchema.post("validate", function (user) {
//   user.password = "hashed";
// });
export const User = models?.User || model("User", UserSchema);
