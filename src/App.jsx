import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";


const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
};


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cabinClass, setCabinClass] = useState('Economy');

  const [adultValue, setAdultValue] = useState(1);

  const decreaseAdult = () => {
    if (adultValue > 1) {
      setAdultValue(adultValue - 1);
    }
  };

  const increaseAdult = () => {
    setAdultValue(adultValue + 1);
  };





  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    const formattedValue = {
      startDate: formatDate(newValue.startDate),
      endDate: formatDate(newValue.endDate),
    };

    console.log('formattedValue:', formattedValue);
    setValue(newValue);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const handleCabinClassChange = (e) => {
    setCabinClass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or other actions with form data
    console.log('Form submitted:', formData);
  };

  console.log(adultValue);


  const inputClass1 = "pt-8 pb-4 pl-4 pr-4 text-gray-900 border-0 rounded-sm rounded-l-2xl ring-1 ring-inset outline-[.5px] outline-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-[#0062e3] sm:text-sm sm:leading-6";
  const inputClass2 = "pt-8 pb-4 pl-4 pr-4 text-gray-900 border-0 rounded-sm ring-1 ring-inset outline-[.5px] outline-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-[#0062e3] sm:text-sm sm:leading-6";

  return (
    <div className="bg-[#05203c] min-h-screen">
      <div className="w-full max-w-[1140px] mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-1 pt-10">
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

          {/* input 3 */}
          <div className="flex flex-col">
            <label className="absolute z-50 mt-2 ml-4 text-base">Depart</label>
            <Datepicker
              placeholder={"Add Date"}
              primaryColor={"blue"}
              inputClassName={inputClass2}
              value={{
                startDate: formatDate(value.startDate),
                endDate: formatDate(value.endDate),
              }}
              onChange={handleValueChange}
            />
          </div>

          {/* input 4 */}
          <div className="flex flex-col">
            <label className="absolute z-50 mt-2 ml-4 text-base">Return</label>
            <Datepicker
              placeholder={"Add Date"}
              primaryColor={"blue"}
              inputClassName={inputClass2}
              value={{
                startDate: formatDate(value.startDate),
                endDate: formatDate(value.endDate),
              }}
              onChange={handleValueChange}
            />
          </div>

          {/* input 5 */}
          <div className="flex flex-col">
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="pt-2 pb-4 pl-4 pr-4 text-left text-gray-900 border-0 bg-white rounded-sm rounded-r-2xl ring-1 ring-inset outline-[.5px] outline-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-[#0062e3] sm:text-sm sm:leading-6"
                id="menu-button"
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
                onClick={toggleMenu}
              >
                <span className="block text-base">
                  Travellers and Cabin Classes
                </span>
                <span className="text-base">1 Adult, {cabinClass}</span>
              </button>

              {isMenuOpen && (
                <div
                  className="absolute right-0 z-50 py-6 mt-2 origin-top-right bg-white rounded-md shadow-lg w-96 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="px-6 py-1" role="none">
                    <label
                      htmlFor="cabinClass"
                      className="block mb-2 text-sm font-bold text-gray-600"
                    >
                      Cabin Class
                    </label>
                    <select
                      id="cabinClass"
                      name="cabinClass"
                      value={cabinClass}
                      onChange={handleCabinClassChange}
                      className="w-full p-2 border border-gray-300 outline-none rounded-md focus:ring-2 focus:ring-[#0062e3]"
                    >
                      <option value="Economy">Economy</option>
                      <option value="Premium">Premium Economy</option>
                      <option value="Business">Business Class</option>
                      <option value="First">First Class</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between px-6 pt-6">
                    <div>
                      <span className="block text-base font-bold">Adults</span>
                      <span className="block text-base ">Aged 16+</span>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <button
                        className="p-2 rounded-md bg-slate-200 hover:bg-slate-300"
                        onClick={decreaseAdult}
                        type="button"
                        disabled={adultValue === 1}
                      >

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className=""
                          style={{ width: "1rem", height: "1rem" }}
                        >
                          <path d="M1.5 12A1.5 1.5 0 013 10.5h18a1.5 1.5 0 010 3H3A1.5 1.5 0 011.5 12z"></path>
                        </svg>

                      </button>

                      <span className="block text-base font-bold" >{adultValue}</span>
                      <button
                        className="p-2 rounded-md bg-slate-200 hover:bg-slate-300"
                        onClick={increaseAdult}
                        type="button"
                      >

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="" style={{ width: "1rem", height: "1rem" }}><path d="M12 1.5A1.5 1.5 0 0010.5 3v7.5H3a1.5 1.5 0 000 3h7.5V21a1.5 1.5 0 003 0v-7.5H21a1.5 1.5 0 000-3h-7.5V3A1.5 1.5 0 0012 1.5z"></path></svg>

                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default App
