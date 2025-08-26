import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    restaurantName: String,
    ownerName: String,
    contactNumber: String,
    email: String,
    address: String,
    gstNumber: String,
    restaurantImage: String,
    panCard: String,
    fssaiLicense: String,
    bankDetails: String,
    menuImage: String,
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;