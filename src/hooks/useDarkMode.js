import { useLocalStorage } from './useLocalStorage'

const useDarkForm = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode Selected')

  return [darkMode, setDarkMode]

}


export default useDarkForm;