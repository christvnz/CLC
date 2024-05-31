import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5b3b3;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;

const glow = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #2fc3f0, 0 0 30px #2fc3f0, 0 0 40px #2fc3f0, 0 0 50px #2fc3f0, 0 0 60px #2fc3f0, 0 0 70px #2fc3f0;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #2fc3f0, 0 0 40px #2fc3f0, 0 0 50px #2fc3f0, 0 0 60px #2fc3f0, 0 0 70px #2fc3f0, 0 0 80px #2fc3f0;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
  animation: ${glow} 1.5s infinite alternate, ${float} 3s ease-in-out infinite;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 20px 0;
  animation: ${float} 3s ease-in-out infinite;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 20px auto;
  animation: ${float} 3s ease-in-out infinite;
  color: #333;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }
`;

const NotFoundPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Description>
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </Description>
      <Button onClick={goHome}>Go Back Home</Button>
    </Container>
  );
};

export default NotFoundPage;
