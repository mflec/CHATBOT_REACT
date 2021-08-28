import './App.css';
import React from 'react';
import { useState } from "react";
import avatarConfused from "./avatarConfused.png";
import avatarHappy from "./avatarHappy.png";
import avatarPokerface from "./avatarPokerface.png";
import avatarSmiling from "./avatarSmiling.png";
import ChatBot from './ChatBot';
import { Link } from 'react-router-dom';

export default function Helper() {
  //Declaración de variables

  const [text, setText] = useState("");
  const [chat, setChat] = useState([{ 
    text: "Hi, i'm Helper. How can I help you?", 
    image: avatarHappy 
  }])

  //Declaración de expresiones

  let hello = RegExp("(HI|JAI|JELOU|HOLI|HOLIS|HELLO|HOLAA)");
  let helper = /HELPER/
  let greet = RegExp("(HOW ARE YOU|HOW ARE U|HOW R U|HOW R YOU)");
  let good = RegExp("(GOOD|GUD|HAPPY|HAPY|FINE)");
  let password = RegExp("(PASSWORD|PASWORD|PASSWOR|PASWOR)");
  let walletCard = RegExp("(WALLET CARD|CARD WALLET|WALLETCARD|CARDWALLET)");
  let accountData = RegExp(
    "(NAME|FULL NAME|FULLNAME|IDENTIFICATION|NUMBER|DNI|BIRTH|DATE|ADDRESS|CARD|CVU)"
  );
  let deletee = /DELETE/;
  let help = /HELP/;
  let account = RegExp("(ACCOUNT|ACOUNT|ACCOUNTT|ACONT|ACUNT)");
  let transfer = RegExp(
    "(TRANSFER|TRANFER|TRANSFERS|TRANFERS|SEND TO|SEND MONEY|TRANSFERENCE|TRANFERENCE)"
  );
  let balance = RegExp("(BALANCE|AMOUNT|GRAPHIC|GRAP|EXPENSES)");
  let contacts = RegExp("(CONTACTS|FRIENDS|USERS)");
  let thanks = RegExp("(THANKS|GRAZIE|GRACIAS|THANK)");
  let bye = RegExp("(CHAO|CHAU|BYE|CHIAO)");


  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value.toUpperCase());
  }
 
  const defaultText = (
    <p>
      {" "}
      I don't understand what you have just written. Please check that your spelling is OK. <br />
      Or fill in the form <Link to="/help/form">
        here
      </Link>{" "}
      so that <br />a customer service representative can contact
      you
    </p>
  );
  function sender() {
    return {
      text: text,
      image: "data:image/jpeg;base64,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CIiulQIiIAIiIAIiIAIiIAIiIALAr9lwzD1jbkaPGTx4rPRJKKkrNXQsZOLunZnF127UzLmI9M3qn0ZPyPktS6VzDhe10buq4Fp816UoJ6djxhe1rxycAR5rKr8JpT1h3X6GhS4jOOk1m9H+TgWT9qkbMujqd16d2bccR+o64+ButbNupKP2czXdj2lp+IusurwetHazLkcdh57u3mjBE6u6dXv3fqxo1j/syD8bKI7IrB+4J+9H+aqS4dXXyMmVSg9pr6l3TqnTqn+yKz/Ad/FH/cpGbArD7jWfakb+F0R4dXfyMO0orea+pC6dROqO1bSLdSY+3Kxn2Q5587LYU26sAze6SU8icLfg381bp8Hry3VkRSxuHjs7+SOVNQSbNBc46BouT4BbKj3eqJc3+ob9b2/Bo08V19LRxxi0bGxj6rQPieKyQFp0OEUoazeZ+hTqcSk9Kat48/sjWbN2LDBm1uJ/GR+bvDl4LZ2VUWrGEYq0VZGfKUpO8ndhEROGhERABERABERABERABERABUREACqoiACoiIAFUKIkEZUoERLEGERESFKFVCImrcAERE4RBERApVERAFAqoiACIiACIiAP/9k=",
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.length < 1) {
      return
    } else if (deletee.test(text) && account.test(text)) {
      let answer = (
        <p>
          {" "}
          We are very sorry that you no longer want to <br />
          be part of the wall-et community. To be able to delete your
          account <br />
          go to <Link to="/account">ACCOUNT</Link> section and click
          on the <br />
          "Edit Profile" button. <br />
          Please, tell us in this <Link to="/help">form</Link> how we can improve our service.{" "}
        </p>
      );
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarConfused
        }])
    } else if (help.test(text) && !hello.test(text)) {
      const answer = <p>
        {" "}
        To get in touch with a customer service representative click
        <Link to='/help/form'> here </Link> and fill <br />
        in the form with the information  requested {" "}
      </p>
      setChat([
        ...chat,
        sender(),
        {
          text: answer,
          image: avatarHappy
        }])
    } else if (walletCard.test(text)) {
      let answer = <p>
        {" "}
        Wall-et Card is a prepaid card that you can use like a <br />
        credit card. You just need to go to the <Link to='/walletcard'>
          WALLET CARD </Link> section <br />
        and use the data that appears on the screen. {" "}
      </p>
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarHappy
        }])
    } else if (balance.test(text)) {
      let answer = <p>
        {" "}
        To see the balance of your account <br />
        go to the <Link to='/balance'> BALANCE </Link> section {" "}
      </p>
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarHappy
        }])
    } else if (contacts.test(text)) {
      let answer = <p>
        {" "}
        To see the history of users to whom you have made a <br />
        transfer go to the <Link to='/contacts'> BALANCE </Link> section {" "}
      </p>
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarHappy
        }])
    } else if (transfer.test(text)) {
      let answer = (
        <p>
          {" "}
          In order to send money to another Wall-et User, <br />
          go to the <Link to="/transfers/1"> TRANSFERS </Link> section and
          click on the "transfer" <br />
          button. There you can send money to another user just having{" "}
          <br />
          their email or their CVU{" "}
        </p>
      );
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarHappy
        }])
    } else if (password.test(text)) {
      let answer = (
        <p>
          {" "}
          If you need to reset your password, <br />
          go to the <Link to="/account"> Account </Link> section <br />
          and click on the "Change Password" button.
        </p>
      );
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarHappy
        }])
    } else if (account.test(text) || accountData.test(text)) {
      let answer = (
        <p>
          {" "}
          If you need to change anything of your account information,{" "}
          <br />
          go to the <Link to="/account">ACCOUNT</Link> section and click
          on the <br />
          "Edit Profile" button and you will be able to change your
          account information. <br />
          Remember that the CVU and the Wall-et Card data cannot be
          modified.{" "}
        </p>
      );
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarHappy
        }])
    } else if (hello.test(text) || helper.test(text)&&hello.test(text)) {
      const answer = <p>Hi, how are you? How can I help you?</p>
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarSmiling
        }])
    } else if (greet.test(text)) {
      const answer = <p> I'm good. And you? </p>
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarSmiling
        }])
    } else if (good.test(text)) {
      const answer = <p> I'm happy for you!!! </p>
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarSmiling
        }])
    } else if (thanks.test(text)) {
      const answer = <p> You're welcome! </p>
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarSmiling
        }])
    } else if (bye.test(text)) {
      const answer = <p> Bye, I hope I helped you </p>
      setChat([
        ...chat, 
        sender(),
        {
          text: answer,
          image: avatarSmiling
        }])
    } else {
      setChat([
        ...chat, 
        sender(),
        {
          text: defaultText,
          image: avatarConfused
        }])
    }
  };
  return (
    <div>
      <h1>WALL-ET ASSISTANT</h1>
      <h4>Assistant:</h4>
      <p>{ chat ? <ChatBot array={chat} /> : null}</p> <br/>
      <form id="areaChat" onChange={handleChange} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={text}
          id="txtPregunta"
          size="50"
        />
        <button type="submit" name="name" value="submit">
          Send
        </button>
      </form>
      <hr />
      <p>
        {" "}
        To contact a customer service representative,
        <Link to="/help/form">click here </Link>
      </p>
    </div>
  );
}
