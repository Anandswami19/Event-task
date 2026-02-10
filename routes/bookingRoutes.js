const router = require("express").Router();
const { verifyToken } = require("../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

router.post("/:id", verifyToken, bookingController.bookEvent);
router.get("/export", verifyToken, bookingController.exportBookings);

module.exports = router;
