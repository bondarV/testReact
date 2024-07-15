import { useEffect } from 'React'
import { useSelector, useDispatch, } from 'react-redux';
import { fetchCountries, getCountries } from './redux/actions';

const App = () => {
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries());
        dispatch(getCountries());
        console.log(countries);
    }, [dispatch]);
  return (
    <>
     
    </>
  )
}

export default App
