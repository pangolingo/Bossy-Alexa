const alexa = require('alexa-app');
const app = new alexa.app("bossy-alexa");
const sprintf = require('sprintf-js').sprintf

const RESPONSES = [
  '%1$s, %2$s',
  '%1$s, please %2$s',
  '%1$s, I need you to %2$s',
  '%1$s, you need to %2$s',
  '%1$s, you gotta %2$s',
  '%1$s, %2$s. Don\'t make me say it again',
];

app.intent("BossyAlexaIntent", {
    "slots": { "name": "AMAZON.FirstName", "action": "ACTION" },
    "utterances": [
      "tell {names|name} to {actions|action}",
      "please tell {names|name} to {actions|action}",
      "ask {names|name} to {actions|action}",
      "{names|name} needs to {actions|action}"
    ]
  },
  function(request, response) {
    var name = request.slot("name");
    var action = request.slot("action");
    if(!name || !action){
      return response.reprompt("Who to the what now?")
    }
    return response.say(responseSentence(name, action));
  }
);
const ACTIONS = [
  'go to bed',
  'shut the door',
  'wash the dishes',
  'please be quiet',
  'go to his room and shut the door',
  'remember to bring the medicine',
  'leave',
  'go away',
  'please be more helpful',
  'give me a kiss',
];
app.customSlot("ACTION", ACTIONS);
app.dictionary = {
  "names": [
    "james",
    "john",
    "william",
  ],
  "actions": ACTIONS,
};

function responseSentence(name, action){
  let sentence =  RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
  return sprintf(sentence, name, action);
}

module.exports = app;