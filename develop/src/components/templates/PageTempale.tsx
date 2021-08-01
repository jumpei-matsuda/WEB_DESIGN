import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'constants/themeConst';

import { Header } from 'components/organisms/Header/index';
import { Footer } from 'components/organisms/Footer/index';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    background: theme.color.rightGray,
  },
}));

export type PageTempaleProps = {
  isResponsible: boolean;
  header?: boolean;
};

const PageTempale: React.FC<PageTempaleProps> = (props) => {
  const classes = useStyles();
  const { isResponsible, header, children } = props;

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
