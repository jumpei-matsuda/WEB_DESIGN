import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'constants/themeConst';

import { Header } from 'components/organisms/Header/index';
import { Footer } from 'components/organisms/Footer/index';

const useStyles = (background: keyof Theme["color"]) => makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    background: theme.color[background],
  },
}));

export type PageTempaleProps = {
  isResponsible: boolean;
  header?: boolean;
  background?: keyof Theme["color"];
};

const PageTempale: React.FC<PageTempaleProps> = (props) => {
  const { isResponsible, header, background, children } = props;
  const classes = useStyles(background ?? 'rightGray')();

  console.log(isResponsible);

  return (
    <div className={classes.root}>
      <Header isResponsible={isResponsible} header={header} />
      {children}
      <Footer isResponsible={isResponsible} />
    </div>
  );
};

export default PageTempale;
