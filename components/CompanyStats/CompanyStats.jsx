import React from 'react'
import utils from '../../utils'
import {CgSmileMouthOpen} from 'react-icons/cg'
import {MdWork} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

const CompanyStats = ({ companyStats }) => {

  return (
    <section id="company-stats" className="company-stats">
      <div className="company-stats-container container">
        <div className="company-title-container">
          <h2 className='title-h2 title-company-stats'>Why People Choose Us</h2>
        </div>

        <div className="horizontal-line">
          <span className="horizontal-line-span"></span>
        </div>

        <div className="company-stats-counter-container">
          {companyStats.map((item) => (
            <div className="counter-container" key={item.title}>
              <div className="counter-icon-container">
                {item.title === 'Satisfied Customers' && <CgSmileMouthOpen/>}
                {item.title === 'Projects Done' && <MdWork/>}
                {item.title === 'Consultants' && <BsPeopleFill/>}
                {item.title === 'Awards Won' && <AiFillStar/>}
              </div>

              <span className='counter-span title-h2'>{utils(item.num, item.interval)}</span>

              <span className="separator-counter"></span>

              <h2 className='title-h4 title-counter'>{item.title}</h2>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default CompanyStats