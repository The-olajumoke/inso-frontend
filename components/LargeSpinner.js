import styles from "@/styles/loader.module.css";

const LargeSpinner = () => {
  return (
    <div className={styles.ldsLargeRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LargeSpinner;
