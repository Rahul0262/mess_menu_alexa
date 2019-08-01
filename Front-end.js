{
    "interactionModel": {
        "languageModel": {
            "invocationName": "mess menu",
            "intents": [
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "MessMenuIntentWithDay",
                    "slots": [
                        {
                            "name": "meal",
                            "type": "MEAL",
                            "samples": [
                                "{meal} menu",
                                "{meal}"
                            ]
                        },
                        {
                            "name": "day",
                            "type": "DAY",
                            "samples": [
                                "{day} menu",
                                "{day}"
                            ]
                        }
                    ],
                    "samples": [
                        "tell me what is {day}",
                        "tell me {day}",
                        "what is {day}",
                        "what is {meal}",
                        "tell me {meal}",
                        "tell me what is {meal}",
                        "{meal}",
                        "{day}",
                        "tell me what is {day} {meal}",
                        "tell me {day} {meal}",
                        "what is {day} {meal}",
                        "{day} {meal}",
                        "tell me what is {day} menu",
                        "tell me {day} menu",
                        "what is {day} menu",
                        "what is {meal} menu",
                        "tell me {meal} menu",
                        "tell me what is {meal} menu",
                        "{meal} menu",
                        "{day} menu",
                        "tell me what is {day} {meal} menu",
                        "tell me {day} {meal} menu",
                        "what is {day} {meal} menu",
                        "{day} {meal} menu"
                    ]
                }
            ],
            "types": [
                {
                    "name": "MEAL",
                    "values": [
                        {
                            "id": "0",
                            "name": {
                                "value": "breakfast"
                            }
                        },
                        {
                            "id": "2",
                            "name": {
                                "value": "dinner"
                            }
                        },
                        {
                            "id": "1",
                            "name": {
                                "value": "lunch"
                            }
                        }
                    ]
                },
                {
                    "name": "DAY",
                    "values": [
                        {
                            "id": "9",
                            "name": {
                                "value": "tomorrow",
                                "synonyms": [
                                    "tomorrows"
                                ]
                            }
                        },
                        {
                            "id": "8",
                            "name": {
                                "value": "yesterday",
                                "synonyms": [
                                    "yesterdays"
                                ]
                            }
                        },
                        {
                            "id": "7",
                            "name": {
                                "value": "today",
                                "synonyms": [
                                    "todays"
                                ]
                            }
                        },
                        {
                            "id": "1",
                            "name": {
                                "value": "monday",
                                "synonyms": [
                                    "mondays"
                                ]
                            }
                        },
                        {
                            "id": "2",
                            "name": {
                                "value": "tuesday",
                                "synonyms": [
                                    "tuesdays"
                                ]
                            }
                        },
                        {
                            "id": "3",
                            "name": {
                                "value": "wednesday",
                                "synonyms": [
                                    "wednesdays"
                                ]
                            }
                        },
                        {
                            "id": "4",
                            "name": {
                                "value": "thursday",
                                "synonyms": [
                                    "thursdays"
                                ]
                            }
                        },
                        {
                            "id": "5",
                            "name": {
                                "value": "friday",
                                "synonyms": [
                                    "fridays"
                                ]
                            }
                        },
                        {
                            "id": "6",
                            "name": {
                                "value": "saturday",
                                "synonyms": [
                                    "saturdays"
                                ]
                            }
                        },
                        {
                            "id": "0",
                            "name": {
                                "value": "sunday",
                                "synonyms": [
                                    "sundays"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "dialog": {
            "intents": [
                {
                    "name": "MessMenuIntentWithDay",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "meal",
                            "type": "MEAL",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1290448368821.931668182821"
                            }
                        },
                        {
                            "name": "day",
                            "type": "DAY",
                            "confirmationRequired": false,
                            "elicitationRequired": true,
                            "prompts": {
                                "elicitation": "Elicit.Slot.1290448368821.487513758497"
                            }
                        }
                    ]
                }
            ],
            "delegationStrategy": "ALWAYS"
        },
        "prompts": [
            {
                "id": "Elicit.Slot.1290448368821.931668182821",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "Which meal do you want to know the menu for ?"
                    }
                ]
            },
            {
                "id": "Elicit.Slot.1290448368821.487513758497",
                "variations": [
                    {
                        "type": "PlainText",
                        "value": "For which day?"
                    }
                ]
            }
        ]
    }
}