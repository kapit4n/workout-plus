import { useAppSelector } from "../redux/configureStore";
import { selectSelectedCategory } from "../redux/reducers/categories";
import { selectCounter } from "../redux/reducers/sprintIntervals";


const Result: React.FC = () => {

  const selectedCategory = useAppSelector(selectSelectedCategory)
  const counter = useAppSelector(selectCounter)

  return (
    <div style={{width: '100%', fontSize: '3rem', justifyContent: 'center', display: 'flex' }}>
      <div style={{margin: '2rem'}}>
       {selectedCategory}
      </div>
      <div style={{margin: '2rem'}}>
       {counter}
      </div>
    </div>
  );
}

export default Result;