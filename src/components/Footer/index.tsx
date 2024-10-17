import { AppProvider } from '@/contexts/AppContext';
import React, { useContext } from 'react';
import { FiBookOpen, FiLink, FiSlack } from 'react-icons/fi';


const Footer = (): JSX.Element => {

    const { theme } = useContext(AppProvider);

    return (
        <footer className={`pt-5 pb-3 footer ${theme === 'dark' ? 'bg-dark text-white' : 'border-top'}`}>
            <div className="container text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 mb-4">
                        <h5 className='fw-bold'>Taojaa Developers Guide</h5>
                        <p>All you need to start building amazing e-commerce experiences.</p>
                        {/* Social Links */}
                        <p className='mb-1'><a href=''><FiSlack /> Join the <span className='text-primary'>developers slack community</span></a></p>
                        <p className='mb-1'><a href=''><FiBookOpen /> See latest <span className='text-primary'>release notes</span></a></p>
                        <p className='mb-1'><a href='https://taojaa.com'><FiLink /> Visit <span className='text-primary'>Taojaa's website</span></a></p>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h6 className='fw-bold'>Resources</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">API References</a></li>
                            <li><a href="#!">Blog</a></li>
                            <li><a href="#!">Partners Guide</a></li>
                            <li><a href="#!">Help & support</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h6 className='fw-bold'>More</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">Privacy policy</a></li>
                            <li><a href="#!">Terms of service</a></li>
                            <li><a href="#!">About Taojaa</a></li>
                            <li><a href="#!">Careers</a></li>
                            <li><a href="#!">Press and media</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                <small>
                    © {new Date().getFullYear()} Copyright. <a href="https://developers.taojaa.com/"> Taojaa Developers Guide</a>
                </small>
            </div>
        </footer>
    );
};

export default Footer;