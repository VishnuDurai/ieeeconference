export default function CommitteeContainer({ name, designation, dept }) {
  return (
    <section className="rounded-lg sm:w-96 w-64 border-l-4 sm:border-l-8 border-primary-blue transition-transform hover:scale-105 shadow-lg shadow-gray-400 overflow-hidden hover:shadow-xl hover:bg-blue-50">
      <div className="flex">        
        <div className="p-5 sm:p-10 flex flex-col gap-3 ">
          <p className="text-xl font-semibold">{name}</p>
          <div>
          <p className="sm:text-lg text-md my-2 font-medium text-gray-600">{designation}</p>
          <p className="sm:text-lg text-md my-2 font-medium text-gray-600">{dept}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
