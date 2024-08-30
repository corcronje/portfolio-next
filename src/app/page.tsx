import JobItem from "@/components/JobItem";
import Section from "@/components/Section";
import TechStack from "@/components/TechStack";
import TechStackItem from "@/components/TechStackItem";
import EducationStack from "@/components/EducationStack";
import EducationItem from "@/components/EducationItem";
import JobStack from "@/components/JobStack";
import ProjectStack from "@/components/ProjectStack";
import ProjectItem from "@/components/ProjectItem";
import Hero from "@/components/Hero";
import SkillStack from "@/components/SkillStack";

export default function Home() {
  return (
    <>
      <Hero />
      <Section title="About me" id="about">
        <p>
          Having always had an interest in all things technical and it was
          natural for me to gravitate towards computers and coding. I have since
          2001 coded in various programming languages, but have primarily
          applied myself towards coding robust PHP, and later the Laravel
          applications.
        </p>
        <p>
          I currently work as a senior fullstack developer contractor for a very
          young startup, and previously held various positions as a fullstack
          developer and team lead.
        </p>
        <p>
          I have strong technical experience and can able to code in various
          programming languages and can apply or transition between programming
          languages and frameworks when required and in support of the company
          or team. I have leveraged my coding abilities to build numerous
          products and solutions, and pride myself in not only being a problem
          solver that can work diligently on a problem towards finding and or
          building a solution, but also being an awesome and fun team member.
        </p>
      </Section>
      <SkillStack />
      <Section title="Employment History" id="employment-history">
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
      <Section title="Education" id="education">
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
      <Section title="Top Skills" id="skills">
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
      <Section title="Projects" id="projects">
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
