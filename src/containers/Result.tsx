import { useAppSelector } from "../redux/configureStore";
import { selectSelectedCategory } from "../redux/reducers/categories";
import { selectCounter } from "../redux/reducers/sprintIntervals";


const Result: React.FC = () => {

  const selectedCategory = useAppSelector(selectSelectedCategory)
  const counter = useAppSelector(selectCounter)

  return (
    <div>
      {selectedCategory}
      {counter}
    </div>
  );
}

export default Result;