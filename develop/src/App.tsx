// import React, { useEffect } from 'react';
// import { Switch, Route, useHistory, useLocation } from 'react-router';
// import { ThemeProvider } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import TopPage from 'pages/TopPage';

const App: React.FC = () => (
  // const { hash, pathname } = useLocation();
  // const { action } = useHistory();

  // スクロール位置リセット
  // useEffect(() => {
  //   if (!hash || action !== 'POP') {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, hash, pathname]);

  // レスポンシブ対応（ブレークポイント：600px）
  // const isResponsible = useMediaQuery(theme.breakpoints.down('sm'));

  <TopPage />
);
export default App;
