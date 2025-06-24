if (process.env.NODE_ENV != "production") {
  require("dotenv").config({path:"../.env"});
  // console.log(process.env.ATLASDB_URL)
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("Connected To DB!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
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
