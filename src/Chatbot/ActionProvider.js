import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialMessage = () => {
        const message = createChatBotMessage(
            <>
                Hi Jane – certainly, I went through 4 relevant research decks published within the last quarter and here is a summarized version of the latest trends: <br></br><br></br>Philippines Baby Food Market Assessment, Innovative Food Packaging,
            </>,{
            widget: "image"
            });
         updateState(message, "keyword1")

    }

    const afterFirstMessage = () => {
        const message = createChatBotMessage(
            <>Got it. Sounds like an exciting project – how can I help?</>
        );
        updateState(message, "keyword2")
    }


    const afterSecondMessage = () => {
        const message = createChatBotMessage(
            <>
            Here are some hits from Tetrapak repositiry – tell me which one you are interested to know more about:<br></br>
            1) In the Idaho plant a Modified Atmosphere Packaging technology was implemented for cut fruits – , slowed down the ripening process | Client: Danone<br></br>
            POC: Boris Hoot<br></br>
            Link to Success Story & Compliance/Regulatory Checklist<br></br>
            
            2) In NZ plant, we recently used Antimicrobial Packaging for seafood and extended shelf life 3x | Client: Nestle<br></br>
            POC: Ram Hari <br></br>
            Link to the copyrighted technology doc.<br></br>
            </>
        )
        updateState(message,"keyword3")
    }
    const afterThirdMessage = () => {
        const message = createChatBotMessage(
        <>
        Of course – Here are some prototypes available for your reference
        </>)
        updateState(message,"keyword4")
    }

    const finalMessage = () => {
        const message = createChatBotMessage(
            <>
            We are authorized to work with the following partners, please ensure you reach out to them through the Comms team and follow the adviced protocol. <br></br>

            Mail –Comms.nl@Tetrapak.com<br></br>

            1. University of California, Davis - Department of Food Science and Technology<br></br>
            2. University of Florida - Packaging Science Program<br></br>
            3. Michigan State University - School of Packaging<br></br>
            4. ETH Zurich - Institute of Food, Nutrition and Health<br></br>
            5. Purdue University - Department of Food Science<br></br>
            6. Fraunhofer Institute for Process Engineering and Packaging IVV (Germany)<br></br>
            7. Swiss Federal Institute of Technology - Laboratory of Sustainable & Catalytic Processing<br></br>

            </>
        )
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