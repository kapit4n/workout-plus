import { useDispatch } from "react-redux";
import { addCounter, SprintInterval } from "../redux/reducers/sprintIntervals";

interface SprintIntervalProps {
  intervals: SprintInterval[]
}

const SprintIntervalComponent: React.FC<SprintIntervalProps> = ({ intervals }) => {

  const dispatch = useDispatch()

  const newLocal = (val: number) => dispatch(addCounter(val));

  return (
    <>
      {intervals.map(i => <button key={i.value} onClick={() => newLocal(i.value)}>{i.value}</button>)}
    </>
  );
}

export default SprintIntervalComponent;