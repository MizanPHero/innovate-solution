import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";


const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
};


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            
            <div className="relative inline-block text-left" onBlur={closeMenu}>
              
                <button
                  type="button"
                  className="pt-2 pb-4 pl-4 pr-4 text-left text-gray-900 border-0 bg-white rounded-sm rounded-r-2xl ring-1 ring-inset outline-[.5px] outline-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-[#0062e3] sm:text-sm sm:leading-6"
                  id="menu-button"
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >

                  <span className="block text-base">Travellers and Cabin Classes</span>
                  <span className="text-base">1 Adult, Economy</span>
                  
                </button>
              

              {isMenuOpen && (
                <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                      Account settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">
                      Support
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">
                      License
                    </a>
                    <form method="POST" action="#" role="none">
                      <button type="submit" className="block w-full px-4 py-2 text-sm text-left text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">
                        Sign out
                      </button>
                    </form>
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
