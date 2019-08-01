const Alexa = require('ask-sdk');

const SKILL_NAME = 'Mess Menu';
const WELCOME_MESSAGE = 'Welcome to mess menu, You can ask like today\'s lunch or something specific like friday\'s dinner?';
const HELP_MESSAGE = 'You can say tell me what is mondays lunch, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const menu = [
  
  ['Masala Dosa, Sambar, Chutney, Chole Bature, Bread Jam, Milk, Tea, Coffee, Sweet Corn',
  'Lemon Rice, Punjabi Dhal, Kadi Pakodi, Gajar Methi Matar, Sprouts, Roti, Steamed Rice, Curd, Sambar or Rasam, Fryums, Chutney',
  'Veg Biryani, Chicken Biryani, Veg Raita, Dhal Tadka, Shahi Paneer, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, Pudina Chutney, Pickle, Ice Cream'],
  
  ['Vada, sambhar, chutney, puri bhaji, corn flakes, sprouts, bread jam, milk, tea and coffee',
  'Tomato Rice, dhal makhani, Veg sabzi, aloo methi, salad, roti, stamed rice, curd, sambhar or rasam, chutney and papad',
  'jeera rice, dhal tadka, rajma masala, mix vegetable, roti, salad, steamed rice, curd, sambhar or rasam, pickle'],

  ['Pessarattu Upma, Ginger Chutney, Gobhi Paratha, Curd, Pickle, Bournvita, Milk, Tea, Coffee, Sprouts',
  'Arhar Dhal, Chole, Bhindi Fry, Methi Puri, Boondhi Raita, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, Fryums, Chutney',
  'Dhal Makhani, Pudina Rice, Veg Kofta, Masala Corn, Salad, Fryums, Roti, Steamed Rice, Curd, Sambar or Rasam, Pickle'],

  ['Rava Idli, Sambar, Chutney, Stuffed Kulcha, Curd, Bread Butter,Boiled Egg or Banana, Milk, Tea, Coffee, Sweet Corn',
  'Veg Pullav, Jeera Dhal Fry, Black Channa Masala, Corn Palak, Gulab Jamun, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, Fryums, Chutney',
  'Kashmiri Pulao, Dhal Tadka, Kadhai Paneer, Butter Chicken, Boondi Raita, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, Pickle'],

  ['Masala Dosa, Sambar, Chutney, Poha, Chocos, Milk, Tea, Coffee, Sprouts',
  'Dhal Khichdi, Navratan Dhaal, veg Sabzi, Aloo Baigan, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, fryums, Chutney',
  'Corriender Rice, Toor Dhal, Veg Handi, Dum Aloo, Boondi, Salad, Fryums, Roti, Steamed Rice, Curd, Sambar or Rasam, Pickle'],

  ['Mysore Bonda, Chutney, Mix Paratha, Pudina Chutney, Bread Butter,Boiled Egg, Banana, Milk, Tea, Coffee, Sweet Corn',
  'Jeera Rice, Channa Dhal Tadka, Rajma Masala, Jeera Aloo, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, Fryums, Chutney',
  'Dhal Makhani, Egg Bhurji, Aloo 65, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, Pickle'],

  ['Pongal, Chutney, Sandwich with pudina chutney and sweet chutney, Pan Cakes, Boost, Milk, Tea, Coffee, Sprouts',
  'Onion Garlic Rice, Achari Dhal, Chole, Green sabzi, Ajvain Puri, Boondi Raita, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, Fryums, Chutney',
  'Veg Fried Rice, Navratan Dhal Tadka, Manchurian, Black Chana Dry, Cut Fruits, Salad, Roti, Steamed Rice, Curd, Sambar or Rasam, Pickle']
  
];

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(WELCOME_MESSAGE)
      .reprompt(WELCOME_MESSAGE)
      .getResponse();
  },
};

const MessMenuHandlerWithDay = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'MessMenuIntentWithDay';
  },
  handle(handlerInput) {
    var currentDay = new Date() ;
  	var week_no = currentDay.getDay();
  	
    var day = handlerInput.requestEnvelope.request.intent.slots.day.resolutions.resolutionsPerAuthority[0].values[0].value.id;
  	var meal = handlerInput.requestEnvelope.request.intent.slots.meal.resolutions.resolutionsPerAuthority[0].values[0].value.id;
  	
  	switch (day) {
  	  case '8':
  	      if (week_no == '0') {
  	        week_no = 6;
  	      }else {
  	        week_no = week_no - 1;
  	      }
  	    break;
	    case '7':
  	      week_no = week_no + 0;
  	    break;
	    case '9':
  	      if (week_no == '6') {
  	        week_no = 6;
  	      }else {
  	        week_no = 0;
  	      }
  	    break;
  	  default :
  	    week_no = day;
  	}
  	
    var speechOutput = menu[week_no][meal];
    
    return handlerInput.responseBuilder
      .speak('Your menu is, ' + speechOutput)
      .withShouldEndSession(true)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};



const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    MessMenuHandlerWithDay,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
