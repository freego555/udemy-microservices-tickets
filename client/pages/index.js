import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log('currentUser', currentUser);
  // axios.get('/api/users/currentuser').catch((err) => {
  //   console.log(err.message);
  // });

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server!
    // requests should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
  } else {
    // we are on the browser!
    // requests can be made with a base url of ''
  }

  return {};
};

export default LandingPage;
