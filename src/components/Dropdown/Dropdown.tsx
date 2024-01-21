import { useState } from 'react';
import styles from '@/components/Dropdown/Dropdown.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';
import clsx from 'clsx';

const Dropdown = ({ options, name }: { options: string[]; name: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
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
