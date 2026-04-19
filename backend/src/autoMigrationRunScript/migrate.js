const { exec } = require("child_process");

const runMigrations = () => {
  return new Promise((resolve, reject) => {
    exec("npx sequelize-cli db:migrate", (error, _stdout, stderr) => {
        if (error) {
          console.error("Migration failed:", stderr || error.message);
          return reject(error);
        }
        resolve();
      }
    );
  });
};

module.exports = runMigrations;