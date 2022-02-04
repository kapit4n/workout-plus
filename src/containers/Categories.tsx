import Categories from "../components/Categories";
import { useAppSelector } from '../redux/configureStore'
import { selectCategories } from "../redux/reducers/categories";


const CategoriesContainer: React.FC = () => {
  const categories = useAppSelector(selectCategories)

  return (
    <Categories categories={categories}>
    </Categories>
  );
}
 
export default CategoriesContainer;