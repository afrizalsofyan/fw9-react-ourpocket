import React from 'react'
import {Link} from 'react-router-dom'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import ImagePhone1 from '../assets/images/img/png-phone.png'
import ImagePhone2 from '../assets/images/img/png-phone2.png'
import Icon1 from '../assets/images/icons/icon1.svg'
import Icon2 from '../assets/images/icons/icon2.svg'
import Icon3 from '../assets/images/icons/icon3.svg'
import Icon4 from '../assets/images/img/img1.png'
import Icon5 from '../assets/images/img/img4.png'
import Icon6 from '../assets/images/img/img3.png'
import Logo1 from '../assets/images/icons/company_logo1.svg'
import Logo2 from '../assets/images/icons/company_logo2.svg'
import Logo3 from '../assets/images/icons/company_logo3.svg'
import Logo4 from '../assets/images/icons/company_logo4.svg'
import Logo5 from '../assets/images/icons/company_logo5.svg'
import Logo6 from '../assets/images/icons/company_logo6.svg'
import { FiDownload, FiLock, FiPhone } from 'react-icons/fi'

function LandingPage() {
    const [isShowMenu, setShowMenu] = React.useState(false)
  return (
    <>
        <HelmetProvider>
            <Helmet>
                <title>OPo</title>
            </Helmet>
        </HelmetProvider>
        <header className="pad-t-60 bg-header-1">
            <div className="container-box">
                <div className="btn-collapse-position">
                    <div>
                        <span className="logo-txt-blue">
                            OurPocket
                        </span>
                    </div>
                    <div onClick={()=>setShowMenu(!isShowMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </div>
                </div>
                {isShowMenu ? <nav className="banner-position-1 mar-t-50">
                    <div>
                        <Link to='/auth/login' className="btn-custom-white mar-r-20 link-rm-line">Login</Link>
                        <Link to='/auth/register' className="btn-custom-blue link-rm-line">Sign Up</Link>
                    </div>
                </nav> : null}
                <nav className="banner-position-1 nav-menu">
                    <div>
                        <span className="logo-txt-blue">
                            OurPocket
                        </span>
                    </div>
                    <div>
                        <Link to='/auth/login' className="btn-custom-white mar-r-20 link-rm-line">Login</Link>
                        <Link to='/auth/register' className="btn-custom-blue link-rm-line">Sign Up</Link>                        
                    </div>
                </nav>
                <div className="content-position-v1">
                    <div className="text-content-banner">
                        <div className="width-100">
                            <span className="fnt-header">Awesome App For Saving <span className="txt-color-blue">Time.</span></span>
                            <p className="fnt-paragraph">We bring you a mobile app for banking problems that
                            oftenly wasting much of your times.</p>
                        </div>
                        <Link to='/auth/register' className="btn-try-blue link-rm-line">Try It Free</Link>
                    </div>
                    <div className="bg-img-1">
                        <img className="width-img-banner-1" src={ImagePhone1} alt="imgphone1" width="100%" height="100%"/>
                    </div>
                </div>
            </div>
        </header>
        <section className="bg-scnd">
            <div className="container-box">
                <main className="pad-y-80">
                    <div className="mar-b-70">
                        <h1 className="fnt-header txt-ctr">
                            <span className="txt-color-blue">About</span> the Application.
                        </h1>
                        <p className="fnt-paragraph txt-ctr width-50 mar-x-auto">We have some great features from the application and it’s totally free to use by all users around the world.</p>
                    </div>
                    <div className="about-section-v1">
                        <div className="card-1">
                            <div className="flx-row mar-x-auto wd-100 jstfy-center">
                                {/* <img src={} alt="iconPhone.svg" className="" width="35%" height="100%"/> */}
                                <span className="bg-rounded-icon pad-25 rad-100 mar-b-20">
                                    <FiPhone size={30}/>
                                </span>
                            </div>
                            <p className="txt-ctr fnt-paragraph">24/7 Support</p>
                            <p className="txt-ctr fnt-desc">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                        </div>
                        <div className="card-1">
                            <div className="flx-row mar-x-auto wd-100 jstfy-center">
                                <span className="bg-rounded-icon pad-25 rad-100 mar-b-20">
                                    <FiLock size={30}/>
                                </span>
                                {/* <img src={Icon2} alt="iconPhone.svg" className="" width="35%" height="100%"/> */}
                            </div>
                            <p className="txt-ctr fnt-paragraph">Data Privacy</p>
                            <p className="txt-ctr fnt-desc">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                        </div>
                        <div className="card-1">
                            <div className="flx-row mar-x-auto wd-100 jstfy-center">
                                <span className="bg-rounded-icon pad-25 rad-100 mar-b-20">
                                    <FiDownload size={30}/>
                                </span>
                                {/* <img src={Icon3} alt="iconPhone.svg" className="" width="35%" height="100%"/> */}
                            </div>
                            <p className="txt-ctr fnt-paragraph">Easy Download</p>
                            <p className="txt-ctr fnt-desc">Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                        </div>
                    </div>
                </main>
            </div>
        </section>
        <section className="bg-prmry">
            <div className="container-box">
                <main className="partner-section-v1 pad-y-80">
                    <div className="flx-column">
                        <h1 className="fnt-header">100+ <span className="txt-color-blue">Trusted</span> Partners.</h1>
                        <p className="fnt-paragraph">We have reached global level and have 100+<br/>
                        brand partners around the globe.</p>
                    </div>
                    <div className="flx-col jstfy-center">
                        <div className="partner-section-v1">
                            <img src={Logo1} alt="partnerlogo" width="30%" height="100%"/>
                            <img src={Logo2} alt="partnerlogo" width="30%" height="100%"/>
                            <img src={Logo3} alt="partnerlogo" width="30%" height="100%"/>
                        </div>
                        <div className="partner-section-v1">
                            <img src={Logo6} alt="partnerlogo" width="30%" height="100%"/>
                            <img src={Logo4} alt="partnerlogo" width="30%" height="100%"/>
                            <img src={Logo5} alt="partnerlogo" width="30%" height="100%"/>
                        </div>
                    </div>
                </main>
            </div>
        </section>
        <section className="bg-scnd">
            <div className="container-box">
                <div className="content-great pad-y-80">
                    <div className="align-center-item bg-img-1">
                        <img className="width-img-great-1" src={ImagePhone2} alt="imgphone2" width="100%" height="100%"/>
                    </div>
                    <main className="text-content-banner gap-20">
                        <h2 className="fnt-header">All The <span className="txt-color-blue">Great</span> <br/> Zwallet Features.</h2>
                        <div className="card-1 pad-25">
                            <span className="fnt-paragraph fnt-bold"><span className="txt-color-blue">1.</span> Small Fee</span>
                            <br/>
                            <span className="fnt-desc">We only charge 5% of every success transaction done in Zwallet app.</span>
                        </div>
                        <div className="card-1 pad-25">
                            <span className="fnt-paragraph fnt-bold"><span className="txt-color-blue">2.</span> Data Secured</span>
                            <br/>
                            <span className="fnt-desc">All your data is secured properly in our system and it's encrypted.</span>
                        </div>
                        <div className="card-1 pad-25">
                            <span className="fnt-paragraph fnt-bold"><span className="txt-color-blue">3.</span> User Friendly</span>
                            <br/>
                            <span className="fnt-desc">Zwallet come up with modern and sleek design and not complicated.</span>
                        </div>
                    </main>
                </div>
            </div>
        </section>
        <section className="bg-prmry">
            <div className="container-box">
                <div className="pad-y-80">
                    <div className="mar-b-70">
                        <h2 className="fnt-header txt-ctr">What Users are <span className="txt-color-blue">Saying.</span></h2>
                        <p className="fnt-paragraph txt-ctr width-50 mar-x-auto">We have some great features from the application and it’s totally free to use by all users around the world.</p>
                    </div>
                    <main className="about-section-v1">
                        <div className="card-1 flx-column">
                            <div className="width-25 flx-row mar-x-auto">
                                <img src={Icon4} alt="icon4.png" width="100%" height="100%" />
                            </div>
                            <p className="txt-ctr fnt-paragraph fnt-bold">Sherina Chaw</p>
                            <p className="txt-ctr fnt-desc">“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
                        </div>
                        <div className="card-1 flx-column">
                            <div className="width-25 flx-row mar-x-auto">
                                <img src={Icon5} alt="icon5.png" width="100%" height="100%" />
                            </div>
                            <p className="txt-ctr fnt-paragraph fnt-bold">Jessica Mera</p>
                            <p className="txt-ctr fnt-desc">“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”</p>
                        </div>
                        <div className="card-1 flex-column">
                            <div className="width-25 flx-row mar-x-auto">
                                <img src={Icon6} alt="icon6.png" width="100%" height="100%" />
                            </div>
                            <p className="txt-ctr fnt-paragraph fnt-bold">Robert Chandler</p>
                            <p className="txt-ctr fnt-desc">“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”</p>
                        </div>
                    </main>
                </div>
            </div>
        </section>
        <footer className="bg-blue">
            <div className="container-box">
                <div className="pad-y-80">
                    <span className="logo-txt-white mar-b-30">OurPocket</span>
                    <div className="width-25">
                        <div className="wd-100">
                            <p className="fnt-footer">Simplify financial needs and saving much time in banking needs with one single app.</p>
                        </div>
                    </div>
                    <hr className="mar-t-50 mar-b-30 border-new-color"/>
                    <div className="footer-copyright copyrigth-text">
                        <span>2020 OurPocket. All right reserved.</span>
                        <div className="footer-copyright gap-20">
                            <span>+62 5637 8882 9901</span>
                            <span className="mar-r-40">contact@OurPocket.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default LandingPage