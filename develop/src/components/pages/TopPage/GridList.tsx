import React from 'react';
import { makeStyles, Box, Grid } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
import { GridItem } from 'constants/pageSourceConst';

const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    padding: '.5rem',
  },
  img: {
    background: theme.color.rightGray,
    height: '10rem',
    width: '10rem',
    marginRight: '2rem',
  },
  crestName: {
    background: theme.color.red,
    color: theme.color.white,
    padding: '.5rem',
    fontSize: '1.25rem',
  },
}));

export type GridListProps = {
  list: GridItem[];
};

const GridList: React.VFC<GridListProps> = (props) => {
  const classes = useStyles();
  const { list } = props;

  return (
    <Grid container>
      {list.map((item) => (
        <Grid className={classes.gridItem} xs={4} key={item.id} item>
          <p className={classes.crestName}>{item.shape}</p>
          <Box display="flex" justifyContent="start" alignItems="center">
            <img src={item.img} alt={item.shape} className={classes.img} />
            <span>{item.name}</span>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridList;
