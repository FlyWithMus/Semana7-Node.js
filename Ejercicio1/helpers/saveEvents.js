const path = require("path");
const { writeFile } = require("fs").promises;

const saveEvents = async (events) => {
  try {
    const pathEvents = path.join(__dirname, "../database", "events.json");
    await writeFile(pathEvents, JSON.stringify(events));
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = saveEvents;
