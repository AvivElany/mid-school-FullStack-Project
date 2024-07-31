import './Footer.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaRegCopyright } from 'react-icons/fa6'
import Logo from '../Logo/Logo'

export default function Footer() {
  return (
    <div className='Footer'>
      <footer className='border-top pt-4'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <Logo />
                <p className="mb-30 footer-desc pt-2">
                  Mid School הינו אתר המדמה אתר בית ספר, במקרה זה חטיבת ביניים, בעל תוכן ומערכת התחברות ועמודים עפ"י הרשאה. כולי תקווה שתהנו מהפרויקט!
                </p>
                <p>
                  Copyright Mid School <FaRegCopyright />, <b>{(new Date().getFullYear())}</b> All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Services</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.hackeru.co.il/" target='blank' className="text-decoration-none">מכללת האקר-יו</a>
                  </li>
                  <li>
                    <a href="https://www.gov.il/he/departments/ministry-of-education/govil-landing-page" target='blank' className="text-decoration-none">משרד החינוך</a>
                  </li>
                  <li>
                    <a href="https://openai.com/chatgpt/" target='blank' className="text-decoration-none">chatGPT</a>
                  </li>
                  <li>
                    <a href="https://www.nasa.gov/" target='blank' className="text-decoration-none">NASA</a>
                  </li>
                  <li>
                    <a href="https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%95%D7%97%D7%93:%D7%90%D7%A7%D7%A8%D7%90%D7%99" target='blank' className="text-decoration-none">ערך אקראי</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div>
                <h4>Social Media</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://github.com/AvivElany" target='blank' className="text-decoration-none">
                      <span><FaGithub size={15} className='SocialMediaIcon'/>&nbsp;</span>
                      Personal GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/AvivElany/" target='blank' className="text-decoration-none">
                      <span><FaFacebook size={15} className='SocialMediaIcon'/>&nbsp;</span>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/AvivElany/" target='blank' className="text-decoration-none">
                      <span><FaInstagram size={15} className='SocialMediaIcon'/>&nbsp;</span>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/avivelany/" target='blank' className="text-decoration-none">
                      <span><FaLinkedinIn size={15} className='SocialMediaIcon'/>&nbsp;</span>
                      Linked In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8 mx-auto">
              <div>
                <h4>Newsletter</h4>
                <div>
                  <label htmlFor="Newsletter" className="form-label">For selling your soul to the devil</label>
                  <div className='d-flex'>
                    <input type="text" className="form-control form-control-sm me-2" placeholder="Enter Your Email / Soul" />
                    <button className="btn btn-sm btn-info">selling</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
