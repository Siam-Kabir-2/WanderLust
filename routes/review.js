const express = require("express");
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//reviews route
//post review route
router.post("/", isLoggedIn, validateReview, reviewController.postReview);

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, reviewController.deleteReview);

module.exports = router;
