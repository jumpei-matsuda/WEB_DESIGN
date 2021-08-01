import React from 'react';
import { makeStyles, Box, Button } from '@material-ui/core';
import { ListItemType } from 'constants/pageSourceConst';

const useStyles = makeStyles(() => ({
  conditionList: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  conditionTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  ConditionLabel: {
    fontSize: '1.3rem',
  },
}));

export type SelectLabelListProps = {
  title: string;
  list: ListItemType[];
};

const SelectLabelList: React.FC<SelectLabelListProps> = (props) => {
  const classes = useStyles();
  const { title, list } = props;

  return (
    <Box className={classes.conditionList}>
      <span className={classes.conditionTitle}>{`${title} : `}</span>
      {list.map((item) => (
        <Button className={classes.ConditionLabel} key={item.id}>
          {item.content}
        </Button>
      ))}
    </Box>
  );
};

export default SelectLabelList;
