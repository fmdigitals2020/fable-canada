import React from 'react'
import { DuobleArrow1,DuobleArrow2 } from '../Imports/ImportImages'

function Pagination() {
  return (
    <div className='pagination-page'>
        <button>
            <img src={DuobleArrow1}/>
        </button>
        <button>
            1
        </button>
        <button>
            2
        </button>
        <button>
            3
        </button>
        <button>
            4
        </button>
        <button>
            5
        </button>
        <button>
            <img src={DuobleArrow2}/>
        </button>
    </div>
  )
}

export default Pagination