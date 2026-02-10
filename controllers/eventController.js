const pool = require("../config/db");

exports.createEvent = async (req, res) => {
  const { name, date, capacity } = req.body;

  await pool.query(
    "INSERT INTO events (name,date,capacity,availableSeats) VALUES (?,?,?,?)",
    [name, date, capacity, capacity]
  );

  res.status(201).json({ message: "Event created" });
};

exports.getEvents = async (req, res) => {
  const { start, end, page = 1, limit = 10 } = req.query;

  let query = "SELECT * FROM events WHERE 1=1";
  const params = [];

  if (start && end) {
    query += " AND date BETWEEN ? AND ?";
    params.push(start, end);
  }

  query += " LIMIT ? OFFSET ?";
  params.push(parseInt(limit), (page - 1) * limit);

  const [events] = await pool.query(query, params);
  res.json(events);
};

exports.updateEvent = async (req, res) => {
  const { name, date, capacity } = req.body;

  await pool.query(
    "UPDATE events SET name=?, date=?, capacity=? WHERE id=?",
    [name, date, capacity, req.params.id]
  );

  res.json({ message: "Event updated" });
};

exports.deleteEvent = async (req, res) => {
  await pool.query("DELETE FROM events WHERE id=?", [req.params.id]);
  res.json({ message: "Event deleted" });
};
