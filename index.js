const alexa = require('alexa-app');
const app = new alexa.app("bossy-alexa");

app.intent("BossyAlexaIntent", {
    "slots": { "name": "AMAZON.US_FIRST_NAME", "action": "DAVE.ACTION" },
    "utterances": ["tell {-|name} to {action}"]
  },
  function(request, response) {
    var name = request.slot("name");
    var action = request.slot("action");
    response.say(name + ", " + action);
  }
);

module.exports = app;