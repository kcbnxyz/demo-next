import layoutStyles from '../styles/Layout.module.css'
import Meta from './Meta';
import Search from './Search';

const Layout = ({ children }) => {
    return ( <
        >
        <
        Meta / >

        <
        div className = { layoutStyles.container } >
        <
        main className = { layoutStyles.main } > { children } <
        /main>

        <
        /div> <
        />
    );
};

export default Layout;