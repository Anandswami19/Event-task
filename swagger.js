const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const specs = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "Event Booking API", version: "1.0.0" }
  },
  apis: ["./routes/*.js"],
});

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
