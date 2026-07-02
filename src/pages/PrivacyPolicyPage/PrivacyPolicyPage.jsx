import React from 'react';
import Footer from '../../components/Footer/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
        <img 
          src="https://media-prod.zha.com/zhweb-prod-media/media/lcej4iia/01825_cp_hc_jan25_n313292.jpg?w=1920" 
          alt="Privacy Policy Hero" 
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-12 md:pb-16">
          <h1 className="font-primary text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full px-6 md:px-12 py-16 md:py-24 flex flex-col gap-6">
        
        {/* Section 1: Data Protection */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:block md:w-1/3 relative">
            
          </div>
          <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-6 font-primary text-[15px] leading-relaxed text-[#a0a0a0]">
            <h2 className="text-white text-3xl md:text-4xl mb-2 tracking-wide font-normal">Data protection</h2>
            <h3 className="text-white text-xl md:text-2xl tracking-wide font-normal">Introduction</h3>
            <p className='text-xl'>In its everyday business operations ABH Architects makes use of a variety of data about identifiable individuals, including data about:</p>
            <ul className="list-none flex flex-col gap-1 text-xl">
              <li>- Current, past and prospective employees</li>
              <li>- Customers</li>
              <li>- Users of its websites</li>
              <li>- Subscriber</li>
              <li>- Other stakeholders</li>
            </ul>
            <p className='text-xl'>In collecting and using this data, the organisation is subject to a variety of legislation controlling how such activities may be carried out and the safeguards that must be put in place to protect it. The purpose of this policy is to set out the relevant legislation and to describe the steps ABH Architects is taking to ensure that it complies with it.</p>
            <p className='text-xl'>This control applies to all systems, people and processes that constitute the organisation's information systems, including board members, directors, employees, suppliers and other third parties who have access ABH Architects systems.</p>
            <p className='text-xl'>The following policies and procedures are relevant to this document:</p>
            <ul className="list-none flex flex-col gap-1 text-xl">
              <li>- Data Protection Impact Assessment Process</li>
              <li>- Personal Data Analysis Procedure</li>
              <li>- Legitimate Interest Assessment Procedure</li>
              <li>- Information Security Incident Response Procedure</li>
              <li>- GDPR Roles and Responsibilities</li>
              <li>- Records Retention and Protection Policy</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Data Protection Policy */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:block md:w-1/3 relative">
            
          </div>
          <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-6 font-primary text-[15px] leading-relaxed text-[#a0a0a0]">
            <h2 className="text-white text-3xl md:text-4xl mb-2 tracking-wide font-normal">Data Protection Policy</h2>
            <h3 className="text-white text-xl md:text-2xl mb-2 tracking-wide font-normal">The General Data Protection Regulation</h3>
            <p className='text-xl'>The General Data Protection Regulation 2016 (GDPR) is one of the most significant pieces of legislation affecting the way that carries out its information processing activities. Significant fines are applicable if a breach is deemed to have occurred under the GDPR, which is designed to protect the personal data of citizens of the European Union. It is ABH Architects' policy to ensure that our compliance with the GDPR and other relevant legislation is clear and demonstrable at all times.</p>
            
            <h3 className="text-white text-xl md:text-2xl mt-8 mb-2 tracking-wide font-normal">Definitions</h3>
            <p className='text-xl'>There are a total of 26 definitions listed within the GDPR and it is not appropriate to reproduce them all here. However, the most fundamental definitions with respect to this policy are as follows:</p>
            <p className='text-xl'><em>Personal data</em> is defined as:<br/><em>any information relating to an identified or identifiable natural person ('data subject'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;</em></p>
            <p className='text-xl'><em>'processing'</em> means:<br/><em>any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;</em></p>
            <p className='text-xl'><em>'controller'</em> means:<br/><em>the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law;</em></p>
          </div>
        </div>

        {/* Section 3: Principles */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:block md:w-1/3 relative">
            
          </div>
          <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-6 font-primary text-[15px] leading-relaxed text-[#a0a0a0]">
            <h2 className="text-white text-3xl md:text-4xl mb-2 tracking-wide font-normal">Principles Relating to Processing of Personal Data</h2>
            <p className='text-xl'>There are a number of fundamental principles upon which the GDPR is based.<br/>These are as follows:<br/>1. Personal data shall be:</p>
            <ol className="list-decimal pl-4 flex flex-col gap-4 text-xl">
              <li><em>processed lawfully, fairly and in a transparent manner in relation to the data subject ('lawfulness, fairness and transparency');</em></li>
              <li><em>collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall, in accordance with Article 89(1), not be considered to be incompatible with the initial purposes ('purpose limitation');</em></li>
              <li><em>adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed ('data minimisation');</em></li>
              <li><em>accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay ('accuracy');</em></li>
              <li><em>kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed; personal data may be stored for longer periods insofar as the personal data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes in accordance with Article 89(1) subject to implementation of the appropriate technical and organisational measures required by this Regulation in order to safeguard the rights and freedoms of the data subject ('storage limitation');</em></li>
              <li><em>processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures ('integrity and confidentiality').</em></li>
            </ol>
            <p className='text-xl'>2. The controller shall be responsible for, and be able to demonstrate compliance with, paragraph 1 ('accountability').</p>
            <p className='text-xl'>ABH Architects will ensure that it complies with all of these principles both in the processing it currently carries out and as part of the introduction of new methods of processing such as new IT systems.</p>
          </div>
        </div>

        {/* Section 4: Rights of the Individual */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:block md:w-1/3 relative">
            
          </div>
          <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-6 font-primary text-[15px] leading-relaxed text-[#a0a0a0]">
            <h2 className="text-white text-3xl md:text-4xl mb-2 tracking-wide font-normal">Rights of the Individual</h2>
            <p className='text-xl'>The data subject also has rights under the GDPR. These consist of:</p>
            <ol className="list-decimal pl-4 flex flex-col gap-1 text-xl">
              <li>The right to be informed</li>
              <li>The right of access</li>
              <li>The right to rectification</li>
              <li>The right to erasure</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object</li>
              <li>Rights in relation to automated decision making and profiling.</li>
            </ol>
            <p className='text-xl'>Each of these rights are supported by appropriate procedures ABH Architects that allow the required action to be taken within the timescales stated in the GDPR.</p>
          </div>
        </div>

        {/* Section 5: Lawfulness of Processing */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:block md:w-1/3 relative">
            
          </div>
          <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-6 font-primary text-[15px] leading-relaxed text-[#a0a0a0]">
            <h2 className="text-white text-3xl md:text-4xl mb-2 tracking-wide font-normal">Lawfulness of Processing</h2>
            <p className='text-xl'>There are six alternative ways in which the lawfulness of a specific case of processing of personal data may be established under the GDPR. It is ABH Architects' policy to identify the appropriate basis for processing and to document it, in accordance with the Regulation. The options are described in brief in the following sections.</p>
            
            <h3 className="text-white text-xl md:text-2xl mt-4 mb-2 tracking-wide font-normal">Consent</h3>
            <p className='text-xl'>Unless it is necessary for a reason allowable in the GDPR, ABH Architects will always obtain explicit consent from a data subject to collect and process their data. In case of children below the age of 16 (a lower age may be allowable in specific EU member states) parental consent will be obtained. Transparent information about our usage of their personal data will be provided to data subjects at the time that consent is obtained and their rights with regard to their data explained, such as the right to withdraw consent. This information will be provided in an accessible form, written in clear language and free of charge.</p>
            <p className='text-xl'>If the personal data are not obtained directly from the data subject then this information will be provided to the data subject within a reasonable period after the data are obtained and definitely within one month.</p>

            <h3 className="text-white text-xl md:text-2xl mt-4 mb-2 tracking-wide font-normal">Performance of a Contract</h3>
            <p className='text-xl'>Where the personal data collected and processed are required to fulfil a contract with the data subject, explicit consent is not required. This will often be the case where the contract cannot be completed without the personal data in question e.g. a delivery cannot be made without an address to deliver to.</p>

            <h3 className="text-white text-xl md:text-2xl mt-4 mb-2 tracking-wide font-normal">Legal Obligation</h3>
            <p className='text-xl'>If the personal data is required to be collected and processed in order to comply with the law, then explicit consent is not required. This may be the case for some data related to employment and taxation for example, and for many areas addressed by the public sector.</p>

            <h3 className="text-white text-xl md:text-2xl mt-4 mb-2 tracking-wide font-normal">Vital Interests of the Data Subject</h3>
            <p className='text-xl'>In a case where the personal data are required to protect the vital interests of the data subject or of another natural person, then this may be used as the lawful basis of the processing. ABH Architects will retain reasonable, documented evidence that this is the case, whenever this reason is used as the lawful basis of the processing of personal data. As an example, this may be used in aspects of social care, particularly in the public sector.</p>

            <h3 className="text-white text-xl md:text-2xl mt-4 mb-2 tracking-wide font-normal">Task Carried Out in the Public Interest</h3>
            <p className='text-xl'>Where ABH Architects needs to perform a task that it believes is in the public interest or as part of an official duty then the data subject's consent will not be requested. The assessment of the public interest or official duty will be documented and made available as evidence where required.</p>

            <h3 className="text-white text-xl md:text-2xl mt-4 mb-2 tracking-wide font-normal">Legitimate Interests</h3>
            <p className='text-xl'>If the processing of specific personal data is in the legitimate interests of ABH Architects and is judged not to affect the rights and freedoms of the data subject in a significant way, then this may be defined as the lawful reason for the processing. Again, the reasoning behind this view will be documented.</p>

            <h3 className="text-white text-xl md:text-2xl mt-4 mb-2 tracking-wide font-normal">Privacy by Design</h3>
            <p className='text-xl'>ABH Architects has adopted the principle of privacy by design and will ensure that the definition and planning of all new or significantly changed systems that collect or process personal data will be subject to due consideration of privacy issues, including the completion of one or more data protection impact assessments.</p>
            <p className='text-xl'>The data protection impact assessment will include:</p>
            <ul className="list-none flex flex-col gap-1 text-xl">
              <li>- Consideration of how personal data will be processed and for what purposes</li>
              <li>- Assessment of whether the proposed processing of personal data is both necessary and proportionate to the purpose(s)</li>
              <li>- Assessment of the risks to individuals in processing the personal data</li>
              <li>- What controls are necessary to address the identified risks and demonstrate compliance with legislation</li>
            </ul>
            <p className='text-xl'>Use of techniques such as data minimization and pseudonymisation will be considered where applicable and appropriate.</p>
          </div>
        </div>

        {/* Section 6: Additional Policies */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:block md:w-1/3 relative">
            
          </div>
          <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-6 font-primary text-[15px] leading-relaxed text-[#a0a0a0]">
            <h2 className="text-white text-3xl md:text-4xl mb-2 tracking-wide font-normal">Contracts Involving the Processing of Personal Data</h2>
            <p className='text-xl'>ABH Architects will ensure that all relationships it enters into that involve the processing of personal data are subject to a documented contract that includes the specific information and terms required by the GDPR. For more information, see the GDPR Controller-Processor Agreement Policy.</p>
            
            <h2 className="text-white text-3xl md:text-4xl mt-8 mb-2 tracking-wide font-normal">International Transfers of Personal Data</h2>
            <p className='text-xl'>Transfers of personal data outside the European Union will be carefully reviewed prior to the transfer taking place to ensure that they fall within the limits imposed by the GDPR. This depends partly on the European Commission's judgement as to the adequacy of the safeguards for personal data applicable in the receiving country and this may change over time.</p>
            <p className='text-xl'>Intra-group international data transfers will be subject to legally binding agreements referred to as Binding Corporate Rules (BCR) which provide enforceable rights for data subjects.</p>

            <h2 className="text-white text-3xl md:text-4xl mt-8 mb-2 tracking-wide font-normal">Data Protection Officer</h2>
            <p className='text-xl'>A defined role of Data Protection Officer (DPO) is required under the GDPR if an organisation is a public authority, if it performs large scale monitoring or if it processes particularly sensitive types of data on a large scale. The DPO is required to have an appropriate level of knowledge and can either be an in-house resource or outsourced to an appropriate service provider.</p>
            <p className='text-xl'>Based on these criteria, ABH Architects does not require a Data Protection Officer to be appointed.</p>

            <h2 className="text-white text-3xl md:text-4xl mt-8 mb-2 tracking-wide font-normal">Breach Notification</h2>
            <p className='text-xl'>It is ABH Architects' policy to be fair and proportionate when considering the actions to be taken to inform affected parties regarding breaches of personal data. In line with the GDPR, where a breach is known to have occurred which is likely to result in a risk to the rights and freedoms of individuals, the relevant supervisory authority will be informed within 72 hours. This will be managed in accordance with our Information Security Incident Response Procedure which sets out the overall process of handling information security incidents.</p>
            <p className='text-xl'>Under the GDPR the relevant DPA has the authority to impose a range of fines of up to four percent of annual worldwide turnover or twenty million Euros, whichever is the higher, for infringements of the regulations.</p>

            <h2 className="text-white text-3xl md:text-4xl mt-8 mb-2 tracking-wide font-normal">Addressing Compliance to the GDPR</h2>
            <p className='text-xl'>The following actions are undertaken to ensure that ABH Architects complies at all times with the accountability principle of the GDPR:</p>
            <ul className="list-none flex flex-col gap-1 text-xl">
              <li>- The legal basis for processing personal data is clear and unambiguous</li>
              <li>- A Data Protection Officer is appointed with specific responsibility for data protection in the organisation (if required)</li>
              <li>- All staff involved in handling personal data understand their responsibilities for following good data protection practice</li>
              <li>- Training in data protection has been provided to all staff</li>
              <li>- Rules regarding consent are followed</li>
              <li>- Routes are available to data subjects wishing to exercise their rights regarding personal data and such enquiries are handled effectively</li>
              <li>- Regular reviews of procedures involving personal data are carried out</li>
              <li>- Privacy by design is adopted for all new or changed systems and processes</li>
            </ul>
            <p className='text-xl'>The following documentation of processing activities is recorded:</p>
            <ul className="list-none flex flex-col gap-1 text-xl">
              <li>- Organisation name and relevant details</li>
              <li>- Purposes of the personal data processing</li>
              <li>- Categories of individuals and personal data processed</li>
              <li>- Categories of personal data recipients</li>
              <li>- Agreements and mechanisms for transfers of personal data to non-EU countries including details of controls in place</li>
              <li>- Personal data retention schedules</li>
              <li>- Relevant technical and organisational controls in place</li>
            </ul>
            <p className='text-xl'>These actions are reviewed on a regular basis as part of the management process concerned with data protection.</p>
          </div>
        </div>

        {/* Section 7: Cookie Policy */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:block md:w-1/3 relative">
            
          </div>
          <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-6 font-primary text-[15px] leading-relaxed text-[#a0a0a0]">
            <h2 className="text-white text-3xl md:text-4xl mb-2 tracking-wide font-normal">Cookie Policy</h2>
            <h3 className="text-white text-xl md:text-2xl mb-2 tracking-wide font-normal">What are cookies?</h3>
            <p className='text-xl'>This Cookie Policy explains what cookies are, how we use them, the types of cookies we use (i.e., the information we collect using cookies and how that information is used), and how to manage your cookie settings.</p>
            <p className='text-xl'>Cookies are small text files used to store small pieces of information. They are stored on your device when a website loads in your browser. These cookies help ensure that the website functions properly, enhance security, provide a better user experience, and analyse performance to identify what works and where improvements are needed. Some cookies are saved on your device only for the duration of your visit to our website. Each cookie has a defined duration; see the cookie list for the specific expiry of each cookie.</p>
            
            <h3 className="text-white text-xl md:text-2xl mt-8 mb-2 tracking-wide font-normal">How do we use cookies?</h3>
            <p className='text-xl'>Like most online services, our website uses both first-party and third-party cookies for various purposes. First-party cookies are primarily necessary for the website to function properly and do not collect any personally identifiable data.</p>
            <p className='text-xl'>The third-party cookies used on our website primarily help us understand how the site performs, analyse how visitors interact with it, support the security of our services, and enhance your overall user experience. They also help improve the performance and responsiveness of the website for future visits.</p>
            
            <h3 className="text-white text-xl md:text-2xl mt-8 mb-2 tracking-wide font-normal">Types of cookies we use</h3>
            <h4 className="text-white text-lg font-bold">Necessary</h4>
            <p className='text-xl'>Necessary cookies are required to enable the basic features of this site, such as maintaining essential website functionality or adjusting your consent preferences. We use these without consent because they are necessary to provide the service you request. See below on how to manage cookie preferences.</p>
            <ul className="list-none flex flex-col gap-4 text-xl">
              <li>
                <strong className="text-white">cookieyes-*</strong><br/>
                Duration: 1 year<br/>
                Set by CookieYes to store your cookie consent preferences for this website.
              </li>
              <li>
                <strong className="text-white">_GRECAPTCHA, rc::a, rc::b, rc::c, rc::f</strong><br/>
                Duration: Session to 6 months<br/>
                Set by Google reCAPTCHA to distinguish human users from bots, protecting the website against malicious spam attacks.
              </li>
              <li>
                <strong className="text-white">__cf_bm</strong><br/>
                Duration: 1 hour
              </li>
              <li>
                <strong className="text-white">_cfuvid</strong><br/>
                Duration: Session<br/><br/>
                These cookies are set by Cloudflare on embedded Vimeo content. __cf_bm supports bot management, and _cfuvid is used to distinguish individual users who share the same IP address for rate limiting and security purposes.
              </li>
            </ul>

            <h4 className="text-white text-lg font-bold mt-8">Analytics</h4>
            <p className='text-xl'>Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.</p>
            <ul className="list-none flex flex-col gap-4 text-xl">
              <li>
                <strong className="text-white">_ga</strong><br/>
                Duration: Up to 2 years<br/>
                Used by Google Analytics to distinguish unique users by assigning a randomly generated identifier. This helps analyse how visitors use this website. The information collected is aggregated and does not directly identify users.
              </li>
              <li>
                <strong className="text-white">_ga_*</strong><br/>
                Duration: Up to 2 years<br/>
                Used by Google Analytics to track session activity and measure interactions, such as page views and user engagement during a visit. The information collected is aggregated and does not directly identify users.
              </li>
            </ul>
            <p className='text-xl'>Data collected via Google Analytics may be processed outside the UK/EEA. Where this occurs, appropriate safeguards are applied in accordance with applicable data protection laws.</p>
            <p className='text-xl'>Google provides an opt-out option in relation to Google Analytics. If you wish your details not to be processed by the service, the opt-out option is available <strong>here</strong></p>

            <h3 className="text-white text-xl md:text-2xl mt-8 mb-2 tracking-wide font-normal">Manage cookie preferences</h3>
            <p className='text-xl'>You can modify your cookie settings at any time by clicking the <strong>Consent Preferences</strong> button on our website. This will allow you to revisit the cookie consent banner and update your preferences or withdraw your consent immediately.</p>
            <p className='text-xl'>Additionally, different browsers offer various methods to block and delete cookies. You can adjust your browser settings using the links below:</p>
            <ul className="list-none flex flex-col gap-1 text-xl">
              <li>· <a href="#" className="underline hover:text-white transition-colors">Chrome</a></li>
              <li>· <a href="#" className="underline hover:text-white transition-colors">Safari</a></li>
              <li>· <a href="#" className="underline hover:text-white transition-colors">Firefox</a></li>
              <li>· <a href="#" className="underline hover:text-white transition-colors">Microsoft Edge</a></li>
            </ul>
            <p className='text-xl'>If you are using a different web browser, please refer to its official support documentation.</p>
            <p className='text-xl'>Blocking strictly necessary cookies in your browser may affect how the site works.</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
