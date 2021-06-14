import { makeStyles } from '@material-ui/core/styles';
import Title from 'components/commons/atoms/Title';
import Header from 'components/commons/organisms/Header/Header';
import ToTopButton from 'components/commons/atoms/ToTopButton';
import Footer from 'components/commons/organisms/Footer';
import { useScrollTop } from 'hooks/useScrollTop';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  root: {
    fontSize: '100%',
    color: '#333',
    fontFamily: 'Helvetica, Light',
    position: 'relative',
    paddingTop: '11rem',
  },
}));

/** ******************
 * type
 ******************* */
type PageWrapperProp = {
  title: string;
  isResponsible: boolean;
  children: React.ReactNode;
};

/**
 * トップページ サブエリア
 * @param props
 * @returns
 */
const PageWrapper: React.FC<PageWrapperProp> = (props) => {
  const classes = useStyles();
  const { topRef, scrollToTop } = useScrollTop();
  const { title, isResponsible, children } = props;

  return (
    <div className={classes.root} ref={topRef}>
      <Header isResponsible={isResponsible} />
      <Title title={title} />
      {children}
      <ToTopButton scrollToTop={scrollToTop} />
      <Footer />
    </div>
  );
};

export default PageWrapper;
