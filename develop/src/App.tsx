import React, { useEffect, useRef } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { theme } from 'constants/themeConst';
import { useAuth } from 'contexts/auth';
import AuthProvider from 'contexts/auth/AuthProvider';
import LoginRouter from 'components/common/LoginRouter';

import { TopPage } from 'components/pages/TopPage/index';
import { LoginPage } from 'components/pages/LoginPage/index';
import { SignUpPage } from 'components/pages/SignUpPage/index';
import Sample from 'components/pages/Sample';

const App: React.FC = () => {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();


  // スクロール位置リセット
  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  // レスポンシブ対応（ブレークポイント：600px）
  const isResponsible = useMediaQuery(theme.breakpoints.down('sm'));

  const auth = useAuth();
  const isLogin = useRef(auth.user != null);
  useEffect(() => {
    console.log({ isLogin })
  }, [auth.user]);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/login">
            <LoginPage isResponsible={isResponsible} />
          </Route>
          <Route exact path="/signup">
            <SignUpPage isResponsible={isResponsible} />
          </Route>
          <Route path="/sample">
            <Sample />
          </Route>

          <LoginRouter exact path="/">
            <TopPage isResponsible={isResponsible} />
          </LoginRouter>
        </Switch>
      </ThemeProvider>
    </AuthProvider >
  );
};

export default App;
