const args = require("minimist")(process.argv.slice(2));
const events = require("./database/events.json");
const saveEvents = require("./helpers/saveEvents");

const { date, description, showEvent } = args;

if (date && description) {
  const newEvent = { date, description };

  events.push(newEvent);

  saveEvents(events);
}

if (showEvent) {
  console.log(events);
}
