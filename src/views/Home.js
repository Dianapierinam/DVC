// import{Header} from "../components/header.js"
// import{Footer} from "../components/header.js"
import data from '../data/dataset.js';
import {navigateTo} from '../router.js';


export function Home(props) {
    const HomeView = document.createElement('div');
    HomeView.textContent = 'Welcome to the home page!';
    return HomeView;
}

export default Home;







