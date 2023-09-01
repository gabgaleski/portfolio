import React from "react";
import { badgesOther, badgesFront, badgesBack, badgesTest } from '../utils/badgesData';

function Skills() {
    return ( 
      <section class="skills-section" id="skills">
            <h2>Skills & Tools</h2>
            <section class="all-skills">
                <section class="skills-container" id="front">
                    <h4>Front-End</h4>
                    <ul>
                    {badgesFront.map((badage) => (
                            <li>
                                <img src={badage.icon} alt="badageImg" />
                                <p>{badage.name}</p>
                            </li>

                        ))}
                    </ul>
                </section>
                <section class="skills-container" id="back">
                    <h4>Back-End</h4>
                    <ul>
                    {badgesBack.map((badage) => (
                               <li>
                                 <img src={badage.icon} alt="badageImg" />
                                 <p>{badage.name}</p>
                              </li>
                        ))}
                    </ul>
                </section>
                <section class="skills-container">
                    <h4>Tests</h4>
                    <ul>
                    {badgesTest.map((badage) => (
                            <li>
                              <img src={badage.icon} alt="badageImg" />
                              <p>{badage.name}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <section class="skills-container">
                    <h4>Other</h4>
                    <ul>
                        {badgesOther.map((badage) => (
                            <li>
                              <img src={badage.icon} alt="badageImg" />
                              <p>{badage.name}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </section>
     );
}

export default Skills;