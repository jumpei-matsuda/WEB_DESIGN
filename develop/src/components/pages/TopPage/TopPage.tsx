import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
import {
  headerIdList,
  kanaList,
  shapeList,
  damyCrestShapeList,
} from 'constants/pageSourceConst';
import topImage from 'images/top.jpg';
import { useAuth } from 'contexts/auth';

import PageTempale from 'components/templates/PageTempale';
import Prefecture from './Prefecture';
import SelectLabelList from './SelectLabelList';
import GridList from './GridList';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    margin: '0 5rem',
    background: theme.color.rightGray,
  },
  img: {
    maxWidth: '800px',
    width: 'auto',
    backgroundSize: 'cover',
    margin: '2rem 0',
  },
  title: {
    fontSize: '5rem',
    fontWeight: 900,
    marginBottom: '1rem',
  },
  detail: {
    textAlign: 'left',
    width: '60%',
    maxWidth: '800px',
    margin: 'auto',
    fontSize: '1.75rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  conditionArea: {
    marginBottom: '2rem',
    '&:after': {
      content: '""',
      display: 'block',
      height: '3px',
      margin: '1rem 0',
      background: theme.color.rightGray,
    },
  },
  backGroundWhite: {
    background: theme.color.white,
  },
}));

export type TopPageProps = {
  isResponsible: boolean;
};

const TopPage: React.FC<TopPageProps> = (props) => {
  const classes = useStyles();
  const auth = useAuth();
  const { isResponsible } = props;

  console.log(auth.user);

  return (
    <PageTempale isResponsible={isResponsible} header>
      <Box className={classes.root}>
        <img className={classes.img} src={topImage} alt="top" />
        <Box marginBottom="5rem">
          <h1 className={classes.title}>家紋とは</h1>
          <p className={classes.detail}>
            「源平藤橘（げんぺいとうきつ）」と呼ばれる源氏、平氏、藤原氏、橘氏といった強力な氏族が最も名を馳せていた時代、
            <br />
            地方に移り住んだ氏族の一部が他の同じ氏族の人間と区別を図るため土地の名前などを自分の家名（屋号）とし、
            <br />
            それが後の名字となり、家紋は家の独自性を示す固有の目印的な紋章として生まれ、名字を表す紋章として生まれたと言われている。
          </p>
        </Box>

        <Box
          id={headerIdList.crest}
          margin="0 5rem 5rem"
          className={classes.backGroundWhite}
        >
          <Box className={classes.conditionArea}>
            <SelectLabelList title="【50音から選ぶ】" list={kanaList} />
            <SelectLabelList title="【形状から選ぶ】" list={shapeList} />
          </Box>
          <GridList list={damyCrestShapeList} />
        </Box>
        <Prefecture />
      </Box>
    </PageTempale>
  );
};

export default TopPage;
