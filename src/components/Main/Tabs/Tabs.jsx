import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {debounceRaf} from '../../../utils/debounce';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {assignId} from '../../../utils/generateRandomId';
// import {ReactComponent as SaveIcon} from './img/save.svg';
import {ReactComponent as HomeIcon} from './img/icons/home.svg';
import {ReactComponent as TopIcon} from './img/icons/top.svg';
import {ReactComponent as BestIcon} from './img/icons/best.svg';
import {ReactComponent as HotIcon} from './img/icons/hot.svg';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);


  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              просмотренные
            <ArrowIcon width={24}/>
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <button className={style.btn}
                onClick={() => {}}>{value}
                {Icon && <Icon />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  addTitle: PropTypes.func,
  list: PropTypes.array,
  setList: PropTypes.func,
};

