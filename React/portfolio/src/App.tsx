import { useEffect, VFC } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Switch, Route, useHistory, useLocation } from 'react-router';
import { Top } from 'components/Top/index';
import { About } from 'components/About/index';
import { Works } from 'components/Works/index';
import { Contact } from 'components/Contact/index';

import 'css/style.css';

const App: VFC = () => {
  const theme = useTheme();
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  // レスポンシブ対応（ブレークポイント：600px）
  const isResponsible = useMediaQuery(theme.breakpoints.down('sm'));

  // スクロール位置リセット
  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  return (
    <>
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
          <Contact isResponsible={isResponsible} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
