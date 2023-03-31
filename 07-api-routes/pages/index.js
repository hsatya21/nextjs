import { useRef, useState } from 'react';
import Link from 'next/link';

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const requestBody = {
      id: new Date().toISOString(),
      email: enteredEmail,
      text: enteredFeedback,
    };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }

  const renderFeedbackItems = feedbackItems.map((item) => (
    <li key={item.id}>{item.text}</li>
  ));

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email: </label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback: </label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button>
        <Link href="/feedback">All Feedbacks</Link>
      </button>
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>{renderFeedbackItems}</ul>
    </div>
  );
}

export default HomePage;
