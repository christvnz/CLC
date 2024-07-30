import styled from 'styled-components';

const StyledContainer = styled.div`
  @media (min-width: 768px) {
  }
`;
const StyledTitle = styled.h2`
  color: white;
  font-weight: 400;
  margin-bottom: 16px;
  @media (min-width: 1024px) {
    font-size: 42px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  border-radius: 10px;
  background: #feab01ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  text-align: center;
  @media (max-width: 768px) {
    border-radius: 10px 0px 0px 10px;
  }
  font-size: 14px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const SubmitButton = styled.input`
  width: 100%;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 0px 0px 5px 5px;
  font-size: 16px;
  @media (max-width: 768px) {
    border-radius: 0px 5px 5px 0px;
  }
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const MailchimpSignup = () => {
  return (
    <StyledContainer>
      <StyledTitle>SUBSCRIBE TO OUR NEWSLETTER.</StyledTitle>
      <StyledForm
        action="https://chowluckclub.us13.list-manage.com/subscribe/post?u=f3e41496ce33f06e3a27b23e7&amp;id=c48cf0bdd7&amp;f_id=00a0dee2f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank">
        <Input
          type="email"
          name="EMAIL"
          className="required email"
          id="mce-EMAIL"
          required
          defaultValue=""
          placeholder="Email address"
        />

        <div id="mce-responses" className="clear foot">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          <HiddenInput
            type="text"
            name="b_f3e41496ce33f06e3a27b23e7_c48cf0bdd7"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <SubmitButton type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe" />
      </StyledForm>
    </StyledContainer>
  );
};

export default MailchimpSignup;
