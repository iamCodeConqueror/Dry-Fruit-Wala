import React, { useEffect, useState } from 'react'
import './Timeline.scss'

const Timeline = () => {
  const [Timeline, setTimeline] = useState([]);
  useEffect(() => {

    import('./Timeline.json').then(data => setTimeline(data.data));

  }, []);

  return (
    <>
      <div className="timeline_container">
        {Timeline.map(data => (
          <div className="timeline_card">
            <div className="year">
              <span>{data.year}</span>
            </div>
            <div className="timeline_content">
              <h3 className='primary'>{data.heading}</h3>
              <p>{data.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Timeline
