import { VFC } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Top from 'components/top/Top';
import About from 'components/about/About';
import Works from 'components/works/Works';
import Contact from 'components/contact/Contact';

import 'css/style.css';

const App: VFC = () => {
  const theme = useTheme();
  // レスポンシブ対応（ブレークポイント：600px）
  const isResponsible = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Top isResponsible={isResponsible} />
        </Route>
        <Route exact path="/about">
          <About isResponsible={isResponsible} />
        </Route>
        <Route exact path="/works">
          <Works isResponsible={isResponsible} />
        </Route>
        <Route exact path="/contact">
          <Contact title="Contact" isResponsible={isResponsible} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
