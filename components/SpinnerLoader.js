import styles from "@/styles/loader.module.css";

const SpinnerLoader = () => {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SpinnerLoader;
