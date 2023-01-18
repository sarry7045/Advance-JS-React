import React from 'react'

const InterviewTypeQuestions = () => {


  // Unique Value from Array
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 9, 9, 2, 2, 2, 6, 6];
  const uniqueNumber = [...new Set(array)];
  console.log("uniqueNumber", uniqueNumber);
  // Unique Value from Array




  // Multiple array in one array and soting and remove duplicate data from array
  const array1 = [1, 3, 4 ,5, 5]
  const array2 = [2, 4, 4, 6, 8]
  const array3 = [...array1, ...array2]

  const sorted = array3.sort((a, b) => a - b)
  const removeDuplicate = [...new Set(sorted)]
    console.log("sorted", removeDuplicate)



    // Add The Total Of Array
    const numbers = [1, 2, 3, 4, 5]
    let sum = 0
    numbers.forEach((item) => {
        sum += item
    })
    console.log("sum", sum)
  


  // Multiple The Array from this Index Number Numbe
  const ArrayNumbers = [1, 2, 3, 4, 5]
  const Multipley = ArrayNumbers.map((item, index) => {
    return item * index
  })
  console.log("Multipley", Multipley)
  


  // From one Array of Object Create one another array of Object using that array of Object
  const products = [
    {
      name: "Laptop",
      price: 10000,
      count: 5
    },
    {
      name: "Mobile",
      price: 5000,
      count: 3
    },
    {
      name: "Desktop",
      price: 20000,
      count: 2
    },
  ]
  const totoalProductValue = products.map((item) => {
    return {
      name: item.name, totalValue: item.price * item.count
    }
  })
  console.log("totoalProductValue", totoalProductValue)
  


  // Remove Duplicate Number from Array using Filter Mehthod
  const Arr = [1, 2, 3, 3, 4, 5, 6, 6, 6]
  const filterDuplicate = Arr.filter((item , index, arr) => {
    return arr.indexOf(item) === index
  })
  console.log("filterDuplicate", filterDuplicate)
  



  // Add the total value of all product with there count
  // const store = [
  //   {
  //     name: "Laptop",
  //     price: 10000,
  //     count: 5
  //   },
  //   {
  //     name: "Mobile",
  //     price: 5000,
  //     count: 3
  //   },
  //   {
  //     name: "Desktop",
  //     price: 20000,
  //     count: 2
  //   },
  // ]

  // const totalValuee = store.reduce((accum , item) => {
  //   return accum + item.price * item.count,
  //     0
  // })
  // console.log("totalValue", totalValuee)
  



  // sort the numbers
  const sortingArray = [72, 16, 2, 6, 34, 44, 17]
  sortingArray.sort((a,b) => {
    return a - b
  })
  console.log("sortingArray", sortingArray)
  


  // Replace name with other name
  const names = ["Neeraj", "Suraj", "Allu"]
  const idx = names.indexOf["Aditya"]
  console.log("idx", idx)




  // Print numbers in 1 by 1
for (let a = 0; a <= 5; a++){
  setTimeout(() => {
    console.log("Number",a)
  }, a * 1000);
}
  
    

    // checkArray
    const checkArray = [1, 2, 3, 4, 5]
  console.log("checkArray", Array.isArray(checkArray))
  




  // NAN
  let a = 10;
  // let b = "10"
  let c = "String"
  let d = a / c
  console.log("NAN", d)
  // Becuase koi bhi number kisi string se devide nhi ho sakta



  
  // Find smallest and largest nujmber
  const arry = [2, 23, 65, 3, 43]
  arry.reduce((accum, num) => Math.min(accum, num))
  console.log("Small Number", arry)
  

  let pattern = "/xyz"
  let value = "This is XYZ test"
  console.log("Valueee", value.replace(pattern, "just"))
  



  



  return (
    <div>
      {/* <h4>InterviewTypeQuestions</h4> */}
    </div>
  )
}

export default InterviewTypeQuestions
