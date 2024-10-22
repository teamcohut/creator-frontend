import React from 'react'

const Input: React.FC<IFormInput> = ({inpType}) => {

  // if (inpType === "text") {
  //   return (
  //     <div>
  //       <input type="text" name="" id="" />
  //     </div>
  //   )
  // } else if (inpType === "email") {
  //   return <input type="email" name="" id="" />
  // } else if (inpType === "password") {
  //   return <input type="password" name="" id="" />
  // } else if (inpType === "number") {
  //   return <input type="number" name="" id="" />
  // }

  return (
    // {
    //     type = "text"? <input type="text" name="" id="" />: 
    //     type = "email"? <input type="email" name="" id="" />:
        <input type="number" />
    // }
  )
}

interface IFormInput {
    inpType: string
}

export default Input