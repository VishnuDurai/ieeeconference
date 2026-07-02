import CommitteContainer from "../../container/CommitteeContainer";
import Headings from "../../container/Headings";
import CommitteeBanner from '../../container/CommitteeBanner'
import Footer from '../../components/Footer'

export default function Advisory() {
    return(
        <main>
            <CommitteeBanner title={'Advisory Committee'} context={"The Advisory Committee comprises of experienced professionals, experts, or senior members, to provide strategic advice and guidance for the conference. This committee help shape the event's vision and content while offering insights to maintain its relevance and quality, and supports the organizers in achieving the conference's goals and maintaining its prestige."} />

            <Headings text={'Committee Members'} />

            <div className=" flex flex-col my-20 gap-10">
            <div className=" grid lg:grid-cols-2 xl:grid-cols-3 justify-center items-center place-self-center gap-10 xl:gap-20">
              <CommitteContainer
                name={"Dr. K. Ramesh"}
                designation={'Principal Scientist'}
                dept={"ICAR-Central Institute for Cotton Research (CICR) Regional Station, Coimbatore, Tamilnadu"}
              />

              <CommitteContainer
                name={"Dr. Karthik Seemakurthy"}
                designation={'Research Scientist'}
                dept={"Hydronium Energies Ltd, London UK"}
              />

              <CommitteContainer
                name={"Dr. Hareesh Janakiraman"}
                designation={'Director'}
                dept={"Embedded Guru LLC, USA"}
              />
              <CommitteContainer
                name={"Dr. R. Gheorghiță Ghinea"}
                designation={'Director R and D'}
                dept={"Brunel University of London, UK"}
              />
              <CommitteContainer
                name={"Dr. A. R Abdul Rajak"}
                designation={'Head EEE'}
                dept={"BITS Pilani, Dubai Campus, Dubai"}
              />
              <CommitteContainer
                name={"Mr. C. Senthilnathan"}
                designation={'Associate Director'}
                dept={"Virtusa Corporation, USA"}
              />

              <CommitteContainer
                name={"Mr. Soundararajan Manthiri"}
                designation={'Sr. Energy Management System Manager'}
                dept={"California, United States"}
              />
              <CommitteContainer
                name={"Dr. Keerthivasan Krishnamoorthy"}
                designation={'Professor'}
                dept={"University of Technology and Applied Sciences, Muscat, Sultanate of Oman"}
              />
              <CommitteContainer
                name={"Dr. Shankar Venugopal"}
                designation={'Vice President'}
                dept={" Mahindra Research Valley, Chennai"}
              />
              <CommitteContainer
                name={"Mr. Shekhar Malani"}
                designation={'Managing Director'}
                dept={'Devise Electronics Pvt. Ltd., Pune'}
              />
              <CommitteContainer
                name={"Dr. S. Joseph Gladwin"}
                designation={'Vice-Chairman – Industry'}
                dept={"Associate General Manager, BigCat Wireless Pvt. Ltd., Chennai"}
              />
              <CommitteContainer
                name={"Dr. Selvakumar Ramasethu"}
                designation={'Senior PRL. Solution Engineer'}
                dept={"Cadence Design System, Bengaluru, India"}
              />
              <CommitteContainer
                name={"Dr. Paramasivam Shanmugam"}
                designation={'R & D and Engineering Leader'}
                dept={'ESAB, Danfoss Drives, Chennai'}
              />
              <CommitteContainer
                name={"Dr. Thanga Raj Chelliah"}
                designation={'Professor and Head'}
                dept={'Water Resources Development and Management Department, IIT Roorkee, Uttrakhand'}
              />
              <CommitteContainer
                name={"Dr. R. Venkatesh Babu"}
                designation={'Professor'}
                dept={'Department of Computational and Data Sciences Indian Institute of Science, Bangalore, Karnataka'}
              />
              <CommitteContainer
                name={"Dr. Anantha Padmanabha"}
                designation={'Assistant Professor'}
                dept={'Department of Computer Science and Engineering, IITM, Chennai, Tamilnadu'}
              />
              <CommitteContainer
                name={"Dr. Gopalakrishnan Srinivasan"}
                designation={'Assistant Professor'}
                dept={'Department of Computer Science and Engineering, IITM, Chennai, Tamilnadu'}
              />
              <CommitteContainer
                name={"Dr. M. Sabarimalai Manikandan"}
                designation={'Associate Professor'}
                dept={'IIT Palakad, India'}
              />
              <CommitteContainer
                name={"Dr. M. Tottappan"}
                designation={'Associate Professor'}
                dept={'IIT (Bhu), Varanasi, India.'}
              />
              <CommitteContainer
                name={"Dr. Yadaiah Narri"}
                designation={'Professor (Retired)'}
                dept={'Jawaharlal Nehru Technological University Hyderabad, Telangana'}
              />
              <CommitteContainer
                name={"Dr. K. Udhaykumar"}
                designation={'Associate Professor'}
                dept={'Department of Electrical and Electronics Engineering, Anna University, Chennai, Tamilnadu.'}
              />
              <CommitteContainer
                name={"Dr. S. Radha"}
                designation={'Treasurer, IEEE Madras Section'}
                dept={'Senior Professor, SSN College of Engineering, Chennai'}
              />
              <CommitteContainer
                name={"Dr. P. Sakthivel"}
                designation={'Vice-Chairman, Academics'}
                dept={'Anna University, Chennai'}
              />
              <CommitteContainer
                name={"Dr. S. Nickolas"}
                designation={'Professor and Head of the Department, Computer Applications'}
                dept={'NIT, Trichy, Tamilnadu'}
              />
              <CommitteContainer
                name={"Dr. D. Sriram Kumar"}
                designation={'Professor'}
                dept={'NIT, Tiruchirappalli, India'}
              />
              <CommitteContainer
                name={"Dr. S. M. Sameer"}
                designation={'Professor'}
                dept={'NIT Calicut, India'}
              />
              <CommitteContainer
                name={"Dr. Harigovindan"}
                designation={'Associate Professor'}
                dept={'NIT Puducherry, India'}
              />
              <CommitteContainer
                name={"Dr. P. Karuppanan"}
                designation={'Associate Professor'}
                dept={'MNIT, Allahabad, UP'}
              />
              <CommitteContainer
                name={"Dr. R. Jayabarathi"}
                designation={'Associate Professor, Department of Electrical and Electronics Engineering'}
                dept={'Amrita School of Engineering, Coimbatore'}
              />
              <CommitteContainer
                name={"Dr. S. Albert Alexander"}
                designation={'IEEE Chairman, PELS'}
                dept={'Professor, VIT, Vellore'}
              />
              <CommitteContainer
                name={"Dr. Ramalatha Marimuthu"}
                designation={'Director'}
                dept={'iExplore Foundation for Sustainable Development, Coimbatore'}
              />
              <CommitteContainer
                name={"Dr. Debarati Sen"}
                designation={'Professor'}
                dept={'GSSS, IIT Kharagpur, West Bengal'}
              />
             
            </div>
          </div>
          <Footer />
       
        </main>
    )
}