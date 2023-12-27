import styles from './squares-background.module.scss';

const MAX_BLOCK_SIZE = 120;
const MIN_BLOCK_SIZE = 20;

const blockSizes: number[] = Array.from(Array(40)).map(_ => {
  return Math.floor(Math.random()*(MAX_BLOCK_SIZE - MIN_BLOCK_SIZE) + MIN_BLOCK_SIZE)
});

export const SquaresBackground = () => {
  return (
    <div className={styles.container}>
      {blockSizes.map((blockSize, index) => (
        <div key={index}
             style={{
               width: blockSize,
               height: blockSize
             }}
             className={styles.block}>
          <div/>
        </div>
      ))}
    </div>
  );
}
