import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "keyword1") {
            actions.afterFirstMessage();
            children.props.state.userData.name = message;
        }

        if (checker === "keyword2") {
            actions.afterSecondMessage();
            children.props.state.userData.age = message;
            children.props.state.userData.category = "kid";
        }
        if(checker==="keyword3"){
            actions.afterThirdMessage();
        }
        if(checker==="keyword4"){
            actions.finalMessage();
        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
