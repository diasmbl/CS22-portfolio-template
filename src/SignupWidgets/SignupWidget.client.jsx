export const config = { runtime: 'client' };
import './SignupWidget.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      // Wait 2 seconds (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form data-testid={'signupWidget'} className={'signup-widget'} onSubmit={handleSubmit} autoComplete={'false'}>
      <h2 data-testid={'signupWidgetTitle'}>{title}</h2>
      {isSubscribed && (
        <p data-testid={'signupWidgetMessage'} className={'message'}>
          {message}
        </p>
      )}
      {!isSubscribed && (
        <>
          <p data-testid={'signupWidgetContent'}>{content}</p>
          <div className={'input-row'}>
            <input
              type="email"
              data-testid="signupWidgetInput"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={busy}
            />
            <button type="submit" data-testid="signupWidgetButton" disabled={busy}>
              {busy ? 'Joining...' : 'Join'}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
