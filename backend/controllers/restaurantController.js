import Restaurant from "../models/Restaurant.js";

export const registerRestaurant = async (req, res) => {
  try {
    const files = req.files;
    const {
      restaurantName,
      ownerName,
      contactNumber,
      email,
      address,
      gstNumber,
    } = req.body;

    const restaurant = new Restaurant({
      restaurantName,
      ownerName,
      contactNumber,
      email,
      address,
      gstNumber,
      restaurantImage: files.restaurantImage?.[0]?.path || "",
      panCard: files.panCard?.[0]?.path || "",
      fssaiLicense: files.fssaiLicense?.[0]?.path || "",
      bankDetails: files.bankDetails?.[0]?.path || "",
      menuImage: files.menuImage?.[0]?.path || "",
    });

    await restaurant.save();
    res.status(201).json({ message: "Restaurant registered successfully!", id: restaurant._id });
  } catch (err) {
    console.error("Restaurant registration error:", err);
    res.status(500).json({ error: "Registration failed" });
  }
};