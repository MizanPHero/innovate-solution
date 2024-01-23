

function App() {


  // const [formData, setFormData] = useState({
  //   from: '',
  //   to: '',
  //   depart: '',
  //   return: '',
  //   travellers: 1,
  //   cabinClass: 'economy',
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or other actions with form data
    console.log('Form submitted:', formData);
  };



  const inputClass1 = "pt-8 pb-4 pl-4 pr-4 text-gray-900 border-0 rounded-sm rounded-l-2xl ring-1 ring-inset outline-[.5px] outline-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-[#0062e3] sm:text-sm sm:leading-6";
  const inputClass2 = "pt-8 pb-4 pl-4 pr-4 text-gray-900 border-0 rounded-sm ring-1 ring-inset outline-[.5px] outline-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-[#0062e3] sm:text-sm sm:leading-6";

  return (
    <div className="bg-[#05203c] min-h-screen">
      <div className="w-full max-w-[1140px] mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2 pt-10">


          {/* input 1 */}
          <div className="flex flex-col">
            <label className="absolute mt-2 ml-4 text-base">From</label>
            <input
              className={inputClass1}
              type="text"
              name="from"
              placeholder="Country, City or Airport"
            />
          </div>

          
          {/* input 2 */}
          <div className="flex flex-col">
            <label className="absolute mt-2 ml-4 text-base">To</label>
            <input
              className={inputClass2}
              type="text"
              name="to"
              placeholder="Country, City or Airport"
            />
          </div>

          <div>
          
          


          </div>

          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default App
