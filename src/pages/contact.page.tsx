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
  background: ${props => (props.loading ? '#bbb' : '#FEAB01')};
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
      <div className='mx-auto max-w-3xl my-5 mt-8 flex flex-col md:flex-row justify-between gap-4'>
        <div className='flex items-center gap-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FEAB01]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className='break-words'>
                9 Huron Street, Takapuna, Auckland 0622
            </span>
        </div>
        <div className='flex items-center gap-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FEAB01]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <a href="tel:+64274830668">+64 27 483 0668</a>
        </div>
        <div className='flex items-center gap-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FEAB01]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:info@chowluckclub.com">info@chowluckclub.com</a>
        </div>
      </div>
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
