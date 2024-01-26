import Contents_Card from '@/components/Contents_Card/Contents_Card';
import Dropdown from '@/components/Dropdown/Dropdown';
import styles from '@/pages/AIServicePage/AIServicePage.module.css';
import clsx from 'clsx';
import { useState } from 'react';

const AIServicePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const serviceFilter = [
    '전체',
    '이미지AI',
    '비디오AI',
    '오디오AI',
    '디자인AI',
    '언어모델',
    '기타',
  ];
  const handleFilter = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <div className={styles.container}>
      {/** TODO: 컴포넌트로 분리 */}
      <h1 className={styles.title}>AI 서비스 아카이브</h1>
      <h3 className={styles.subtitle}>
        현존하는 모든 AI 서비스를 한 눈에 확인해 보세요
      </h3>
      <div className={styles.filterContainer}>
        <div className={styles.serviceFilter}>
          {serviceFilter.map((filterName, i) => {
            return (
              <button
                onClick={() => handleFilter(i)}
                className={clsx(
                  styles.filterButton,
                  selectedIndex === i && styles.selectedFilter
                )}
              >
                {filterName}
              </button>
            );
          })}
        </div>
        <div>
          <Dropdown
            options={['전체요금', '무료', '부분유료', '유료']}
            name='요금'
          />
          <Dropdown options={['전체국가', '해외', '국내']} name='국가' />
        </div>
      </div>
      <Contents_Card />
    </div>
  );
};

export default AIServicePage;
