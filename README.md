# Bossy Alexa

An Amazon Echo app to tell someone to do something.

To be used with [trayburn's 'sample-alexa-skill'](https://github.com/trayburn/sample-alexa-skill)


## Some things you can say to it
tell bossy robot to tell james to remember his backpack
tell bossy robot tell james to wash dishes

tell otto to go to bed using bossy robot
tell james to brush your teeth using bossy robot

tell bossy robot james needs to wash the dishes

## how it was built

First I got set up with the `alexa-app` and `alexa-app-server` JS libraries. `alexa-app` is a DSL to make Alexa skills much easier to write. `alexa-app-server` is a local dev server for testing the alexa skills you're writing. it can also helpfully generate the utterances and slots you need when you configure the skill in amazon's interface. Tim Rayburns `https://github.com/trayburn/sample-alexa-skill` `sample-alexa-skill` repo was helpful for this.

The goal was to build a skill to help back me up when parenting. I wanted to say "Alexa, tell <my kid> to go to bed!" and have Alexa say "<kid>, go to bed!" Unfortunately Alexa forces you to say the name of the Skill in the command. So it becomes a bit longer: "tell bossy robot to tell <kid> to wash the dishes" or "tell <kid> to go to bed using bossy robot" or "tell bossy robot <kid> needs to wash the dishes"

Then I wrote the skill JS. I created an Intent with a slot for name and a slot for action. I added some sample utterances and sample slot values. 
