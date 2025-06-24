
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("Connected To DB!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://siam:MdSiamKabir1@cluster0.2iekedl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68588099104722f532c709ce",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data Was Initialized!");
};

initDB();
