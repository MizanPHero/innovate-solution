

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




  return (
    <>
      <div className="container mt-10">
        <form onSubmit={handleSubmit}>

        <div className="flex">
          <div className="flex flex-col">
            <label className="absolute">
              From
            </label>
              <input className="p-4" type="text" name="from" placeholder="Country, City or Airport" value="Hazrat Shahjalal International Airport  (DAC)" onChange={handleChange} />
            
          </div>
        </div>




          <button type="submit">Search</button>
        </form>
      </div>
    </>
  )
}

export default App
