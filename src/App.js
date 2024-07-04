import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({ fname: "", age: "", email: "", Password: "" });

  const [data, setData] = useState(JSON.parse(localStorage.getItem("sorthook")) || []);


  const handleChange = (e) => {
    console.log(e.target.name)
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setData([...data, person])
    localStorage.setItem("sorthook", JSON.stringify([...data, person]));
  }
  console.log(data);
  console.log(person);


  // const sortbyFname = () => {

  //   const sortdata = data.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) });
  //   console.log(sortdata);
  //   setData([...sortdata]);

  // }

  const sortByFname = useMemo(() => {

    return data.sort((a, b) => {
      return (a.fname > b.fname ? 1 : -1)
    })

  }, [data]);


  return (
    <>
      <div className=''>

        <div style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/dark-wall-empty-room-with-plants-floor-3d-rendering_41470-3847.jpg)', backgroundSize: "cover", height: "62vh", padding: "10%" }}>

          <div className='flex flex-col items-center gap-[60px]'>

            <div className='tanu flex flex-col gap-[20px]'>
              <label htmlFor="fname" className='font-bold text-xl text-[#dedede]'>Full Name:</label>
              <input type="text" id="fname" name="fname" value={person.fname} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#7b6636] text-white' />
            </div>

            <div className='tanu flex flex-col gap-[20px]'>
              <label htmlFor="age" className='font-bold text-xl text-[#dedede]'>Age:</label>
              <input type="number" id='age' name="age" value={person.age} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#7b6636] text-white' />
            </div>

            <div className='tanu flex flex-col gap-[20px]'>
              <label htmlFor="email" className='font-bold text-xl text-[#dedede]'>E-mail:</label>
              <input type="email" id='email' name="email" value={person.email} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#7b6636] text-white' />
            </div>

            <div className='tanu flex flex-col gap-[20px]'>
              <label htmlFor="Password" className='font-bold text-xl text-[#dedede]'>Password:</label>
              <input type="password" id="Password" name="Password" value={person.Password} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#7b6636] text-white' />
            </div>

            <button type='submit' onClick={handleSubmit} className='font-bold text-xl h-[40px] w-[150px] mt-[30px] rounded-[10px] bg-transparent text-[#dedede] border-[#7b6636]' >Submit</button>

          </div>

        </div>

        <div className='flex justify-center mt-[5%]'>

          <table>

            <thead>
              <th onChange={sortByFname}>Full Name:</th>
              <th>Age:</th>
              <th>E-mail</th>
              <th>Password:</th>
            </thead>

            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.fname}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.Password}</td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>

      </div>

    </>
  );
}

export default App;
