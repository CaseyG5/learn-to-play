import { useRef, useState } from "react";
// import {useParams} from 'react-router-dom';

/**
 * @author: debp
 */
function ContactPage({ page }) {
  // const {name} = useParams();
  // since we have this form, we can collect it's value
  //see this for more of Ref: https://bit.ly/3zqey1l
  // const [email, setEmail] = useState("");
  // const [content, setContent] = useState("");

  // here's the alternative
  const email = useRef();
  const content = useRef();

  // const mailjet = require ('node-mailjet')
  // .connect('40f54eca85c3e9432e96b35280024b14', '050d653646a3c8c42d2aa5bacc8889af')
  // const request = mailjet
  // .post("send", {'version': 'v3.1'})
  // .request({
  //   "Messages":[
  //     {
  //       "From": {
  //         "Email": "nwasporter70@gmail.com",
  //         "Name": "Nancy"
  //       },
  //       "To": [
  //         {
  //           "Email": "nwasporter70@gmail.com",
  //           "Name": "Nancy"
  //         }
  //       ],
  //       "Subject": "Greetings from Boston.",
  //       "TextPart": "My first Mailjet email",
  //       "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
  //       "CustomID": "AppGettingStartedTest"
  //     }
  //   ]
  // })
  // request
  //   .then((result) => {
  //     console.log(result.body)
  //   })
  //   .catch((err) => {
  //     console.log(err.statusCode)https://bit.ly/3gCDFqm
  //   })
  //   }

  const handleSumbit = (event) => {
    // where the submit logic goes
    // we sent , we can use this https://bit.ly/3gCDFqm
    // based on what we have from above, we can get the values of the form as:

    const newEmail = email.current.value;
    const newContent = content.current.value;

    ////.. other logic
    // this we send using thr link above
  };
  return (
    <>
      {/* The function we sent this form to for other details */}
      <form onSubmit={handleSumbit}>
        {/* the form elements here */}
        {/* ...such as... */}
        <input
          type="email"
          ref={email}
          className="border-2 outline-none block w-full"
          placeholder="Your Email"
        />
        <textarea
          ref={content}
          className="border-2 outline-none w-full"
          placeholder="Your Message"
        ></textarea>

        <input
          type="submit"
          value="Send"
          className="block w-32 m-auto bg-green-400"
        />
      </form>
    </>
  );
}
export default ContactPage;
