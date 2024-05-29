import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  background: var(--color-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px 5px 0px 0px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 100%;
  color: white;
  border: none;
  border-radius: 0px 0px 5px 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const Message = styled.p`
  font-size: 14px;
  color: #333;
  padding: 10px;
`;

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <Button type="submit">Subscribe</Button>
      {message && <Message>{message}</Message>}
    </Form>
  );
};

export default EmailSubscription;
