import styles from './Assessment.module.css';

const SectionHeader = ({ title }) => {
  return <div className={styles.sectionHeader}>{title}</div>;
};

export default SectionHeader;
