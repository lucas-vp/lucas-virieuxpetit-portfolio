import { useRoutes } from 'react-router-dom';
import Page from './components/Page';
import routes from './routes';

const App = () => {
  const routing = useRoutes(routes);
  return (
    <Page>
    {routing}
    </Page>
  );
}

export default App;
