import React from 'react';
import '../../App.css';

export default function Experience() {
  return (
    <div>
    <h2>EXPERIENCE</h2>
        <div class="entire-block">
        <ul className='work-experience'>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>Marsh McLennan</div>
                <div className='work-experience-position'>Software Developer</div>
                <div className='work-experience-dates'>Jan 2022 to Apr 2022</div>
                <div className='work-experience-description'>
                <p> - I tested my team's PEGA applications to make sure behaviour and functionality is as expected and issues are resolved
                <br></br> - I fixed issues and added new features to my team's PEGA applications based on feedback from end users
                <br></br> - I improved the team's testing process for three PEGA applications by creating automated test cases using the CodeCeptJS testing framework
                <br></br> - I participated in MMC Tech Hackathon with two other co-op students and two full-time employees where we created a prototype of a web app using MEAN stack and Electron that keeps track of the working location of each employee
                <br></br> - My team presented our hackathon idea to a panel of judges
                    </p>
                </div>
            </li>
            <br></br>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>Fundscraper Corp.</div>
                <div className='work-experience-position'>Software Developer</div>
                <div className='work-experience-dates'>May 2021 to Aug 2021</div>
                <div className='work-experience-description'>
                    <p> - I wrote and ran tests using PHPUnit for methods part of the company’s order process to verify the calculations in them are correct
                    <br></br> - I converted PHP code part of the company’s order process into TypeScript and ran tests using Jest to verify the calculations in the new code are
                                correct
                    <br></br> - I converted email string code for each method involved with email sending into Handlebars expressions and ran tests using PHPUnit to verify
                                correct email output
                    <br></br> - I debugged and fixed issues in code associated with the automated test failures
                    <br></br> - I added a web-vitals report in the console on one of the company’s websites
                    </p>
                </div>
            </li>
            <br></br>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>Bank of Montreal</div>
                <div className='work-experience-position'>Operations Analyst</div>
                <div className='work-experience-dates'>Sep 2020 to Dec 2020</div>
                <div className='work-experience-description'>
                    <p> - I resolved team’s issues related to their Excel files by updating obsolete VBA code. I also supported the team every month in completing close-end processes using SAP
                    <br></br> - I re-designed the team's HTML/CSS webpage used for SAP S/4HANA training resources by organizing tiles within headers, removing ”Other Useful Resources” section and adding a scrollbar
                    <br></br> - I developed 3 HTML/CSS/JavaScript based SharePoint webpages to create a General Ledger Account search engine portal allowing users to
                                search for and retrieve information of different General Ledger bank accounts 
                    <br></br> - I created a VBA Excel tool that allows users with limited HTML experience to edit the Notepad file of the SAP S/4HANA training webpage. I developed a Power Query Excel file that collects data from another Excel file located inside a SharePoint folder
                    <br></br> - I presented the work I have completed once every month to team members
                    <br></br> - I was nominated ”Star of the Week” for building the S4 Training Page Code Editor VBA Excel tool</p>
                </div>
            </li>
            <br></br>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>ATS Automation</div>
                <div className='work-experience-position'>Software Toolset Developer</div>
                <div className='work-experience-dates'>Jan 2020 to Apr 2020</div>
                <div className='work-experience-description'>
                <p> - I resolved team’s issues related to their Excel files by updating obsolete VBA code and using breakpoints 
                    <br></br> - I also automated various tasks in Excel with VBA, macros, VLOOKUP, command buttons and user forms, increasing my team’s productivity. I communicated progress for tasks through weekly meetings, ensuring team was prepared for upcoming tasks in the pipeline</p>
                </div>          
            </li>
            <br></br>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>Centra Industries</div>
                <div className='work-experience-position'>Quality Engineer</div>
                <div className='work-experience-dates'>May 2019 to Aug 2019</div>
                <div className='work-experience-description'>
                <p>- I reported daily on non-conformities such as damaged parts for each cell of the company using VBA, macros, pivot tables and VLOOKUP in
                     Microsoft Excel, reducing time spent on reporting by 20% 
                <br></br> - I coordinated an audit system by analyzing information such as the organization of equipment and data sheets, and ensuring the successful completion of work orders, which assisted in the decision-making process 
                <br></br> - I supported my team with various tasks using great attention to detail such as operating the company's coordinate measuring machine and verifying the
                            quality of manufactured parts</p>
                </div>
            </li>
    </ul>
    </div>
  </div>

    )
}