import { useEffect, useRef, useState } from 'react';
import styles from '@/components/Dropdown/Dropdown.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';
import clsx from 'clsx';

const Dropdown = ({ options, name }: { options: string[]; name: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement; // TODO 단언문 삭제
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={clsx(
          styles.dropdownButton,
          selectedOption && styles.seletedDropdown
        )}
        onClick={toggleDropdown}
      >
        {selectedOption || `${name}`}
        {isOpen ? (
          <RiArrowDropUpLine className={styles.dropdownArrow} />
        ) : (
          <RiArrowDropDownLine className={styles.dropdownArrow} />
        )}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option: string) => (
            <li
              key={option}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
