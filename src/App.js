import './App.css';
import { useState } from 'react';
import avatarConfused from './avatarConfused.png';
import avatarHappy from './avatarHappy.png';
import avatarPokerface from './avatarPokerface.png';
import avatarSmiling from './avatarSmiling.png';

function App() {
  //Declaración de variables

  const [text, setText] = useState('');
  const [answer, setAnswer] = useState("Hi, i'm Helper. How can I help you?");
  const [avatar, setAvatar] = useState(avatarHappy);

  //Declaración de expresiones

  let hello = RegExp("(HI|JAI|JELOU|HOLI|HOLIS|HELLO|HOLAA)");
  let greet = RegExp("(HOW ARE YOU|HOW ARE U|HOW R U|HOW R YOU)");
  let good = RegExp("(GOOD|GUD|HAPPY|HAPY)");
  let password = RegExp("(PASSWORD|PASWORD|PASSWOR|PASWOR)");
  let accountData = RegExp("(NAME|FULL NAME|FULLNAME|IDENTIFICATION|NUMBER|DNI|BIRTH|DATE|ADDRESS|CARD|CVU)");
  let deletee= /DELETE/;
  let account = RegExp("(ACCOUNT|ACOUNT|ACCOUNTT|ACONT|ACUNT)");
  let transfer = RegExp("(TRANSFER|TRANFER|TRANSFERS|TRANFERS|SEND TO|SEND MONEY|TRANSFERENCE|TRANFERENCE)");
  let balance = RegExp("(BALANCE|AMOUNT|GRAPHIC|GRAP|EXPENSES)");
  let contacts = RegExp("(CONTACTS|FRIENDS|USERS)");

  function handleChange(e) {
    e.preventDefault()
    setText(e.target.value.toUpperCase())
  }

  const defaultText= <p> I don't understand what you say. 
    Please verify that you have written your question properly. <br/>
    Or fill in the solicited information in the form below me so that <br/>
    a customer service representative can contact you</p>

  function handleSubmit(e) {
    e.preventDefault()
    if(text.length<1) {
      setAnswer('Please write something so that I can help you.');
      setAvatar(avatarPokerface);
    }
    else if(deletee.test(text) && account.test(text)) {
      let answer = <p> We are very sorry that you no longer want to <br/> 
      be part of the wall-et community. To be able to delete your account <br/> 
      go to the <a href='/account'>ACCOUNT</a> section and click on the <br/>
      "Edit Profile" button. <br/>
      Please, write us in this <a href="/help">form</a> how we can to improve our service. </p>
      setAnswer(answer);
      setAvatar(avatarConfused);
    }
    else if(transfer.test(text)){
      let answer= <p> In order to send money to another wall-et user, <br/> 
        go to the <a href='/transfers/1'> TRANSFERS </a> section and click on the "transfer" <br/> 
        button. There you can send money to another user just having <br/> 
        their email or their CVU </p>
        setAnswer(answer);
        setAvatar(avatarHappy);
    }
    else if(balance.test(text)){
      let answer= <p> To see the balance of your account <br/> 
        go to the <a href='/balance'> BALANCE </a> section </p>
        setAnswer(answer);
        setAvatar(avatarHappy);
    }
    else if(contacts.test(text)){
      let answer= <p> To see the history of users to whom you have made a <br/> 
        transfer go to the <a href='/contacts'> BALANCE </a> section </p>
        setAnswer(answer);
        setAvatar(avatarHappy);
    }
    else if(password.test(text) ){
      let answer= <p> If you need to reset your password, <br/>
         go to the <a href='/account'> Account </a> section <br/>
         and click on the "Change Password" button.</p>
      setAnswer(answer);
      setAvatar(avatarHappy);
    }
    else if (account.test(text) || accountData.test(text)) {
      let answer= <p> If you need to change any of your account information, <br/>
        go to the <a href='/account'>ACCOUNT</a> section and click on the <br/>
        "Edit Profile" button and you will be able to change your account information. <br/>
        Remember that the CVU and the Wall-et Card data cannot be modified. </p>
      setAnswer(answer);
      setAvatar(avatarHappy);
    }
    else if (hello.test(text)) {
      setAnswer("Hi, how are you? my name is Helper. How can I help you?");
      setAvatar(avatarSmiling);
    }
    else if (greet.test(text)) {
      setAnswer("I'm good. And you?");
      setAvatar(avatarSmiling);
    }
    else if (good.test(text)) {
      setAnswer("I'm happy for you!!!");
      setAvatar(avatarSmiling);
    }
    else{
      setAnswer(defaultText);
      setAvatar(avatarConfused);
    }
  };
  return (
    <div className="App">
      <h1>HELPER ROBOT</h1>
      <img src= {avatar}/>
      <p> Helper : {answer ? answer : null}</p>
      <form id="areaChat" onChange={handleChange} onSubmit={handleSubmit}>
        <textarea type="text" name="name" value={text} id="txtPregunta" size="50" /> <br/>
        <input type="submit" name="name" value="submit" />
      </form>
    </div>
  );
}

export default App;
