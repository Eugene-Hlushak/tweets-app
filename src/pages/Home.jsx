import { PageContainer, Head, Subtitle, ToTweets } from './Pages.styled';

const Home = () => {
  return (
    <PageContainer>
      <Head>Welcome! I bring to your attention the Tweets-App!</Head>
      <Subtitle>Let's see how it all works</Subtitle>
      <ToTweets to="/tweets">go</ToTweets>
    </PageContainer>
  );
};

export default Home;
