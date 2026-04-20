require("dotenv").config({ quiet: true });
const express = require("express");
const cors = require("cors");
const connectDB = require("../src/Database/db");
const runMigrations = require("../src/autoMigrationRunScript/migrate");
const apiRoutes = require("./routes");

const app = express();
app.use(cors());
app.options(/.*/, cors());

app.use(express.json());
app.use("/api", apiRoutes);


const startServer = async () => {
  try {
  
    await connectDB();
    await runMigrations();

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("Error Encountered while server start:", error);
  }
};

startServer();