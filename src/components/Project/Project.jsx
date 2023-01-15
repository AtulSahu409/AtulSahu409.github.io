import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "./Project.module.css";
import Capture from '../../assets/Capture.png';
import Capture1 from '../../assets/Capture1.png';
import Capture2 from '../../assets/Capture2.png';
// import Capture3 from "../Skill/image/Capture3.PNG"



const Projects = () => {
  return (
      <section className={styles.project} id="Projects" >
        <div className={styles.content}>
          <div className={styles.title}>
            <span>My Projects</span>
          </div>
          {/* upper group */}
          <div className={styles.boxes}>
            {/* first project */}
            <div className={styles.box}>
              <div className={styles.icon}>
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className={styles.imgs}
                  src={Capture}
                  alt=""
                />
              </div>
              <div className={styles.topic}>Tripvillas</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}>
                <p>
                    
                    This is the clone project of Tripvillas website. Tripvillas is one of Asia's largest Holiday Home Rental Companies.
              
              </p></div>
              <p>
                Teckstack:Redux | JavaScript | React | CSS | ChakraUI
              </p>
              </div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/soumitra-dey/Tripvillas-Clone"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="https://tripvillas-2022.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>
            
            {/* second project */}
            <div className={styles.box} id="box">
              <div className={styles.icon}>
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className={styles.imgs}
                  src={Capture1}
                  alt=""
                />
              </div>
              <div className={styles.topic}>Zoomcar</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}>
                <p>
            
                Zoomcar: Self-Drive car rental. The new way to rent a car. From planning a trip outside the city to moving around inside one, a new era of freedom is here with Zoomcar – India’s premier self-drive car rental.
              </p></div>
              <p>
                Teckstack:Redux | JavaScript | React | CSS | ChakraUI
              </p>
              </div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/AtulSahu409/Zoom-Car"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="https://lovely-churros-b15a9a.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>
          </div>
      
      {/* below group */}
            <div className={styles.boxes}>
            {/* third project */}
            <div className={styles.box}>
              <div className={styles.icon}>
                <img className="imgs" src={Capture2} alt="" />
              </div>
              <div className={styles.topic}>MeanBuy</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}><p>
                
                Meanbuy is shopping E-commerce website where user can visit based on his requirement buy products such as clothing accessories like watches and electronic items
                 </p></div>
                 <p>
                Teckstack:Redux | JavaScript | React | CSS | ChakraUI
              </p>
              </div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/Anwar7411/melted-scale-2590"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="https://astonishing-valkyrie-bbc329.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>
          
              



            </div>
        </div>
      </section>
  
  );
};

export default Projects;