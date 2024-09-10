import { FC } from 'react';
import Navbar from '../navbar/Navbar';
import SubMenu from '../submenu/SubMenu';
import Footer from '../footer/Footer';
import MainWrapper from '../main/MainWrapper';

const HomeWrapper: FC = () => {
    return (
        <>
            <Navbar />
            <SubMenu />
            <MainWrapper />
            <Footer />
        </>
    );
};

export default HomeWrapper;
