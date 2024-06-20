import React from 'react'

function CusButton({value}) {
  return (
    <div className="w-full h-10 px-4 py-2 bg-slate-500 text-black dark:text-white dark:bg-slate-800 rounded-md justify-center items-center gap-2 inline-flex ">
    <div className="text-slate-50  leading-tight">{value} {">"}</div>
    
</div>
  )
}

export default CusButton


// import React from 'react'
// import { Button } from "@/components/ui/button"
// const CusButton = ({value}) => {
//   return (
//    <>
//  <Button>{value}</Button>
//    </>
//   )
// }

// export default CusButton

// ICON
 
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}
