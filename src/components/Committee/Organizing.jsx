import CommitteContainer from "../../container/CommitteeContainer";
import Headings from "../../container/Headings";
import CommitteeBanner from "../../container/CommitteeBanner";
import Footer from "../../components/Footer";
export default function Organizing() {
  return (
    <main className=" overflow-hidden -mt-24">
      <CommitteeBanner
        title={"Organizing Committee"}
        context={
          "The Organizing Committee comprises of distinguished faculty members from various departments, responsible for managing the logistical and operational aspects of a conference. They work under the guidance of the Steering Committee to ensure the smooth execution of the event. This Committee ensures that the conference runs efficiently and delivers a positive experience for all participants."
        }
      />

      <section className=" flex flex-col justify-center items-center ">
        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Chief Parton"} />
          <div className="my-10 grid lg:grid-cols-2  justify-center items-center place-self-center gap-20">
            <CommitteContainer
              name={"Thiru. R. Sundar"}
              designation={"Managing Trustee"}
              dept={"SNR Sons Charitable Trust, Coimbatore"}
            />
            <CommitteContainer
              name={"Thiru. S. Narendran"}
              designation={"Joint Managing Trustee"}
              dept={"SNR Sons Charitable Trust, Coimbatore"}
            />
          </div>
        </div>

        <div className=" my-10">
          <Headings text={"Parton"} />
          <div className=" my-10">
            <CommitteContainer
              name={"Dr. N. R. Alamelu"}
              designation={"Director (Academics)"}
              dept={"SNR Sons Charitable Trust, Coimbatore"}
            />
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"General Chairs"} />
          <div className="my-10 grid lg:grid-cols-2  place-self-center justify-center items-center gap-20">
            <CommitteContainer
              name={"Dr. A. Soundarrajan"}
              designation={"Principal"}
              dept={"Sri Ramakrishna Engineering College"}
            />
            <CommitteContainer
              name={"Dr. K. Porkumaran"}
              designation={"Chairman"}
              dept={"IEEE Madras Section"}
            />
          </div>
        </div>

        <div className=" my-10">
          <Headings text={"Conference Chair"} />
          <div className=" my-10">
            <CommitteContainer
              name={"Dr. R. Shanmugasundaram"}
              designation={"Organizing Secretary"}
              dept={"Professor - EEE"}
            />
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Session Chair"} />
          <div className=" my-10 items-center place-self-center flex justify-center">
            <CommitteContainer
              name={"Dr. N. Sathish Kumar"}
              dept={"Professor - ECE"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Mrs. N. Divya"}
                dept={"Asst. Prof. (Sr.G) - EEE"}
              />

              <CommitteContainer
                name={"Mrs. R. Kiruba"}
                dept={"Asst. Prof. (Sr. G) - EIE"}
              />

              <CommitteContainer
                name={"Dr. S. P. Vimal"}
                dept={"Asso. Prof. - ECE"}
              />
              <CommitteContainer
                name={"Dr. J. Selva Kumar"}
                dept={"Professor - CSE"}
              />
              <CommitteContainer
                name={"Mrs. R. Rajalakshmi"}
                dept={"Asst. Prof. (OG) - IT"}
              />
              <CommitteContainer
                name={"Mrs. G. Lavanya"}
                dept={"Asst. Prof. (Sl.G) - BME"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Finance Chair"} />
          <div className=" my-10 items-center place-self-center flex justify-center">
            <CommitteContainer
              name={"Dr. K. Balamurugan"}
              designation={"Joint-Organizing Secretary"}
              dept={"Asso. Prof - EEE"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-1 place-self-center justify-center items-center xl:grid-cols-1 gap-10">
              <CommitteContainer
                name={"Mr. C. Praveenkumar"}
                dept={"Asst. Prof. (Sl.g) - ECE"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Publication Chair"} />
          <div className=" my-10 items-center place-self-center flex justify-center">
            <CommitteContainer
              name={"Dr. V. Rukkumani"}
              dept={"Asso. Professor - EIE"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Mr. R. Santhoshkumar"}
                dept={"Asst. Prof. - EEE"}
              />

              <CommitteContainer
                name={"Dr. M. Priyadharshini"}
                dept={"Asst. Prof. - ECE"}
              />

              <CommitteContainer
                name={"Mr. I. Aravindaguru"}
                dept={"Asst. Prof. (Sr. G) - EIE"}
              />
              <CommitteContainer
                name={"Mrs. C. Sowntharya"}
                dept={"Asst. Prof. (Sr.G) - CSE"}
              />
              <CommitteContainer name={"Dr. N. Saranya"} dept={"AP (Sl.G)"} />
              <CommitteContainer
                name={"Dr. P. Vishnu Vardhan"}
                dept={"Asst. Prof. (Sr.G) - BME"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Local Arrangements Chair"} />
          <div className=" my-10 items-center flex justify-center">
            <CommitteContainer
              name={"Dr. Deepa B Prabhu"}
              dept={"Asso. Prof. - BME"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Dr. V. Radhika"}
                dept={"Asso. Prof. - BME"}
              />

              <CommitteContainer
                name={"Mr. B. Marisekar"}
                dept={"Asst. Prof. (Sl.G) - EEE"}
              />

              <CommitteContainer
                name={"Dr. M. Logaprakash"}
                dept={"Asst. Prof. (Sl. G) - AIDS"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Registration Chair"} />
          <div className=" my-10 items-center flex justify-center">
            <CommitteContainer
              name={"Mrs. S. Jansi Rani"}
              dept={"Asst. Prof. (Sl.G) - IT"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Dr. H. Vidhya"}
                dept={"Asst. Prof. (Sr.G) - EEE"}
              />

              <CommitteContainer
                name={"Mrs. T. Anitha"}
                dept={"Asst. Prof. (Sl.G) - EIE"}
              />

              <CommitteContainer
                name={"Mrs. M. Jaishree"}
                dept={"Asst. Prof. (Sl.G) - ECE"}
              />
              <CommitteContainer
                name={"Mrs. R. S. Ramya"}
                dept={"Asst. Prof. (Sr.G) - CSE"}
              />
              <CommitteContainer
                name={"Mr. S. Jeevanandham"}
                dept={"Asst. Prof. (Sr.G) - IT"}
              />
              <CommitteContainer
                name={"Mrs. L. Divyalakshmi"}
                dept={"Asst. Prof. (Sl.G) - BME"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Conference Pre-Tutorial Sessions Chair"} />
          <div className=" my-10 items-center flex justify-center">
            <CommitteContainer
              name={"Dr. S. P. Vimal"}
              dept={"Asso. Prof. - ECE"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Mrs. B. Kalaimathi"}
                dept={"Asst. Prof. (Sr.G) - ECE"}
              />

              <CommitteContainer
                name={"Dr. A. Vijay"}
                dept={"Asst. Prof. (Sr.G) - ECE"}
              />

              <CommitteContainer
                name={"Mrs. M. Kowsalya (Sr.G) - ECE"}
                dept={"Asso. Prof. - ECE"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Technical Review Committee"} />
          <div className=" my-10 items-center flex justify-center">
            <CommitteContainer
              name={"Dr. R. Shanmugasundaram (Convener)"}
              dept={"Professor - EEE"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Dr. K. Balamurugan"}
                dept={"Asso. Prof. - EEE"}
              />

              <CommitteContainer
                name={"Mr. R. Mohan Kumar"}
                dept={"Asst. Prof. (Sl.G) - EEE"}
              />

              <CommitteContainer
                name={"Mr. B. Sridhar"}
                dept={"Asst. Prof. (Sl.G) - EEE"}
              />

              <CommitteContainer
                name={"Dr. M. Kasiselvanathan"}
                dept={"Asso. Prof.  - ECE"}
              />

              <CommitteContainer
                name={"Mr. C. Mathan"}
                dept={"Asst. Prof. (Sr. G) - EIE"}
              />

              <CommitteContainer
                name={"Dr. P. Mathiyalagan"}
                dept={"Asso. Prof. - CSE"}
              />

              <CommitteContainer
                name={"Mrs. S. S. Sugantha Mallika"}
                dept={"Asst. Prof. (Sl.G) - IT"}
              />

              <CommitteContainer
                name={"Dr. M. Jeevitha Priya"}
                dept={"Asst. Prof. - BME"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Outreach and Promotion Committee"} />
          <div className=" my-10 items-center flex justify-center">
            <CommitteContainer
              name={"Dr. M. S. Geetha Devasena (Convener)"}
              dept={"Professor - CSE"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Dr. M. Kalaiarasu"}
                dept={"Asso. Prof. - IT"}
              />

              <CommitteContainer
                name={"Dr. R. Kingsy Grace"}
                dept={"Asso. Prof. - CSE"}
              />

              <CommitteContainer
                name={"Dr. R. Vijaya Kumar"}
                dept={"Asst. Prof. (Sl.G) - CSE"}
              />

              <CommitteContainer
                name={"Mr. C. Praveenkumar, AP(Sl.G) - EEE"}
                dept={"Asst. Prof. (Sr.G) - EEE"}
              />
              <CommitteContainer
                name={"Mrs. R.S. Ramya"}
                dept={"Asst. Prof. (Sr.G) - CSE"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Website and Social Media Promotion Committee"} />
          <div className=" my-10 items-center flex justify-center">
            <CommitteContainer
              name={"Dr. S. Harihara Gopalan"}
              dept={"Asso. Prof. - CSE"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Mr. K. Robin Johny"}
                dept={"Asst. Prof. (Sr.G) - AERO"}
              />

              <CommitteContainer
                name={"Mr. R. S. Vishnudurai"}
                dept={"Asst. Prof. (Sr.G) - CSE"}
              />

              <CommitteContainer
                name={"Dr. A. Vijay"}
                dept={"Asst. Prof. (Sr. G) - ECE"}
              />
            </div>
          </div>
        </div>

        <div className=" h-[1px] w-4/5 bg-black "></div>

        <div className=" my-10">
          <Headings text={"Hospitality Committee"} />
          <div className=" my-10 items-center flex justify-center">
            <CommitteContainer
              name={"Dr. P. Perumal (Convener)"}
              dept={"Professor - CSE"}
            />
          </div>

          <Headings text={"Members"} />
          <div className=" flex flex-col my-10 gap-10">
            <div className=" grid lg:grid-cols-2 justify-center items-center place-self-center xl:grid-cols-3 gap-10">
              <CommitteContainer
                name={"Dr. B. Mathivanan"}
                dept={"Asso. Prof. - CSE"}
              />

              <CommitteContainer
                name={"Dr. M. Nagarajapandian"}
                dept={"Asst. Prof. (Sl.G) - EIE"}
              />

              <CommitteContainer
                name={"Mr. V. Krishna Kumar"}
                dept={"Asst. Prof. (Sl.G) - CSE"}
              />

              <CommitteContainer
                name={"Dr. N. Suresh Kumar"}
                dept={"Asso. Prof. - IT"}
              />

              <CommitteContainer
                name={"Dr. P. Sebastian Vindro Jude"}
                dept={"Asst. Prof. (Sl.G) - EEE"}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
