import Layout from '../components/Layout';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <Layout>
      <Nav />
      <div>
        <h1>Welcome to Countdown Timer!</h1>
        {/* Countdown timer component will be here */}
      </div>
    </Layout>
  );
}