import {BoidBackground} from '../boids/boids-background';
import {SquaresBackground} from '../squares/squares-background';
import {useBackgroundStore} from '../../../store/background-store';

export const Background = () => {
  const { backgroundType } = useBackgroundStore();

  return (
    <>
      <BoidBackground activated={backgroundType === 'boids'} />
      <SquaresBackground activated={backgroundType === 'squares'} />
    </>
  )
}
