const router = require("express").Router();
const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/rateLimiter");
const eventController = require("../controllers/eventController");

router.post("/", verifyToken, isAdmin, eventController.createEvent);
router.get("/", eventController.getEvents);
router.put("/:id", verifyToken, isAdmin, eventController.updateEvent);
router.delete("/:id", verifyToken, isAdmin, eventController.deleteEvent);

module.exports = router;
