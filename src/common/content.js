import "./content.css";
import image from "../assets/Someday, Alena Aenami.jpeg";
import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/github.png";
import linkedInIcon from "../assets/linkedin.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  //   const background = require("../assets/IMG_3942.jpeg");
  return (
    <>
      <div className="resume">
        <div className="header">
          <div className="title">
            <h1>戴家泓 / Charlie Tai</h1>
            <p className="little-name">帶著社工魂的工程師</p>
          </div>
        </div>
        <div className="content">
          <div className="content-box">
            <h2>Summary</h2>
            <p>介紹</p>
            <p>
              最初因為工作需要接觸了EXCEL的各種函式，發現自己對於數字跟邏輯有興趣，為此萌生了成為前端工程師的夢想，於是，我從HTML/CSS/JS開始自學，後續加入了資策會系統性的學習了React/Git/Node.js/MySQL等等語言，最終成了一位前端工程師，目前因應公司需求開始接觸Angular，同時學習了強型別的TypeScript。
            </p>
            <p>
              在正式工作後，更發現自己轉職夢想是正確的，因為我能為了開發一個複雜的功能，從早上8點到晚上8點，甚至假日都在研究該如何實現該功能。
            </p>
            <p>
              現行的短期目標是，希望自己能夠重拾React，並加深Express，讓自己能夠成為一名專精兩種框架的前端工程師
            </p>
            <div className="iconBar">
              <a
                href="https://github.com/jack755051?tab=repositories"
                target="_blank"
              >
                <img src={githubIcon} alt="我的github" className="icon"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/charlie-tai-6076a3114/"
                target="_blank"
              >
                <img
                  src={linkedInIcon}
                  alt="我的linkedIn"
                  className="icon"
                ></img>
              </a>
            </div>
          </div>
          <div className="content-box">
            <h2>Skills</h2>
            <p className="chinese">技能</p>

            <div className="skills">
              <div>React</div>
              <div>
                <div class="right">
                  <input id="ck1" type="checkbox" checked />

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked />

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>
                </div>
              </div>
            </div>
            <div className="skills">
              <div>Angular</div>
              <div>
                <div class="right">
                  <input id="ck1" type="checkbox" checked />

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked />

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" checked />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" checked />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>
                </div>
              </div>
            </div>
            <div className="skills">
              <div>HTML/CSS</div>
              <div>
                <div class="right">
                  <input id="ck1" type="checkbox" checked />

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked />

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>
                </div>
              </div>
            </div>
            <div className="skills">
              <div>Git</div>
              <div>
                <div class="right">
                  <input id="ck1" type="checkbox" checked />

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked />

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" checked />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" checked />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>
                </div>
              </div>
            </div>
            <div className="skills">
              <div>Node.js</div>
              <div>
                <div class="right">
                  <input id="ck1" type="checkbox" checked />

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked />

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" checked />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" checked />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>
                </div>
              </div>
            </div>
            <div className="skills">
              <div>MySQL</div>
              <div>
                <div class="right">
                  <input id="ck1" type="checkbox" checked />

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked />

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" checked />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>
                </div>
              </div>
            </div>
            <div className="skills">
              <div>MangoDB</div>
              <div>
                <div class="right">
                  <input id="ck1" type="checkbox" checked />

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked />

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="content-box">
            <h2>Experience</h2>
            <p>經驗</p>
            <div className="job">
              <h3>前端工程師 / 哈瑪星科技股份有限公司</h3>
              <h4>Oct. 2021 - Present</h4>
              <ul>
                <li>使用Angular框架進行開發</li>
                <li>會同設計師共同創建友好的用戶介面</li>
                <li>與後端工程師討論資料結構，串接後端工程師提供的API</li>
                <li>曾經參與許多政府專案維護與開發，如：</li>
                <li>
                  原住民族委員會住宅業務電子化系統、知識體系、台北市政府志工網等等...
                </li>
              </ul>
            </div>
          </div>

          <div className="content-box">
            <div className="job">
              <h3>學生 / 資策會</h3>
              <h4>Mar. 2021 - Oct. 2021</h4>
              <ul>
                <li>與同組夥伴共同完成一個簡易購物網站</li>
                <li>擁有第三方登入、購物車等等功能。</li>
              </ul>
            </div>
          </div>

          <div className="content-box">
            <h2>Education</h2>
            <p>教育程度</p>
            <div className="education">
              <h3>國立東華大學，民族社會工作學系</h3>
              <h4>Sep. 2014 - Jun. 2018</h4>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
}
