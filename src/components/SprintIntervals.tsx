import { useDispatch } from "react-redux";
import { addCounter, SprintInterval } from "../redux/reducers/sprintIntervals";

interface SprintIntervalProps {
  intervals: SprintInterval[]
}

const SprintIntervalComponent: React.FC<SprintIntervalProps> = ({ intervals }) => {

  const dispatch = useDispatch()

  const newLocal = (val: number) => dispatch(addCounter(val));

  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', margin: '2rem' }}>
      {intervals.map(i => <button style={{width: '30%', height: '10rem'}} key={i.value} onClick={() => newLocal(i.value)}>{i.value}</button>)}
    </div>
  );
}

export default SprintIntervalComponent;
