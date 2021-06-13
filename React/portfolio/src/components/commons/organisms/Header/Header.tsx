import { useHistory } from 'react-router-dom';
import { MenuObj, headerMenu } from 'constants/CommonConst';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

type HeaderProps = {
  isResponsible: boolean;
};
const Header: React.FC<HeaderProps> = (props) => {
  const { isResponsible } = props;
  const history = useHistory();

  /**
   * メニューリスト
   */
  const headerMenuList: MenuObj[] = [
    { id: 1, label: headerMenu.top.label, url: headerMenu.top.url },
    { id: 2, label: headerMenu.about.label, url: headerMenu.about.url },
    { id: 3, label: headerMenu.works.label, url: headerMenu.works.url },
    { id: 4, label: headerMenu.contact.label, url: headerMenu.contact.url },
  ];

  /**
   * 画面遷移実施処理
   * @param path
   */
  const movePage = (path: string) => {
    history.push(path);
  };

  return (
    <>
      {isResponsible && (
        <HeaderDesktop headerMenuList={headerMenuList} movePage={movePage} />
      )}
      {!isResponsible && (
        <HeaderMobile headerMenuList={headerMenuList} movePage={movePage} />
      )}
    </>
  );
};

export default Header;
