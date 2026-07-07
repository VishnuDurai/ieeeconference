import CommitteContainer from "../../container/CommitteeContainer";
import Headings from "../../container/Headings";
import CommitteeBanner from '../../container/CommitteeBanner'
import Footer from '../../components/Footer'

export default function Steering() {
  return (
    <main>
      <CommitteeBanner title={'Steering Committee'} context={"The Steering Committee comprises of eminent faculty members responsible for overseeing the planning, execution, and strategic direction of a conference. The committee also provides guidance on key decisions, ensures alignment with the conference's goals, and maintains its quality and reputation over time. This Committee plays a crucial role in shaping the overall success of the event."} />

      <Headings text={'Committee Members'} />
      <div className=" flex flex-col my-10 gap-10">
        <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center gap-10">

          <CommitteContainer
            name={"Dr. N. Susila"}
            designation={'Professor and Head'}
            dept={"Department of Information Technology"}
          />

          <CommitteContainer
            name={"Dr. M. S. Geetha Devasena"}
            designation={'Professor and Head'}
            dept={"Department of Computer Science Engineering"}
          />
          <CommitteContainer
            name={"Dr. A. Grace Selvarani"}
            designation={'Professor and Head'}
            dept={"Department of M.Tech Computer Science Engineering"}
          />
          <CommitteContainer
            name={"Dr. R. Shanmugasundaram"}
            designation={'Professor and Head'}
            dept={"Department of Electronics and Instrumentation Engineering"}
          />
          <CommitteContainer
            name={"Dr. S. Allirani"}
            designation={'Professor and Head'}
            dept={"Department of Electrical and Electronics Engineering"}
          />
          <CommitteContainer
            name={"Dr. M. Jagadeeswari"}
            designation={'Professor and Head'}
            dept={"Department of Electronics and Communication Engineering"}
          />
          <CommitteContainer
            name={"Dr. N. Sathish Kumar"}
            designation={'Professor and Head'}
            dept={"Department of Bio-Medical Engineering"}
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}