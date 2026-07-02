
export default function CommitteeBanner({title, context}) {
    return(
        <section className=" flex justify-center items-center mt-20 sm:mx-10 lg:mt-36 mb-14 text-center">
        <div className=" max-w-3xl mx-auto p-10 shadow-2xl flex flex-col gap-5 rounded-xl shadow-slate-400 font-sans border-slate-200 ">
          <p className=" text-3xl font-semibold uppercase">
            {title}
          </p>
          <p className="text-lg text-justify">
            {context}
          </p>
        </div>
      </section>
    )
}