import Head from 'next/head'
import NavBar from '../components/navbar'
import Image from 'next/image'
import { TextField } from '../components/textfield'
import { ResetPasswordForm } from '../components/forms/resetPasswordForm'

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Product Index: Create new password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='auth-screens'>

          <div className="side-by-side">
          <div className="leftpane">
            <div className="content">
              <h2 className=''>Doing business just got easier</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus unde esse incidunt vitae excepturi, optio tempora corporis tempore voluptate.</p>
            </div>

          </div>
          <div className="rightpane">
            <div className="content">
              <div className="logo-box">
                <img src="/images/logo.png" alt="Product Index Logo" />
              </div>
              <h3 className='form-title'>Create new password</h3>
              {/* <p>Glad to have you back! Create a new password for your account.</p> */}
              <ResetPasswordForm />
            </div>
          </div>

        </div>
      </main>

      <footer>
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
      </footer>

      <style jsx>{`
        .auth-screens {
          min-height: 97vh;
        }
        .auth-screens .side-by-side {
          height: 100%;
        }
        .auth-screens .leftpane  p{
          color: white;
          font-size: 1.2rem;
        }
        .logo-box {
          margin-bottom: 1.5rem;
        }

        .leftpane {
          width: 55%;
          padding: 8rem 0 5% 5%;
          background-color: #13C8C4;
        }

        .form-title {
          margin-bottom: 1rem;
        }
        .leftpane .content {
            max-width: 450px;
        }
        .rightpane .content {
          max-width: 450px;
        }

        .rightpane {
          width: 45%;
          padding-right: 5%;
          padding: 4rem 5% 5% 1.5rem;
        }
        .leftpane h2 {
          color: white;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .leftpane {
            display: none;
  
            
          }
          .rightpane {
            width: 100%;
          }
        }
  
      `}</style>
    </>
  )
}