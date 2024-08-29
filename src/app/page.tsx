import JobItem from "@/components/JobItem";
import Section from "@/components/Section";
import TechStack from "@/components/TechStack";
import TechStackItem from "@/components/TechStackItem";
import EducationStack from "@/components/EducationStack";
import EducationItem from "@/components/EducationItem";
import Image from "next/image";
import Hero from "@/assets/images/hero.png";

import ProfileImage from "@/assets/images/profile.jpeg";
import JobStack from "@/components/JobStack";
import ProjectStack from "@/components/ProjectStack";
import ProjectItem from "@/components/ProjectItem";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4">
          <h1>Build, ship and scale fast ...</h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl">
            With almost two decades of experience, I can help you choose the
            right technolgy stack, build and ship your product faster.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
              target="_blank"
              className="flex justify-center items-center bg-black text-white px-4 py-2 rounded-md border-2 border-black hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            >
              Next.js
            </a>
            <a
              href="https://github.com/surjithctly/astroship"
              rel="noopener"
              target="_blank"
              className="flex justify-center items-center px-4 py-2 bg-white rounded-md text-indigo-500 border-2 border-indigo-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            >
              Laravel
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <picture>
            <Image
              src={Hero}
              alt="Astronaut in the air"
              width="520"
              height="424"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <Section title="About me">
        <div className="css-1hqeloq">
          <div className="css-p6tyc6">
            <p>
              Having always had an interest in all things technical and it was
              natural for me to gravitate towards computers and coding. I have
              since 2001 coded in various programming languages, but have
              primarily applied myself towards coding robust PHP, and later the
              Laravel applications.
            </p>
            <p>
              I currently work as a senior fullstack developer contractor for a
              very young startup, and previously held various positions as a
              fullstack developer and team lead.
            </p>
            <p>
              I have strong technical experience and can able to code in various
              programming languages and can apply or transition between
              programming languages and frameworks when required and in support
              of the company or team. I have leveraged my coding abilities to
              build numerous products and solutions, and pride myself in not
              only being a problem solver that can work diligently on a problem
              towards finding and or building a solution, but also being an
              awesome and fun team member.
            </p>
            <p>
              I enjoy keeping myself in a good physical condition through
              exercise and participating in mountain biking, trail running and
              challenging workouts, and further value spending quality time with
              my wife and kids.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Employment History">
        <JobStack>
          <JobItem
            title="Senior Fullstack Developer"
            company="Independant Contractor"
            location="Remote"
            startDate="June 2024"
            endDate="present"
          >
            <p>
              Working fulltime in this role, I assume ownership of all web
              application development related functions, and work closely with
              medical professionals to develop new and innovating healthcare
              products and services.
            </p>
            <p>
              In support of this role I develop and maintain a patient centric
              Laravel web application for facilitating patient treatment and
              clinical records management.
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>Next.js</TechStackItem>
              <TechStackItem>AWS</TechStackItem>
              <TechStackItem>Google Analytics</TechStackItem>
              <TechStackItem>Tailwind CSS</TechStackItem>
              <TechStackItem>Node.js</TechStackItem>
              <TechStackItem>JavaScript</TechStackItem>
              <TechStackItem>GitHub</TechStackItem>
              <TechStackItem>GitHub Actions</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Freelance Fullstack Developer"
            company="Fueltronics"
            location="Remote"
            startDate="February 2022"
            endDate="present"
          >
            <p>
              My neighbor and I work over some weekend hackathons to build new
              and interesting solutions for his business, such as mobile and
              Laravel apps.
            </p>
            <p>
              Fueltronics is a fuel management solution where the traditional
              control system of commonly found fuel pumps are upgraded to a
              custom built IoT board. I have worked with the team to convert the
              IoT board from an Raspberry Pi board running the Python pump
              controller software locally, to an ESP32 board backed by an
              Android based laser scanner device running a custom React Native
              app.
            </p>
            <p>
              My contribution to the project is to build and maintain the
              Laravel backend, API, front-end and also the build the React
              Native mobile applications running on the Newland Android scanner.
              The solution is already being used in production at various sites
              nationally.
            </p>
            <TechStack>
              <TechStackItem>Angular</TechStackItem>
              <TechStackItem>Tailwind CSS</TechStackItem>
              <TechStackItem>Node.js</TechStackItem>
              <TechStackItem>Next.js</TechStackItem>
              <TechStackItem>Artificial Intelligence</TechStackItem>
              <TechStackItem>React Native</TechStackItem>
              <TechStackItem>Android</TechStackItem>
              <TechStackItem>Arduino</TechStackItem>
              <TechStackItem>Raspberry Pi</TechStackItem>
              <TechStackItem>Python</TechStackItem>
              <TechStackItem>GitHub</TechStackItem>
              <TechStackItem>GitHub Actions</TechStackItem>
              <TechStackItem>Amazon EC2</TechStackItem>
              <TechStackItem>Amazon S3</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Senior Full Stack Developer"
            company="nuvoteQ"
            location="Remote"
            startDate="October 2021"
            endDate="June 2024"
          >
            <p>
              As a fullstack developer I worked with project managers (PMs),
              other developers and user interface (UI/UX) designers to develop
              scalable and secure full-stack Laravel web applications.
            </p>
            <p>
              My primary duties included designing and developing the back end
              of the web applications using PHP, Laravel and Node.js and MySQL,
              and translating the front-end Figma desings into reusable
              functional front-end components using tech such as Blade,
              Livewire, Vue.js and Alpine.js.
            </p>
            <p>
              I was fortunate to have worked on several interesting projects
              with a very supportive and talented team, and closely with the
              client's marketing and technical teams. We succeeded in delivering
              numerous successful public facing products, some of which was high
              traffic that service thousands of daily users.
            </p>
            <p>
              Following Agile principles, tools and technologies like TDD, JIRA,
              BitBucket, AWS and Sentry enabled us to deliver high quality and
              performant web applications.
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>Node.js</TechStackItem>
              <TechStackItem>Vue.js</TechStackItem>
              <TechStackItem>Vuex</TechStackItem>
              <TechStackItem>Vuetify</TechStackItem>
              <TechStackItem>PHP</TechStackItem>
              <TechStackItem>Bitbucket</TechStackItem>
              <TechStackItem>Jira</TechStackItem>
              <TechStackItem>TDD</TechStackItem>
              <TechStackItem>Teamwork</TechStackItem>
              <TechStackItem>Amazon EC2</TechStackItem>
              <TechStackItem>Amazon S3</TechStackItem>
              <TechStackItem>Docker</TechStackItem>
              <TechStackItem>Machine Learning</TechStackItem>
              <TechStackItem>Artificial Intelligence</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="ICT Manager"
            company="Interstate Bus Lines"
            location="Bloemfontein, South Africa"
            startDate="January 2011"
            endDate="August 2021"
          >
            <p>
              As and ICT manager, I was tasked with taking ultimate
              responsibility of the ICT team and ICT related responsibilities in
              the company. My primary duties included leading the ICT team to
              serve the passengers, users and various stakeholders of the
              company.
            </p>
            <p>
              As a secondary function to my role, I was tasked with developing
              internally used systems and applications used by the HR, workshop
              and operations teams, including employee performance tracking,
              fleet management and quality control. Some of the systems was
              multitenant applications used not only by Interstate, but also the
              various subsidiaries and sister companies to Interstate.
            </p>
            <p>
              I leveraged PHP, CodeIgniter and later Laravel as the stack for
              the applications, and later rebuilt most of the older systems from
              C#,{" "}
              <a href="http://ASP.net" target="_blank">
                ASP.net
              </a>{" "}
              MVC and CodeIgniter to Laravel. Most of the systems is still in
              use today and continue to contribute to Interstate's amazing
              legacy.
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>JavaScript</TechStackItem>
              <TechStackItem>VMWare vSphere</TechStackItem>
              <TechStackItem>Azure</TechStackItem>
              <TechStackItem>Sage X3</TechStackItem>
              <TechStackItem>Active Directory</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Senior Developer"
            company="3 Quarks"
            location="Remote"
            startDate="December 2018"
            endDate="August 2021"
          >
            <p>
              3 Quarks a local startup company offered a unique medical practice
              management solutions, featuring patient clinical data management
              and real-time billing integration with most South African medical
              schemes.
            </p>
            <p>
              As the principle developer my role included maintaining the
              existing PHP and React codebases and developing the next iteration
              of the company's core product named Medbar. I was also responsible
              for looking after the various server and hosted systems.
            </p>
            <p>
              During my tenure I worked closely with vendors, healthcare service
              providers and pathology laboratories to build a full fledged
              multitenant patient centric clinical data management and realtime
              billing application. I also worked closely with the billing and
              admin team to onboard new medical practices, patients and migrate
              existing medical practices onto the new Medbar platform.
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>JavaScript</TechStackItem>
              <TechStackItem>PHP</TechStackItem>
              <TechStackItem>MySQL</TechStackItem>
              <TechStackItem>Vue.js</TechStackItem>
              <TechStackItem>Vuex</TechStackItem>
              <TechStackItem>Node.js</TechStackItem>
              <TechStackItem>Bootstrap</TechStackItem>
              <TechStackItem>SOAP</TechStackItem>
              <TechStackItem>REST</TechStackItem>
              <TechStackItem>SQL</TechStackItem>
              <TechStackItem>React</TechStackItem>
              <TechStackItem>Linux</TechStackItem>
              <TechStackItem>Nginx</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Network Administrator"
            company="Interstate Bus Lines"
            location="Bloemfontein, South Africa"
            startDate="October 2008"
            endDate="December 2010"
          >
            <p>
              In the network administrator role, I was responsible to oversee
              all IT related taks of the company, and to improve efficiency and
              drive down costs. The company at that time had several remote and
              isolated branches with limited interconnectivity, and I was
              required to build a small ICT team to serve the users and sites in
              all IT related systems.
            </p>
            <p>
              I was also tasked with coding various internally used tools and
              systems to import and collect sales data from ticket machines
              installed on each of the busses and ticket sales offices, and
              import the data into the CRM systems, and public facing web apps
              and websites to serve the passengers.
            </p>
            <p>
              To improve efficiency and drive down costs, my team and I piloted
              a POC to consolidate the company's telephony services and data
              network services, by leveraging existing company infrastructure
              and high sites to roll out a long distance wireless data network
              and replace the legacy wired telephony services with VoIP
              telephony services.
            </p>
            <p>
              I was also responsible for developing policies and procedures
              related to IT and IT security, and further the short to mid-term
              ICT strategy of the company.
            </p>
            <p>
              During my time at the company , my team and I managed to
              significantly reduce the company's expenditure on ICT services,
              through automating tasks, building various feedback tools and
              dashboards, and implementing new technologies and methods.
            </p>
            <p>
              I also fostered long term relationships with various suppliers and
              vendors that enabled the company to procure hardware and software
              at very competitive prices from reputable suppliers and vendors.
            </p>
            <TechStack>
              <TechStackItem>PHP</TechStackItem>
              <TechStackItem>CodeIgniter</TechStackItem>
              <TechStackItem>jQuery</TechStackItem>
              <TechStackItem>WordPress</TechStackItem>
              <TechStackItem>C#</TechStackItem>
              <TechStackItem>ASP.NET MVC</TechStackItem>
              <TechStackItem>Python</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Senior IT Technician"
            company="ITEC"
            location="Bloemfontein, South Africa"
            startDate="January 2005"
            endDate="September 2008"
          >
            <p>
              Working as an IT technician and team lead, I was tasked with
              onsite customer support and building various network and server
              solutions for various customers with unique requirements.
            </p>
            <p>
              During my tenure, I learnt new new skills and gained a lot of
              experience in understanding various customer and business
              requirements, and designing solutions and systems to solve the
              clients unique business requirement. Me and my built various
              solutions, including WANs, LANs, servers, firewalls and other
              systems.
            </p>
            <p>
              I also maintained an on premise Unix server, hosting the companies
              email, web and FTP sever, and employed my coding abilities to add
              new features to the system, such as hosting a private software,
              common Windows XP and printer drivers, and tools for our team.
            </p>
            <p>
              Having programming and coding experienced helped me to be a 10x
              technician, as I was able to built many tools and scripts to
              automate many daily repetitive tasks, such as Windows server
              bootup scripts, scripts for mounting remote drives and configuring
              user machines automatically at startup, and numerous little tools
              to troubleshoot networks, and even remove malware from infected
              Windows machines.
            </p>
            <p>
              I was also the only person among my peers running Linux (Fedora
              Core, OpenSuse) as my daily driver, and was fortunate to leverage
              my Linux experience to help out my team and ITEC on numerous
              occasions.
            </p>
            <TechStack>
              <TechStackItem>PHP</TechStackItem>
              <TechStackItem>Visual Basic</TechStackItem>
              <TechStackItem>JavaScript</TechStackItem>
              <TechStackItem>Drupal</TechStackItem>
              <TechStackItem>Joomla</TechStackItem>
              <TechStackItem>Microsoft SQL Server</TechStackItem>
              <TechStackItem>Active Directory</TechStackItem>
              <TechStackItem>SOAP</TechStackItem>
              <TechStackItem>XAMPP</TechStackItem>
              <TechStackItem>Linux</TechStackItem>
              <TechStackItem>Windows Server</TechStackItem>
              <TechStackItem>Microsoft IIS</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Side Hustle"
            company="PHPWEB"
            location="Bloemfontein, South Africa"
            startDate="January 2005"
            endDate="September 2008"
          >
            <p>
              I started PHPWEB as a freelance and part-time software development
              and web hosting services, to supplement my income.
            </p>
            <p>
              Building PHPWEB offered me the opportunity to learn about finding
              and selling to customers, and the business side of software
              development. I managed to foster long term relationships with many
              happy clients and worked on numerous exciting projects.
            </p>
            <p>
              During this time, I mostly built custom web applications and
              websites using PHP and eventually CodeIgniter, but also deployed
              many Drupal, Joomla and WordPress sites. I also built some highly
              customized and personalized themes and features.
            </p>
            <p>
              As my full-time responsibilities and commitments progressed, I was
              forced to systematically scale down and hand over projects to
              other vendors, until I finally closed PHPWEB down in September
              2008.
            </p>
            <TechStack>
              <TechStackItem>PHP</TechStackItem>
              <TechStackItem>CodeIgniter</TechStackItem>
              <TechStackItem>JavaScript</TechStackItem>
              <TechStackItem>jQuery</TechStackItem>
              <TechStackItem>Joomla</TechStackItem>
              <TechStackItem>Drupal</TechStackItem>
              <TechStackItem>WordPress</TechStackItem>
              <TechStackItem>Linux</TechStackItem>
              <TechStackItem>REST</TechStackItem>
              <TechStackItem>XML</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Technician"
            company="Parnis Airport Services"
            location="Kempton Park, South Africa"
            startDate="July 2004"
            endDate="May 2005"
          >
            <p>
              Parnis Airport Services a contractor for Airports Company South
              Africa (ACSA) was during my tenure there responsible for building
              and the upkeep of various industrial automated machines, such as
              bagage handling systems, aviobridges, aircraft ground power units,
              and other related systems at Johannesburg International Airport
              (now OR Tambo International Airport)
            </p>
            <p>
              As a technician, I was tasked with not only the upkeep and
              maintenance of the existing systems, but also helped build and
              refactor the systems as and when required. Maintaining and
              refactoring industrial control systems requires a good
              understanding of electronics and lader logic, the code that the
              PLC ran to drive contactors, variable speed drives, and more. Not
              only was I maintaining the legacy and existing aviobridges, but I
              was also a member of the team constructing and building new
              aviobridges that our team installed at gates C1 to C8 and two
              others at Cape Town International Airport, that is still after two
              decades in daily use at these airports.
            </p>
            <p>
              To support my role, I automated several tasks, such as building
              various tools, including an VB6, MS Access based inventory
              management system to replace the Lotus123 based inventory system
              that was in use at that time.
            </p>
            <TechStack>
              <TechStackItem>PLC</TechStackItem>
              <TechStackItem>SCADA</TechStackItem>
              <TechStackItem>Visual Basic</TechStackItem>
              <TechStackItem>Unix</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Warehouse Manager"
            company="Wetherleys"
            location="Bloemfontein, South Africa"
            startDate="January 2003"
            endDate="June 2004"
          >
            <p>
              Working in a leadership role, I was tasked with overseeing the
              overall warehouse operations of the branch, including staff,
              inventory, fleet, drivers, and logistics.
            </p>
            <p>
              During this time I did not build or code any public facing
              products, but built numerous tools and programs to asit me and our
              team in our duties, such as an asset tracking system, staff time
              and attendance system, and other tools.
            </p>
            <TechStack>
              <TechStackItem>Visual Basic</TechStackItem>
              <TechStackItem>VBA</TechStackItem>
              <TechStackItem>ASP</TechStackItem>
              <TechStackItem>Microsoft Access</TechStackItem>
              <TechStackItem>Microsoft IIS</TechStackItem>
              <TechStackItem>SQL</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Team Supervisor"
            company="Parnis Airport Serives"
            location="Joahnnesburg International Airport"
            startDate="June 2001"
            endDate="December 2002"
          >
            <p>
              Parnis Airport Services a contractor for Airports Company South
              Africa (ACSA) was during my tenure there responsible for building
              and the upkeep of various industrial automated machines, such as
              bagage handling systems, aviobridges, aircraft ground power units,
              and other related systems.
            </p>
            <p>
              I was tasked with leading a team of operators on various PLC and
              Scada (ICS) controlled systems, ensuring the efficient running
              various airport baggage handling systems, aviobridges (also known
              as passenger boarding bridges), and aircraft ground power units
              (GPUs).
            </p>
            <p>
              During my tenure I assumed overall responsibility for my team, our
              duties, and learnt numerous skills in terms of human resources
              management, leadership, and motivation.
            </p>
            <p>
              Having a keen technical interest, I leveraged all the
              opportunities presented to me, to up-skill myself and learn as
              much as I possibly could about how the various ICS systems work,
              the technology behind the PLCs, Scada, ICS, and Modbus network.
            </p>
            <p>
              To automate and supplement my work performance, I coded various
              tools using VB6, HTML, JavaScript
            </p>
            <TechStack>
              <TechStackItem>Visual Basic</TechStackItem>
              <TechStackItem>HTML</TechStackItem>
              <TechStackItem>JavaScript</TechStackItem>
            </TechStack>
          </JobItem>
          <JobItem
            title="Supervisor"
            company="Wetherleys"
            location="Bloemfontein, South Africa"
            startDate="February 2000"
            endDate="June 2001"
          >
            <p>
              I was responsible for ensuring that high quality products reach
              the customers in an agreed time and professional manner. I was in
              charge of the quality control, fleet and logistics of our branch
              and supervised a small team of store staff and delivery drivers.
            </p>
            <p>
              During my tenure I learnt and was exposed to many new skills and
              responsibilities, such as time management, motivation, leadership
              and taking ownership of tasks and accountability for the tasks
              performed by the team you are leading.
            </p>
            <p>
              I did not do any real programming, but dabbled a bit with HTML,
              JavaScript, and automated things for myself to improve and support
              my work performance, such as VBA macros ODBC and forms in Excel.
            </p>
            <TechStack>
              <TechStackItem>Microsoft Excel</TechStackItem>
              <TechStackItem>VBScript</TechStackItem>
              <TechStackItem>HTML</TechStackItem>
              <TechStackItem>JavaScript</TechStackItem>
              <TechStackItem>VBA</TechStackItem>
            </TechStack>
          </JobItem>
        </JobStack>
      </Section>
      <Section title="Education">
        <EducationStack>
          <EducationItem
            title="Bachelor of Management Leadership"
            institution="University of the Free State"
            location="Bloemfontein, South Africa"
            startDate="January 2013"
            endDate="November 2017"
          />
          <EducationItem
            title="Bachelor of Management Leadership"
            institution="University of the Free State"
            location="Bloemfontein, South Africa"
            startDate="January 2013"
            endDate="November 2017"
          />
          <EducationItem
            title="Certificate in Computer Networking"
            institution="Konica Minolta"
            location="Bloemfontein, South Africa"
            startDate="May 2005"
            endDate="May 2005"
          />
          <EducationItem
            title="Certificate in Printing Systems"
            institution="Konica Minolta"
            location="Bloemfontein, South Africa"
            startDate="June 2005"
            endDate="June 2005"
          />
          <EducationItem
            title="Programming Visual Basic"
            institution="Damelin Computer College (Benoni)"
            location="Benoni, South Africa"
            startDate="March 2001"
            endDate="March 2001"
          />
          <EducationItem
            title="Programming JavaScript"
            institution="Damelin Computer College (Benoni)"
            location="Benoni, South Africa"
            startDate="March 2001"
            endDate="March 2001"
          />
          <EducationItem
            title="End User Security Awareness"
            institution="Cybrary"
            location="Online"
            startDate="January 2017"
            endDate="January 2017"
          />
          <EducationItem
            title="Docker Mastery with Kubernetes"
            institution="Udemy"
            location="Online"
            startDate="October 2018"
            endDate="October 2018"
          />
          <EducationItem
            title="UX Design Theory"
            institution="Udemy"
            location="Online"
            startDate="October 2022"
            endDate="October 2022"
          />
          <EducationItem
            title="Security Awareness Training"
            institution="Udemy"
            location="Online"
            startDate="October 2022"
            endDate="October 2022"
          />
          <EducationItem
            title="React Native"
            institution="Udemy"
            location="Online"
            startDate="January 2023"
            endDate="April 2023"
          />
          <EducationItem
            title="React"
            institution="Udemy"
            location="Online"
            startDate="January 2023"
            endDate="April 2023"
          />
          <EducationItem
            title="Machine Learning AI, Python"
            institution="Udemy"
            location="Online"
            startDate="January 2024"
            endDate="March 2024"
          />
          <EducationItem
            title="Deep Learning Neural Networks and AI"
            institution="Udemy"
            location="Online"
            startDate="January 2024"
            endDate="March 2024"
          />
          <EducationItem
            title="Good Clinical Practice"
            institution="The Global Health Network"
            location="Online"
            startDate="October 2021"
            endDate="October 2021"
          />
        </EducationStack>
      </Section>
      <Section title="Top Skills">
        <TechStack>
          <TechStackItem>PHP</TechStackItem>
          <TechStackItem>Laravel</TechStackItem>
          <TechStackItem>MySQL</TechStackItem>
          <TechStackItem>Git</TechStackItem>
          <TechStackItem>Docker</TechStackItem>
          <TechStackItem>Linux</TechStackItem>
          <TechStackItem>Vue.js</TechStackItem>
          <TechStackItem>HTML</TechStackItem>
          <TechStackItem>CSS</TechStackItem>
          <TechStackItem>CSS</TechStackItem>
        </TechStack>
      </Section>
      <Section title="Preffred roles">
        <div className="css-1hqeloq">
          <div>
            <div className="css-xensfu">
              <article className="css-e6ykud">
                <input type="text" className="css-18qf62c" />
                <div className="css-1ooikkj">
                  <span className="css-157u2ty">
                    Total years of work experience
                    <span className="css-satcqh"></span>
                  </span>
                  <span className="css-1iqkohf">10-15 years</span>
                </div>
              </article>
            </div>
            <h3 className="css-1mfaan0">Desired roles</h3>
            <div className="css-1pj0ccy">
              <p>
                Add the roles that best represent the type of positions you'd
                like companies to approach you for. We recommend adding 1–5
                preferred roles.
              </p>
            </div>
            <div className="css-1ing1z8">
              <article className="css-1attiz6">
                <input type="text" className="css-18qf62c" />
                <div className="css-1ooikkj">
                  <span className="css-157u2ty">
                    Backend engineer<span className="css-satcqh"></span>
                  </span>
                  <span className="css-1iqkohf">10-15 years</span>
                </div>
              </article>
            </div>
            <div className="css-1ing1z8">
              <article className="css-1attiz6">
                <input type="text" className="css-18qf62c" />
                <div className="css-1ooikkj">
                  <span className="css-157u2ty">
                    Engineering lead<span className="css-satcqh"></span>
                  </span>
                  <span className="css-1iqkohf">10-15 years</span>
                </div>
              </article>
            </div>
            <div className="css-1ing1z8">
              <article className="css-1attiz6">
                <input type="text" className="css-18qf62c" />
                <div className="css-1ooikkj">
                  <span className="css-157u2ty">
                    Frontend engineer<span className="css-satcqh"></span>
                  </span>
                  <span className="css-1iqkohf">10-15 years</span>
                </div>
              </article>
            </div>
            <div className="css-1ing1z8">
              <article className="css-1attiz6">
                <input type="text" className="css-18qf62c" />
                <div className="css-1ooikkj">
                  <span className="css-157u2ty">
                    Full stack engineer<span className="css-satcqh"></span>
                  </span>
                  <span className="css-1iqkohf">10-15 years</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Online profiles">
        <div className="css-1hqeloq">
          <dl className="css-ti75j2">
            <dt className="css-v8sk6z">
              <span className="css-17h2rbq">
                <span className="css-5qsn5m">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 1024 1024"
                    role="img"
                    color="#A6ACAF"
                    font-size="16"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="m811.503 478.91-1.856 6.827c-1.835 6.763-4.075 13.077-6.4 19.243l-2.667 6.699c-29.973 70.187-91.477 96.341-190.635 107.264 32.107 21.589 41.365 48.683 41.365 121.984 0 73.323-.917 83.285-.747 100.053.363 27.691 38.336 40.96 36.949 49.835-1.408 8.896-31.808 7.445-46.08 2.219-40.277-14.912-36.245-50.688-36.245-50.688l-1.28-98.133s2.731-52.715-15.595-52.715V852.01c0 34.901 23.061 45.419 23.061 58.411 0 22.08-41.92-2.048-54.827-16-19.563-21.035-17.408-65.621-16.939-100.885.469-34.091-.277-108.608-.277-108.608l-13.269.341s5.376 162.773-7.061 192.384c-16.192 38.037-64.96 51.243-64.96 33.835 0-11.691 12.053-8 18.688-34.112 5.611-22.208 3.776-188.181 3.776-188.181s-15.637 9.877-15.637 40.96c0 14.165-.32 95.509-.32 119.616 0 30.464-40.576 47.744-60.053 47.744-9.877 0-22.101-.533-22.101-6.08 0-14.059 36.992-22.315 36.992-51.605 0-25.344-.469-90.645-.469-90.645s-18.688 3.392-45.355 3.392c-67.115 0-88.32-45.632-98.453-71.211-13.163-33.344-30.251-48.939-48.32-61.547-11.179-7.659-13.653-16.661-.789-19.221 59.392-11.968 74.539 71.829 114.389 85.163 28.181 9.557 64.64 5.483 82.795-7.083 2.411-25.536 19.691-47.744 34.155-59.392-101.013-10.304-160.917-47.744-191.808-107.925l-3.392-6.677c-2.944-6.208-5.504-12.48-7.829-19.072l-2.304-6.784c-9.728-30.571-14.016-65.557-14.016-104.64 0-69.291 20.181-95.509 47.381-132.331-20.8-78.912 7.467-133.035 7.467-133.035s43.691-9.728 126.315 53.355c44.843-20.352 164.245-22.059 220.651-4.48 34.624-24.491 98.048-59.093 123.733-49.344 6.848 11.819 21.803 46.549 8.917 122.645 8.768 16.811 53.845 52.331 54.08 152.896-.747 37.163-4.395 68.459-11.029 95.019z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="css-1loguyt">Github</span>
            </dt>
            <dd className="css-13wnjmb">https://github.com/corcronje</dd>
            <dt className="css-v8sk6z">
              <span className="css-17h2rbq">
                <span className="css-5qsn5m">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 1024 1024"
                    role="img"
                    color="#A6ACAF"
                    font-size="16"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M917.333 573.108v267.426H752.726V591.019c0-62.68-23.809-105.457-83.391-105.457-45.484 0-72.551 28.828-84.459 56.715-4.342 9.969-5.46 23.845-5.46 37.801v260.457H414.753s2.218-422.597 0-466.381H579.4v66.108c-.334.494-.768 1.028-1.082 1.507h1.082v-1.507c21.875-31.733 60.941-77.064 148.384-77.064 108.335-.002 189.55 66.658 189.55 209.912zM242.509 149.333c-56.331 0-93.176 34.8-93.176 80.564 0 44.766 35.779 80.623 90.99 80.623h1.1c57.422 0 93.133-35.85 93.133-80.623-1.082-45.764-35.711-80.564-92.047-80.564m-83.396 691.2h164.6V374.152h-164.6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="css-1loguyt">Linkedin</span>
            </dt>
            <dd className="css-13wnjmb">
              https://www.linkedin.com/in/cor-cronje-developer
            </dd>
            <dt className="css-v8sk6z">
              <span className="css-17h2rbq">
                <span className="css-5qsn5m">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 1024 1024"
                    role="img"
                    color="#A6ACAF"
                    font-size="16"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="m742.17 656.779-19.584 115.413c0 54.421-94.891 98.539-211.947 98.539s-211.925-44.117-211.925-98.539l-20.672-121.728-.725-4.203c28.864 41.301 122.389 71.573 233.323 71.573 110.997 0 204.544-30.293 233.387-71.637l-1.856 10.581zm65.792-387.542c0-54.443-133.12-98.581-297.323-98.581s-297.301 44.139-297.301 98.581l54.464 320.853c23.339 44.8 123.2 78.485 242.837 78.485 120.256 0 220.288-34.069 242.965-79.189zM513.284 605.835c-53.76 0-97.365-43.093-97.365-96.256s43.605-96.256 97.365-96.256 97.344 43.093 97.344 96.256-43.584 96.256-97.344 96.256m-2.645-298.987c-108.971 0-197.312-18.944-197.312-42.304s88.341-42.325 197.312-42.325c108.971 0 197.333 18.965 197.333 42.325s-88.363 42.304-197.333 42.304m53.323 202.733c0 27.669-22.677 50.112-50.688 50.112-27.989 0-50.688-22.443-50.688-50.112s22.699-50.112 50.688-50.112c28.011 0 50.688 22.443 50.688 50.112"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="css-1loguyt">Bitbucket</span>
            </dt>
            <dd className="css-13wnjmb">https://bitbucket.org/cronjecor</dd>
            <dt className="css-v8sk6z">
              <span className="css-17h2rbq">
                <span className="css-5qsn5m">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 1024 1024"
                    role="img"
                    color="#A6ACAF"
                    font-size="16"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M114.484 64.074c-13.593-.707-25.491 3.652-35.405 12.999s-14.936 21.114-14.936 34.852v63.897c0 25.348 19.463 46.296 44.81 47.855 371.617 22.375 668.865 319.622 691.239 691.238 1.559 25.347 22.635 45.09 48.126 44.809h63.622c13.736 0 25.508-5.02 34.85-14.933 9.345-9.769 13.709-21.945 12.999-35.681C934.442 453.934 569.796 89.429 114.481 64.082zm1.382 281.306c-13.881-1.132-26.313 2.961-36.513 12.449s-15.216 21.387-15.216 35.405v63.899c0 24.785 18.644 45.308 43.428 47.573 217.816 20.535 391.334 193.772 411.867 411.588 2.267 24.784 22.792 43.703 47.574 43.703h63.899c14.02 0 25.917-5.294 35.405-15.49 9.345-10.196 13.582-22.632 12.449-36.513-24.927-299.247-263.504-537.693-562.895-562.615zm79.387 351.845c-72.478.096-131.171 58.906-131.111 131.389-.06 72.478 58.633 131.294 131.111 131.39a131.283 131.283 0 0 0 131.386-131.386 131.28 131.28 0 0 0-131.386-131.385z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="css-1loguyt">Blog</span>
            </dt>
            <dd className="css-13wnjmb">https://phpweb.co.za/blog</dd>
            <dt className="css-v8sk6z">
              <span className="css-17h2rbq">
                <span className="css-5qsn5m">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 1024 1024"
                    role="img"
                    color="#A6ACAF"
                    font-size="16"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M858.929 547.242 728.468 677.63c-5.077 5.139-11.879 7.739-18.617 7.739s-13.547-2.605-18.681-7.739c-10.344-10.282-10.344-26.962 0-37.303l127.126-127.126L691.17 386.075c-10.344-10.282-10.344-26.962 0-37.37 10.344-10.282 27.026-10.282 37.303 0l130.461 130.461c18.754 18.821 18.754 49.312 0 68.068zm-222.012-180.11L433.926 685.368c-5.077 7.878-13.616 12.148-22.284 12.148-4.87 0-9.804-1.331-14.215-4.14-12.273-7.811-15.878-24.152-8.001-36.368l203.056-318.304c7.811-12.348 24.152-15.817 36.368-8.076 12.273 7.878 15.878 24.152 8.076 36.501zM332.898 640.326c10.282 10.344 10.282 27.026 0 37.303-5.206 5.139-11.942 7.739-18.681 7.739-6.802 0-13.472-2.605-18.617-7.739L165.212 547.241c-18.821-18.754-18.821-49.25 0-68.068L295.6 348.712c10.344-10.282 26.962-10.282 37.303 0 10.282 10.405 10.282 27.095 0 37.37L205.777 513.208l127.126 127.126zm582.217-528.032H108.886c-39.173 0-70.934 31.832-70.934 70.934v657.483c0 39.235 31.761 70.996 70.934 70.996h806.229c39.235 0 70.934-31.761 70.934-70.996V183.228c0-39.102-31.695-70.934-70.934-70.934"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="css-1loguyt">Personal</span>
            </dt>
            <dd className="css-13wnjmb">https://phpweb.co.za</dd>
          </dl>
        </div>
      </Section>
      <Section title="Projects">
        <ProjectStack>
          <ProjectItem title="Interstate Bus Lines">
            <p>
              This is a WordPress website I built for my current employer, a
              prominent public transportation company in the Free State. The
              front-end was tailored from a theme I bought on ThemeForest. The
              website does not employ any special plugins, custom plugins, nor
              custom posts.
            </p>
            <p>
              The content and posts, although bearing my name, was supplied by
              the client, and uploaded without alteration or spelling and
              grammar corrections, as per the client's wishes.
            </p>
            <p>
              <a href="https://www.interstate.co.za/" target="_blank">
                https://www.interstate.co.za/
              </a>
            </p>
            <TechStack>
              <TechStackItem>WordPress</TechStackItem>
              <TechStackItem>PHP</TechStackItem>
              <TechStackItem>MySQL</TechStackItem>
              <TechStackItem>HTML</TechStackItem>
              <TechStackItem>CSS</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Big Sky Coaches">
            <p>
              I built this website for an affiliate company to my employer,
              using Laravel and Bulma as the front-end. The company did not have
              any content, no budget, and a very restrictive deadline, hence I
              assisted the company throughout the entire process, even editing
              the photos using The Gimp on Linux. The site employs Mailgun for
              email delivery, SMS Portal for sending SMS notifications, and a
              reverse charge SMS service supplied by Vodacom.
            </p>
            <p>
              <a href="https://www.bigskycoaches.co.za/" target="_blank">
                https://www.bigskycoaches.co.za/
              </a>
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>Bulma</TechStackItem>
              <TechStackItem>Mailgun</TechStackItem>
              <TechStackItem>SMS Portal</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Villiera Guesthouse">
            <p>
              I built this WordPress website for a well known guesthouse in
              Douglas, Northern Cape. I bought the front-end from
              TemplateMonster, and incorporated special fields and customization
              in terms of the fonts to meet the client's unique requirements.
              The website does not employ any special plugins, custom plugins,
              nor custom posts. The client did not have any usable content and I
              had to assist the client with copywriting and photos.
            </p>
            <p>
              <a href="https://villieraguesthouse.co.za/" target="_blank">
                https://villieraguesthouse.co.za/
              </a>
            </p>
            <TechStack>
              <TechStackItem>WordPress</TechStackItem>
              <TechStackItem>PHP</TechStackItem>
              <TechStackItem>MySQL</TechStackItem>
              <TechStackItem>HTML</TechStackItem>
              <TechStackItem>CSS</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Claims Management System">
            <p>
              My employer operate a large fleet of coaches and bus drivers, with
              daily vehicle accidents, ranging from minor incidents to serious
              accidents. In lieu of legislation, cost management and driver
              behavior management, a large amount of data is raised by such an
              event, where tracking and accurate record keeping play a key role.
            </p>
            <p>
              To assist with optimally processing and managing the information
              from the time of the event to receiving a finalized claim from the
              insurance companies, this system assist the administrative
              personnel in tracking and collecting the required information in a
              structured and secure manner.
            </p>
            <p>
              The system is built on Laravel, Bootstrap and MySQL and runs off
              Nginx on Linux. The system also has various integrations with
              other systems in use by the company, such as Sage X3 ERP and
              Active Directory for authentication and user roles.
            </p>
            <p>
              <a href="https://www.interstate.co.za" target="_blank">
                https://www.interstate.co.za
              </a>
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>Bootstrap</TechStackItem>
              <TechStackItem>MySQL</TechStackItem>
              <TechStackItem>Nginx</TechStackItem>
              <TechStackItem>Linux</TechStackItem>
              <TechStackItem>Sage X3 ERP</TechStackItem>
              <TechStackItem>Active Directory</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="GeaserPi">
            <p>
              I built this system for a colleague to reduce electrical power
              consumption through monitoring and managing the temperatures of
              his solar geaser and electrical geaser setup, and cycle preheated
              water as and when required.
            </p>
            <p>
              <a
                href="https://bitbucket.org/cronjecor/proj-201802001"
                target="_blank"
              >
                https://bitbucket.org/cronjecor/proj-201802001
              </a>
            </p>
            <TechStack>
              <TechStackItem>PICAXE</TechStackItem>
              <TechStackItem>433Mhz transmitter</TechStackItem>
              <TechStackItem>IoT</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Passenger Boarding Bridges">
            <p>
              I was part of a team that built, installed and maintained the
              passenger boarding bridges at OR Thambo Int. and Cape Town Int.
              airports. These machines comprise hydraulics, hydro-static drives
              and electrics that is controlled by PLCs, Scada and linked to the
              building management system of ACSA's Joint Operations Center.
            </p>
            <p>
              <a
                href="https://www.parnis.co.za/passenger-boarding-bridges"
                target="_blank"
              >
                https://www.parnis.co.za/passenger-boarding-bridges
              </a>
            </p>
            <TechStack>
              <TechStackItem>PLCs</TechStackItem>
              <TechStackItem>Scada</TechStackItem>
              <TechStackItem>Building Management System</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Baggage Handling Systems">
            <p>
              I was a member of the team responsible for building, installing,
              programming and maintaining various PLC controlled baggage
              handling systems at OR Thambo Int. Airport. Of all the PLC
              automation projects I was involved with, I would likely rate the
              baggage handling system at Terminal 6, international departures as
              the most challenging, since not only did the system comprise
              almost 2KM in conveyor belts, but each individual parcel is
              weighed, tracked, X-Rayed, and sorted for loading onto the
              aircraft.
            </p>
            <p>
              <a
                href="https://www.parnis.co.za/baggage-handling-systems"
                target="_blank"
              >
                https://www.parnis.co.za/baggage-handling-systems
              </a>
            </p>
            <TechStack>
              <TechStackItem>PLCs</TechStackItem>
              <TechStackItem>ICS</TechStackItem>
              <TechStackItem>ModBus</TechStackItem>
              <TechStackItem>Conveyor Belts</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="110V/400Hz Ground Power Unit">
            <p>
              During my time working at Johannesburg International Airport
              (JIA), I built and maintained stationary aircraft ground power
              units (GPU). These machines was employed to power the docked
              aircraft, allowing for the aircraft's auxiliary power unit (APU)
              to be powered down.
            </p>
            <p>
              <a
                href="https://www.parnis.co.za/ground-power-units"
                target="_blank"
              >
                https://www.parnis.co.za/ground-power-units
              </a>
            </p>
            <TechStack>
              <TechStackItem>PLCs</TechStackItem>
              <TechStackItem>Conveyor Belts</TechStackItem>
              <TechStackItem>ModBus</TechStackItem>
              <TechStackItem>Ground Power Units</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Aircraft Docking System">
            <p>
              These machines provides an aircraft pilot important information
              whilst parking an aircraft at an airport stand, by means of visual
              indicators, this allows them to remain clear of obstructions and
              ensures that aviobridges can reach the aircraft. I was involved
              from a maintenance perspective, but was not involved with the
              installation and manufacturing of the system.
            </p>
            <p>
              <a href="https://www.parnis.co.za" target="_blank">
                https://www.parnis.co.za
              </a>
            </p>
            <TechStack>
              <TechStackItem>PLCs</TechStackItem>
              <TechStackItem>Visual Indicators</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Vehicle Arrestor Systems">
            <p>
              My first project working for Parnis Airport Services entailed
              building and wiring the control cabinets for these vehicle
              arresting systems. We eventually installed them in and around the
              airport to secure various vehicle entrances. Following the
              commissioning of the arrestors, I was involved with maintaining,
              upgrading and improving the systems.
            </p>
            <p>
              <a href="https://www.parnis.co.za/" target="_blank">
                https://www.parnis.co.za/
              </a>
            </p>
            <TechStack>
              <TechStackItem>PLCs</TechStackItem>
              <TechStackItem>Control Cabinets</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Company Relocation">
            <p>
              In early 2011, my them employer relocated its head office to a new
              premises. Prior to relocating, I was responsible for managing all
              IT and telecoms projects, and getting the site ready to accept the
              workforce. The projects had to be orchestrated and time perfectly
              to ensure all dependencies and resources was optimally applied
              towards meeting the deadlines.
            </p>
            <p>
              <a href="https://www.interstate.co.za/" target="_blank">
                https://www.interstate.co.za/
              </a>
            </p>
            <TechStack>
              <TechStackItem>ICT</TechStackItem>
              <TechStackItem>Telecoms</TechStackItem>
              <TechStackItem>WAN</TechStackItem>
              <TechStackItem>LAN</TechStackItem>
              <TechStackItem>VoIP</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Medbar - Medical Billing and Records">
            <p>
              I built Medbar v2.0 on Laravel v5 and Livewire in early 2020. I
              believe Medbar was one of the earliest apps I know of that ran
              Livewire in production. Medbar is a medical records and billing
              system which allows for accurate patient record keeping and
              seamless billing against all South African medical schemes, The
              system also features a lookup service for looking up medical
              procures and its corresponding rate payable by the patient's
              medical aid, a complete ICD10 lookup service, and a full featured
              NAPPI code lookup service for all prescription medication and
              consumables, thus allowing the doctor or medical professional to
              track the patient's complete medical history.
            </p>
            <p>
              <a href="https://v2.medbar.nucleusgroup.co.za" target="_blank">
                https://v2.medbar.nucleusgroup.co.za
              </a>
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>Livewire</TechStackItem>
              <TechStackItem>ICD10</TechStackItem>
              <TechStackItem>NAPPI</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Vehicle Speed Arrestor">
            <p>
              My employer have a problem with drivers speeding within the
              company's depots where there is a potential safety risk towards
              pedestrians and collision with stationary assets, especially
              around the refueling points and diesel bowsers.
            </p>
            <p>
              To assist in this regard and as a proof of concept, I developed a
              digital 433Mhz transmitter beacon powered by a PICAXE
              microcontroller that can be installed at high risk areas, and a
              receiver unit that can be fitted to vehicles, which interface with
              the vehicle's ECU through its CAN bus.
            </p>
            <p>
              When the vehicle's on-board receiver is within a 50 to 60 meter
              radius of the transmitter beacon, and the digitally encrypted
              token received from the beacon is validated, the receiver triggers
              a pre-configured limp mode in the vehicle's ECU, thus limiting
              vehicles top speed to around 15km/h.
            </p>
            <p>
              Preliminary tests have shown that this approach is viable and does
              indeed reduce the risk of potential injury and damage. The only
              issue that we're working to resolve is that when the triggering a
              limp mode condition in the ECU, an alarm is raised in the ECU's
              diagnostic logs which is not ideal. We are subsequently in
              discussions with the engine manufacturer to obtain a customized
              version of the ECU firmware in which additional software triggers
              for 30km/h and 15km/h among others are present, that when
              triggered would not raise alarms in the diagnostic logs.
            </p>
            <p>
              <a href="https://www.interstate.co.za" target="_blank">
                https://www.interstate.co.za
              </a>
            </p>
            <TechStack>
              <TechStackItem>PICAXE</TechStackItem>
              <TechStackItem>433Mhz transmitter</TechStackItem>
              <TechStackItem>IoT</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Clinical Trials Community Africa">
            <p>
              Backed by he Bill and Melinda Gates foundation among others, the
              Clinical Trials Community Africa (CTC) portal is a Laravel based
              application serving the clinical trials community on the African
              continent, and enables community members to easily find and and
              interact with regulators, CROs, labs, fellows and reachers.
            </p>
            <p>
              My team and I worked to adding features to the Laravel backend,
              upgrading Laravel from Laravel v5 to v8, and rebuilding the entire
              front-end using a new and improved theme.
            </p>
            <p>
              <a href="https://www.ctc.africa" target="_blank">
                https://www.ctc.africa
              </a>
            </p>
          </ProjectItem>
          <ProjectItem title="Fuel Pump Controller">
            <p>
              I built a custom Android app that serve as a controller for up to
              four IoT pumps. The application uses the Newland device's NFC,
              Camera, Laser and other sensors for authenticating pump attendants
              and vehicles, and controlling the IoT pump to dispense only the
              authorized amount of fuel. The app is built using React Native,
              and employ custom Kotlin native modules to drive the laser scanner
              from React Native.
            </p>
            <p>
              <a href="https://www.fueltronic.online" target="_blank">
                https://www.fueltronic.online
              </a>
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>PHP</TechStackItem>
              <TechStackItem>APIs</TechStackItem>
              <TechStackItem>Android</TechStackItem>
              <TechStackItem>React Native</TechStackItem>
              <TechStackItem>Kotlin</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Fueltronics Portal">
            <p>
              I did not develop this Laravel application, but was instead tasked
              with adding new features and updates to the Laravel backend and
              Angular front-end, including adding new integrations to services
              such as Wialon and provisioning the API for the new Android pump
              controller devices.
            </p>
            <p>
              <a href="https://service.fueltronic.co.za" target="_blank">
                https://service.fueltronic.co.za
              </a>
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>Angular</TechStackItem>
              <TechStackItem>Wialon</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Intercare Healthbeat">
            <p>
              I was the principle developer tasked with building Intercare's
              patient portal. The portal is built on Laravel, Livewire and
              Alpine.js and is closely integrated into Intercare's API. The
              portal further features various other integrations, such as an AI
              triage bot and a mental health bot. I was provided the Figma
              designs and had to translate the designs into reusable blade
              components and views, on Bootstrap 4.6 as per the requirement.
            </p>
            <p>
              <a href="https://healthbeat.intercare.co.za/" target="_blank">
                https://healthbeat.intercare.co.za/
              </a>
            </p>
            <TechStack>
              <TechStackItem>Laravel</TechStackItem>
              <TechStackItem>Livewire</TechStackItem>
              <TechStackItem>Alpine.js</TechStackItem>
              <TechStackItem>Bootstrap</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Triage Bot">
            <p>
              I was tasked with building a front-end for a medical triage bot,
              that allowed patients to be triaged to the correct healthcare
              professional and best treatment. The front-end is built on Vue.js
              using Pina and the Local Storage API. The interface being used by
              several healhcare provides such as Unu Health, Careworx and others
              as part of their product offering.
            </p>
            <p>
              <a href="https://www.intercare.co.za/" target="_blank">
                https://www.intercare.co.za/
              </a>
            </p>
            <TechStack>
              <TechStackItem>Vue.js</TechStackItem>
              <TechStackItem>Pina</TechStackItem>
              <TechStackItem>Local Storage API</TechStackItem>
            </TechStack>
          </ProjectItem>
          <ProjectItem title="Mental Health Bot">
            <p>
              I was required to build a front-end interface for a mental health
              bot. The mental health bot allow patients to assess their mental
              health, get mental health support, and help.
            </p>
            <p>
              <a href="https://www.intercare.co.za/" target="_blank">
                https://www.intercare.co.za/
              </a>
            </p>
            <TechStack>
              <TechStackItem>Vue.js</TechStackItem>
              <TechStackItem>Pina</TechStackItem>
              <TechStackItem>Local Storage API</TechStackItem>
            </TechStack>
          </ProjectItem>
        </ProjectStack>
      </Section>
    </>
  );
}
