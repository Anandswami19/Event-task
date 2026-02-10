const pool = require("../config/db");
const { createObjectCsvWriter } = require("csv-writer");

exports.bookEvent = async (req, res) => {
  const eventId = req.params.id;
  const userId = req.user.id;

  const [events] = await pool.query("SELECT * FROM events WHERE id=?", [eventId]);
  const event = events[0];

  if (!event || event.availableSeats <= 0)
    return res.status(400).json({ message: "No seats available" });

  await pool.query("INSERT INTO bookings (user_id,event_id) VALUES (?,?)", [userId, eventId]);
  await pool.query("UPDATE events SET availableSeats = availableSeats - 1 WHERE id=?", [eventId]);

  res.json({ message: "Booking successful" });
};

exports.exportBookings = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT bookings.id, users.name, events.name AS event_name FROM bookings JOIN users ON bookings.user_id=users.id JOIN events ON bookings.event_id=events.id"
  );

  const csvWriter = createObjectCsvWriter({
    path: "bookings.csv",
    header: [
      { id: "id", title: "Booking ID" },
      { id: "name", title: "User" },
      { id: "event_name", title: "Event" }
    ]
  });

  await csvWriter.writeRecords(rows);
  res.download("bookings.csv");
};
