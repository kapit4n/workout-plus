import Categories from "../components/Categories";
import { useAppSelector } from '../redux/configureStore'
import { selectCategories, selectSelectedCategory } from "../redux/reducers/categories";

const CategoriesContainer: React.FC = () => {
  const categories = useAppSelector(selectCategories)
  const selectedCategory = useAppSelector(selectSelectedCategory)
  console.log(categories)
  console.log("Container example")

  return (
    <Categories categories={categories} selectedCategory={selectedCategory}>
    </Categories>
  );
}
 
export default CategoriesContainer;