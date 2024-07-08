
import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './faqpages.css'

const FAQPages = () => {
  return (
    <div>
      <div className="faq-container">
        <div className="faq-title-banner">
          <h1 className="faq-title">FAQ</h1>
          <p className="faq-title-description">
            Below are some questions we are commonly asked!
          </p>

          <nav className="social-links">
            <li className="social-link1">
              <a href="https://www.facebook.com/groups/ucdavisbadminton/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  height="36px"
                  fill="#333"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                    data-original="#000000"
                  />
                </svg>
              </a>
            </li>
            <li className="social-link2">
              <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fucdbadmintonclub%2F%3Fhl%3Den&is_from_rle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  height="36px"
                  fill="#333"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                </svg>
              </a>
            </li>
          </nav>
        </div>
      </div>

      <div className="faq-question1">
        <div className="faq-question1-banner">
          <h1 className="faq-question1-title">
            When and where are our practices?
          </h1>
          <p className="faq-question1-description">
            Our practice information for Fall Quarter 2024-2025 are: <br />
            Location: Hickey Gymnasium350 Howard Way, Davis, CA 95616 <br />{" "}
            Practice Times: <br />
            Monday: 9:30pm - 11:00pm <br />
            Wednesday: 7:30pm - 9:00pm <br />
            Friday: 7:30pm - 9:00pm
          </p>
        </div>
      </div>

      <div className="faq-question2">
        <div className="faq-question2-banner">
          <h1 className="faq-question2-title">How much are our practices?</h1>
          <p className="faq-question2-description">
            Here are our payments info: <br />
            Zelle: davisbadminton@gmail.com <br />
            Year Membership (UCD students only): $175
            <br />
            Quarter Membership (UCD students only): $65 <br />
            1-Time Drop-In: 10$ <br />
          </p>
        </div>
      </div>

      <div className="faq-question3">
        <div className="faq-question3-banner">
          <h1 className="faq-question3-title">
            What do our practices look like?
          </h1>
          <p className="faq-question3-description">
            Our practices follow an open-gym approach. Of the 8 courts that
            Hickey Gym offers, we separate courts depending on skill level for
            all members to be able to play. There are 'challenge courts' for
            higher level players, as well as designated 'rec courts' for casual
            members.
          </p>
        </div>
      </div>
    </div>
  );
}
export default FAQPages
