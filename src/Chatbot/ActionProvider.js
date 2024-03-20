import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Hi Jane – certainly, I went through 4 relevant research decks published within the last quarter and here is a summarized version of the latest trends:',{
            widget: "finalImage"
        });
         updateState(message, "age")

    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Of course – tell me what you need so I can fetch data and names for you. I can also share sources/linked if its internal content")
        updateState(message, "preference")
    }


    const afterAgeMessage = () => {
        const message = createChatBotMessage("Here are some hits – tell me which one you are interested to more about:1) In the Idaho plant a Modified Atmosphere Packaging technology was implemented for cut fruits, slowed down the ripening process  POC: Boris H Link to Success Story & Compliance/Regulatory Checklist 2) In NZ plant, we recently used Antimicrobial Packaging for seafood and extended shelf life 3x.  POC: Ram Ha Link to the copyrighted technology doc.")
        updateState(message)
    }

    const finalResult = (name, age, preference, vehicle) => {
        const message = createChatBotMessage(`Got it, ${name}! Based on your age ${age} and preference for a ${preference} ride, I recommend the '${vehicle}.' Enjoy the thrill!`, {
            widget: "finalImage"
        })
        updateState(message)
    }

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;