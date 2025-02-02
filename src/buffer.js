import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-800">SUDEEP KATARI</h1>
          <p className="text-2xl text-blue-600">Software Developer</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex items-center gap-8 text-gray-600 mb-8">
        <p className="flex items-center gap-2 text-lg">
          <FaPhoneAlt className="text-blue-600" /> +91-9032535490
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaEnvelope className="text-blue-600" /> 001.sudeepkumar97@gmail.com
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaMapMarkerAlt className="text-blue-600" /> Manikonda, 500089, Hyderabad
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2">
          {/* Experience Section */}
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-6">EXPERIENCE</h2>
          <div className="space-y-6">
            {/* Job 1 */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">Software Developer - Sigmoid Analytics</h3>
              <div className="flex items-center gap-4 text-gray-500 mt-1">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" /> May 2024 – Present
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" /> Hyderabad
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                <li>Designed and developed robust APIs using Java and Spring Boot, ensuring scalable and efficient backend
                operations for real-time data processing.</li>
                <li>Optimized complex database interactions and improved transactional throughput through extensive work
                with the Mithra framework and Sybase.</li>
                <li>Engineered and integrated BPMN workflows using the Camunda engine, automating tasks and streamlining
                real-time account management processes.</li>
                <li>Collaborated with teams to deploy and test applications using basic exposure to Docker and Kubernetes
                in containerized environments.</li>
              </ul>
              <hr className="my-4 border-gray-300" />
            </div>

            {/* Job 2 */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">Software Developer - TCS</h3>
              <div className="flex items-center gap-4 text-gray-500 mt-1">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" /> Feb 2021 – May 2024
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" /> Hyderabad
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                <li>Leveraged Java and J2EE technologies under supervision to optimize features within current project
                applications, while integrating Hibernate and Spring frameworks for ongoing application enhancement.</li>
                <li>Instituted robust performance metric monitoring within Jenkins to facilitate informed decision-making
                and continuous enhancement efforts.</li>
                <li>Deployed and managed CI/CD pipelines to streamline the software development lifecycle, minimizing
                manual efforts and expediting delivery timelines.</li>
                <li>Crafted and managed backend systems to uphold operational integrity and performance excellence.</li>
                <li>Ensured uninterrupted functionality and upkeep of essential production systems, prioritizing downtime
                mitigation and operational efficiency.</li>
              </ul>
              <hr className="my-4 border-gray-300" />
            </div>

            {/* Job 3 */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">Software Engineer - Valuelabs</h3>
              <div className="flex items-center gap-4 text-gray-500 mt-1">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" /> Mar 2020 – Nov 2020
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" /> Hyderabad
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                <li>Conducted code debugging and identified underlying issues through thorough examination of configuration
                files and logs.</li>
                <li>Played a key role in the development of a system access review analyzer service, aimed at identifying
                potential security vulnerabilities.</li>
                <li>Contributed to the enhancement of an access anomaly reporting service, facilitating the automated
                generation of email notifications.</li>
                <li>Collaborated on the development of a user account lifecycle management service, managing the deprovisioning
                of user-related objects.</li>
              </ul>
              <hr className="my-4 border-gray-300" />
            </div>

            {/* Job 4 */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">Software Developer - 4iQ</h3>
              <div className="flex items-center gap-4 text-gray-500 mt-1">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" /> Dec 2018 – Jan 2020
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" /> Hyderabad
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                <li>Designed and implemented web pages and template libraries utilizing Vue.js, Vuetify, HTML5, and CSS.</li>
                <li>Engineered code to interact with web services/APIs for data retrieval and UI population using jQuery/AJAX.</li>
                <li>Created single-page applications ensuring seamless functionality across various devices and browsers.</li>
                <li>Developed responsive and visually appealing user interfaces using modern front-end technologies.</li>
              </ul>
              <hr className="my-4 border-gray-300" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Summary Section */}
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-4">SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a Dynamic Software Developer with over 5 years of experience in designing, developing, and supporting scalable applications utilizing Java, Spring Boot, and Vue.js. I excel in backend and frontend development, optimizing database access, and working within Agile teams. My skills include troubleshooting and delivering user-friendly solutions, making me adept at meeting dynamic project requirements.
          </p>

          {/* Skills Section */}
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mt-6 mb-4">SKILLS</h2>
          <div className="grid grid-cols-2 gap-2">
            {["Java", "Spring Boot", "Hibernate", "Vue.js", "Docker", "Kubernetes", "MySQL", "CI/CD", "APIs"].map(
              (skill) => (
                <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Core Competencies & Soft Skills */}
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mt-6 mb-4">
            CORE COMPETENCIES & SOFT SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Software Development Lifecycle",
              "User Interface Design",
              "Database Management",
              "Quality Assurance",
              "Agile Methodologies",
              "Strong Communicator",
              "Reliable and Organized",
              "Creative Thinker",
              "Problem Solver",
              "Team Collaboration",
            ].map((item) => (
              <span key={item} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>

          {/* Languages Section */}
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mt-6 mb-4">LANGUAGES</h2>
          <div className="flex gap-4">
            {["English", "Telugu", "Tamil"].map((language) => (
              <span key={language} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
