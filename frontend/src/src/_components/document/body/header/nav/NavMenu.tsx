import { Space } from 'antd';

const NavMenu: React.FC = () => {

    return (
        <>
            <Space className="ant-mega-menu ">
                    <nav role="navigation">
                        
                        <ul className="main-nav">
                            <li className="top-level-link">
                                <a><span>Home</span></a>
                            </li>

                            <li className="top-level-link">
                                <a className="mega-menu"><span>Products</span></a>
                                <div className="sub-menu-block">
                                    <div className="row">
                                        ROW
                                    </div>

                                    <div className="row banners-area">
                                        ROW BANNERS
                                    </div>

                                </div>
                            </li>
                            <li className="top-level-link">
                                <a><span>Services</span></a>
                            </li>
                            <li className="top-level-link">
                                <a className="mega-menu"><span>About</span></a>
                                <div className="sub-menu-block">
                                    <div className="row">
                                            ROW
                                        </div>

                                        <div className="row banners-area">
                                            ROW BANNERS
                                        </div>

                                </div>
                            </li>
                            <li className="top-level-link">
                                <a><span>Contact</span></a>
                            </li>
                        </ul>
                    </nav>
            </Space>
        </>
    );
}
export { NavMenu };
