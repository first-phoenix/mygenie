import React, { useState } from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [timeoutId, setTimeoutId] = useState(null);
  const initialMessage = () => {
    const message = createChatBotMessage(
      <>
        Hi Jane – Based on the available reports was able to find the above two
        slides with the latest trends.
      </>,
      {
        widget: "image",
      }
    );
    updateState(message, "keyword1");
  };

  const afterFirstMessage = () => {
    const message = createChatBotMessage(
      <>Got it. Sounds like an exciting project – how can I help?​</>
    );
    updateState(message, "keyword2");
  };

  const afterSecondMessage = () => {
    const message = createChatBotMessage(
      <>
        Here are some researches and reports based returns for the ​<br></br>
        1) In the Idaho plant a Modified Atmosphere Packaging technology was
        implemented for cut fruits – , slowed down the ripening process |
        Client: Danone<br></br>
        POC: Boris Hoot<br></br>
        Link to Success Story & Compliance/Regulatory Checklist<br></br>
        2) In NZ plant, we recently used Antimicrobial Packaging for seafood and
        extended shelf life 3x | Client: Nestle<br></br>
        POC: Ram Hari <br></br>
        Link to the copyrighted technology doc.<br></br>
      </>
    );
    updateState(message, "keyword3");
  };
  const afterThirdMessage = () => {
    const message = createChatBotMessage(
      <>Of course – Here are some prototypes available for your reference</>
    );
    updateState(message, "keyword4");
  };

  const afterFourthMessage = () => {
    const message = createChatBotMessage(
      <>
        We are authorized to work with the following partners, please ensure you
        reach out to them through the Comms team and follow the adviced
        protocol. <br></br>
        Mail –Comms.nl@Tetrapak.com<br></br>
        1. University of California, Davis - Department of Food Science and
        Technology<br></br>
        2. University of Florida - Packaging Science Program<br></br>
        3. Michigan State University - School of Packaging<br></br>
        4. ETH Zurich - Institute of Food, Nutrition and Health<br></br>
        5. Purdue University - Department of Food Science<br></br>
        6. Fraunhofer Institute for Process Engineering and Packaging IVV
        (Germany)<br></br>
        7. Swiss Federal Institute of Technology - Laboratory of Sustainable &
        Catalytic Processing<br></br>
      </>
    );
    updateState(message, "keyword5");
  };
  const afterFifthMessage = () => {
    const message = createChatBotMessage(
      <>
        Of course – It's important to note that regulations can change over
        time, so it's essential to consult the relevant regulatory authorities
        or legal experts for the most up-to-date information on compliance
        requirements in both the Philippines and Yemen.
        <br></br>
        <br></br>
        Check these sources that contain the latest regulations for Philippines:
        <br></br>
        <br></br>
        <a
          href="https://www.fda.gov.ph/draft-for-comments-adoption-of-the-philippine-national-standards-pns-and-its-recommended-code-of-practices-rcp-for-processed-food-products-as-technical-regulation/"
          target="blank"
        >
          Philippine National Standards (PNS)
        </a>
        <br></br>
        <a href="https://www.fda.gov.ph/" target="blank">
          Food and Drug Administration (FDA) Philippines
        </a>
        <br></br>
        <a
          href="https://fdc.da.gov.ph/the-food-safety-act-of-2013/"
          target="blank"
        >
          Philippine Food Safety Act of 2013
        </a>
        <br></br>
        <a
          href="https://www.fao.org/fao-who-codexalimentarius/en/"
          target="blank"
        >
          Codex Alimentarius
        </a>
        <br></br>
      </>
    );
    updateState(message, "keyword6");
  };
  const afterSixthMessage = () => {
    const message = createChatBotMessage(
      <>
        Regulatory compliance requirements for baby food pouches can vary
        significantly between countries due to differences in legislation,
        standards, and cultural norms. Here's a general overview of what you
        might expect in the Philippines and Yemen:
        <br></br>
        <strong>Phillipines:</strong>
        <br></br>
        1.Food Safety Standards: In the Philippines, baby food pouches must
        comply with the Food Safety Act of 2013, which establishes safety
        standards for all food products.
        <br></br>
        2.Labeling Requirements: The labeling of baby food pouches in the
        Philippines must include important information such as the product name,
        ingredients list, nutritional information, expiration date, and
        instructions for use. It's essential to comply with the labeling
        requirements set by the Food and Drug Administration (FDA) in the
        Philippines.
        <br></br>
        3.Language: Labels should be in Filipino or English, or in both
        languages, as per the regulations set by the Philippine FDA.
        <br></br>
        4.Design Standards: While there may not be specific regulations
        regarding the design of baby food pouches, it's crucial to ensure that
        the packaging is child-resistant to prevent accidental ingestion.
        <br></br>
        <br></br>
        <strong>Yemen:</strong>
        <br></br>
        1.Food Safety Standards: Yemen may have its own food safety regulations,
        which baby food pouches must comply with to ensure they are safe for
        consumption.
        <br></br>
        2.Labeling Requirements: Like in the Philippines, labeling requirements
        in Yemen typically include the product name, ingredients list,
        nutritional information, expiration date, and instructions for use.
        However, specific requirements may vary, so it's important to adhere to
        the regulations set by the relevant authorities in Yemen.
        <br></br>
        3.Language: Labels should be in Arabic, as it's the official language of
        Yemen.
        <br></br>
        4.Design Standards: There might be specific design standards or
        guidelines in Yemen, particularly concerning the packaging's safety and
        suitability for baby food products.
        <br></br>
        It's important to note that regulations can change over time, so it's
        essential to consult the relevant regulatory authorities or legal
        experts for the most up-to-date information on compliance requirements
        in both the Philippines and Yemen. Additionally, working with local
        partners or distributors who are familiar with the regulatory landscape
        can be beneficial when navigating compliance issues in foreign markets.
      </>
    );
    updateState(message, "keyword7");
  };
  const afterSeventhMessage = () => {
    const message = createChatBotMessage(
      <>Happy to help – here is your word document:</>
    );
    updateState(message, "keyword8");
    const timeout = setTimeout(() => {
      const nextMessage = createChatBotMessage(
        <>
          Hi Jane, are you still there? What else can I assist you with?
          <br></br>
          <br></br>I can translate documents for you to local languages….and
          more. See here for more info
        </>
      );
      updateState(nextMessage);
    }, 10000);
    setTimeoutId(timeout);
  };
  const clearTimeoutout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };
  //   const afterEighthMessage = () => {
  //     const message = createChatBotMessage(
  //       <>
  //         Hi Jane, are you still there? What else can I assist you with?
  //         <br></br>
  //         <br></br>I can translate documents for you to local languages….and more.
  //         See here for more info
  //       </>
  //     );
  //     updateState(message);
  //   };

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialMessage,
            afterFirstMessage,
            afterSecondMessage,
            afterThirdMessage,
            afterFourthMessage,
            afterFifthMessage,
            afterSixthMessage,
            afterSeventhMessage,
            clearTimeoutout,
            //afterEighthMessage,
            //finalMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
