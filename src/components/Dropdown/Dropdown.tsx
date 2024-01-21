import { useState } from 'react';
import styles from '@/components/Dropdown/Dropdown.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';

const Dropdown = ({ options, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
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
