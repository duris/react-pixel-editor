import { useState, useEffect } from "react"


const Create = () => {



  let rows = []
  // var colors = [['bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],
  //               ['bg-red-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200','bg-yellow-200','bg-lime-200','bg-emerald-200','bg-teal-200','bg-cyan-200'],]

  let colors = []
                


  const [gridSize, setGridSize] = useState(16)
  
  for (let i = 0; i < gridSize; i++) {
    rows.push(i)
  } 

  rows.map((row) => {
    let rowColors = []
    for (let i = 0; i < gridSize; i++) {
      let pos = row, i
      rowColors.push([`${pos}`, 'bg-blue-400'])
    } 
    colors.push(rowColors)
  })

  const [colorArray, setColorArray] = useState(colors)

  const increaseGrid = () => {
    console.log(colors[1][1])
    colors[0][1] = 'bg-pink-300'
    setColorArray(colors)
  }

  const currentColor = 'bg-black'

  const getColorBlock = (color) => {
    console.log(color)
    // console.log(colors[0].indexOf(color))
    // const index = colors[0].indexOf(color)
    // colors[0][index] = currentColor
    // setColorArray(colors)
    
  }
  
  // useEffect(() => {

  // setColorArray(['bg-yellow-200','bg-lime-200','bg-emrald-200','bg-teal-200','bg-cyan-200'])

  // }, [])

  
  return(
    <div className="bg-white h-screen text-black flex">
        <div className="m-auto">
        {/* <button onClick={increaseGrid}>Increase</button> */}
          <div className="panel">
            <div>
              {rows.map(row => (
                <div>
                 {colorArray[row].map(color =>                
                   <div onClick={() => getColorBlock(color)} className={`colorBlock ${color[1]}  hover:p-1 inline-block hover:bg-slate-300 cursor-pointer`}></div>
                 )}
                </div>
                )
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Create