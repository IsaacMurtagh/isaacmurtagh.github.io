import * as React from 'react'

const Chip = ({ name }) => {
  return (
    <div className="inline-block bg-yellow-50 border-yellow-300 border rounded px-2 py-1 text-xs md:text-sm text-gray-600">
      {name}
    </div>
  )
}

export default Chip