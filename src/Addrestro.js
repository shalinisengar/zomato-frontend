import React from 'react'
// import './adrestro.css'
const Addrestro = () => {
  return (
    <div>
      <section class="container">
  <header> Add restorent registration Form</header>
  <form class="form" action="#">
      <div class="input-box">
          <label>Resturant Name</label>
          <input required="" placeholder="Enter full name" type="text"/>
      </div>
      <div class="column">
          <div class="input-box">
            <label>Restaurant Phone Number</label>
            <input required="" placeholder="Enter phone number" type="number"/>
          </div>
          <div class="input-box">
            <label>Open timing</label>
            <input required="" placeholder="Open timing" type="time"/>
          </div>
          <div class="input-box">
            <label>Close timing</label>
            <input required="" placeholder="close timing" type="time"/>
          </div>
      </div>
      <div class="gender-box">
        <label>Gender</label>
        <div class="gender-option">
          <div class="gender">
            <input checked="" name="gender" id="check-male" type="radio"/>
            <label for="check-male">Male</label>
          </div>
          <div class="gender">
            <input name="gender" id="check-female" type="radio"/>
            <label for="check-female">Female</label>
          </div>
          <div class="gender">
            <input name="gender" id="check-other" type="radio"/>
            <label for="check-other">Prefer not to say</label>
          </div>
        </div>
      </div>
      <div class="input-box address">
        <label>Address</label>
        <input required="" placeholder="Enter street address" type="text"/>
        <div class="column">
          <div class="select-box">
            <select>
              <option hidden="">Country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
              <option>Japan</option>
            </select>
          </div>
        <input required="" placeholder="Enter your city" type="text"/>
        </div>
      </div>
      <button>Submit</button>
  </form>
</section>
    </div>
  )
}

export default Addrestro



// import React from 'react'

// const Addrestro = () => {
//   return (
//     <div>
//       <div>
//       <div class="flex flex-col items-center justify-center h-screen dark">
//   <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
//     <h2 class="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
//     <form class="flex flex-col">
//       <div class="flex space-x-4 mb-4">
//         <input
//           placeholder="First Name"
//           class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//           type="text"
//         />
//         <input
//           placeholder="Last Name"
//           class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//           type="text"
//         />
//       </div>
//       <input
//         placeholder="Email"
//         class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//         type="email"
//       />
//       <input
//         placeholder="Confirm Email"
//         class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//         type="email"
//       />
//       <input
//         placeholder="Password"
//         class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//         type="password"
//       />
//       <input
//         placeholder="Confirm Password"
//         class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//         type="password"
//       />
//       <label class="text-sm mb-2 text-gray-200 cursor-pointer" for="gender">
//         Gender
//       </label>
//       <select
//         class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//         id="gender"
//       >
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//       </select>
//       <label class="text-sm mb-2 text-gray-200 cursor-pointer" for="age">
//         Age
//       </label>
//       <input
//         class="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
//         id="age"
//         type="date"
//       />
//       <p class="text-white mt-4">
//         Already have an account?
//         <a class="text-sm text-blue-500 -200 hover:underline mt-4" href="#"
//           >Login</a
//         >
//       </p>
//       <button
//         class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
//         type="submit"
//       >
//         Sign Up
//       </button>
//     </form>
//   </div>
// </div>

//       </div>
//     </div>
    
//   )
// }

// export default Addrestro
// // <div className='main'>
//     //   <div className='main-form'>
//     //     <div className='h2'>
//     //     <h2>Add you restorent </h2>
//     //     </div>
//     //     <div className='restro'>
//     //     <br/>
//     //     <span>Name : </span>
//     //     <input className='input1' type='text' placeholder='enter your restorent name'/>
//     //     <br/>
//     //     <br/>
//     //     <span>Address : </span>
//     //     <input  className='input1' type='text' placeholder='Restorent address'/>
//     //     <br/>
//     //     <br/>
//     //     <span>Restaurant owner name : </span>
//     //     <input  className='input1' type='text' placeholder='Enter restorent owner name'/>
//     //     <br/>
//     //     <br/>
//     //     <span>owner contact number : </span>
//     //     <input  className='input1' type='number' placeholder='enter owner contact number'/>
//     //     <br/>
//     //     <br/>
//     //     <input type="radio" name="1"/>
//     //     <span> The place is already open   </span>
//     //     <br/>
//     //     <br/>
//     //     <input type="radio" name="1"/>
//     //     <span>the place is openning soon</span></div>
//     //   </div>
//     // </div>