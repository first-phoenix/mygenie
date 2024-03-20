import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialMessage = () => {
        const message = createChatBotMessage('Hi Jane – certainly, I went through 4 relevant research decks published within the last quarter and here is a summarized version of the latest trends:',{
            widget: "image"
        });
         updateState(message, "keyword1")

    }

    const afterFirstMessage = () => {
        const message = createChatBotMessage("Of course – tell me what you need so I can fetch data and names for you. I can also share sources/linked if its internal content")
        updateState(message, "keyword2")
    }


    const afterSecondMessage = () => {
        const message = createChatBotMessage("Here are some hits – tell me which one you are interested to more about:1) In the Idaho plant a Modified Atmosphere Packaging technology was implemented for cut fruits, slowed down the ripening process  POC: Boris H Link to Success Story & Compliance/Regulatory Checklist 2) In NZ plant, we recently used Antimicrobial Packaging for seafood and extended shelf life 3x.  POC: Ram Ha Link to the copyrighted technology doc.")
        updateState(message,"keyword3")
    }
    const afterThirdMessage = () => {
        const message = createChatBotMessage("Of course – Here are some prototypes available for your reference")
        updateState(message,"keyword4")
    }

    const finalMessage = () => {
        const message = createChatBotMessage("We are authorized to work with the following partners, please ensure you reach out to them through the Comms team and follow the adviced protocol. Mail -Comms@companyname University of California, Davis - Department of Food Science and Technology University of Florida - Packaging Science Program Michigan State University - School of Packaging ETH Zurich - Institute of Food, Nutrition and Health Purdue University - Department of Food Science Fraunhofer Institute for Process Engineering and Packaging IVV (Germany) Swiss Federal Institute of Technology - Laboratory of Sustainable & Catalytic Processing")
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
                        initialMessage,
                        afterFirstMessage,
                        afterSecondMessage,
                        afterThirdMessage,
                        finalMessage
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;