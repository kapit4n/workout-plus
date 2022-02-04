import SprintInterval from "../components/SprintIntervals";
import { useAppSelector } from "../redux/configureStore";
import { selectSprintIntervals } from "../redux/reducers/sprintIntervals";


const SprintIntervalsContainer: React.FC = () => {
  
  const sprintIntervals = useAppSelector(selectSprintIntervals)
  
  return (
    <SprintInterval intervals={sprintIntervals} />
  );
}
 
export default SprintIntervalsContainer;