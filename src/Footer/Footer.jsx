import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-in-flex'>
          <div className='links'>
            <h4>Sinauw</h4>
            <p>Any feedback or questions? <br /> Contact us on our social media</p>
            <ul className='link-ul'>
              <li><i class='bx bxl-facebook'></i></li>
              <li><i class='bx bxl-twitter' ></i></li>
              <li><i class='bx bxl-instagram' ></i></li>
            </ul>
          </div>

          <div className='foot-grid'>
            <div className='menu'>
              <h4>Menu</h4>
              <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Webinar</li>
              </ul>
            </div>

            <div className='service'>
              <h4>Servises</h4>
              <ul>
                <li>Materials Update</li>
                <li>Trusted Mentor</li>
                <li>Free E-book</li>
                <li>Meeting</li>
              </ul>
            </div>

            <div className='inform'>
              <h4>Futher Information</h4>
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className='apps'>
              <h4>Apps Download</h4>
              <ul>
                <li>Google Play Store</li>
                <li>App Store</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='copy'>
          <p>Copyright Ⓒ 2021 Sinauw. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
