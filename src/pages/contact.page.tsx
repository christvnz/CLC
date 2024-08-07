// components/ContactForm.js
import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: 40px auto;
  padding: 25px;
  background: #f0f4f8;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #005f73;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  height: 120px;

  &:focus {
    border-color: #005f73;
    outline: none;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 15px;
  background: ${props => (props.loading ? '#bbb' : '#0284c7')};
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: ${props => (props.loading ? 'not-allowed' : 'pointer')};
  transition: background 0.3s ease, transform 0.2s;

  &:hover {
    background: ${props => (props.loading ? '#bbb' : '#026898')};
    transform: ${props => (props.loading ? 'none' : 'translateY(-2px)')};
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    if (res.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="flex justify-center">Contact Us</h1>
      <p className="mr-auto ml-auto mt-5 mb-5 max-w-3xl">
        {`Got something awesome happening in New Zealand? Or maybe a genius idea to jazz up the
        chowluckclub.com website? Even if it's a top-notch event in New Zealand that's got you
        buzzing, we're all ears!`}
        <br />
        {`Just drop your deets below, along with any questions you have, and we'll hustle to get back
        to you within 48 hours. If it's urgent (like, really urgent), give us a buzz at 027 483 0668
        (Bee).`}
        <br />
        {`Looking forward to hearing from you soon - let's make some magic happen! ✨`}
      </p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" name="name" onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" name="email" onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Message:</Label>
          <Textarea name="message" onChange={handleChange} required />
        </FormGroup>
        <Button type="submit" loading={loading}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
