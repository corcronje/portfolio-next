import React from 'react'
import { EducationItemType } from '@/types/types';

function EducationItem({title, institution, location, startDate, endDate} : EducationItemType) {
  return (
    <article className="mb-5  mt-5 pt-5 border-t border-slate-200">
      <h6>
        {startDate} - {endDate}
      </h6>
      <h3>{title}</h3>
      <div className="flex flex-row justify-between items-center text-slate-400 font-bold mb-2">
        <small>{location}</small>
        <small>{institution}</small>
      </div>
    </article>
  );
}

export default EducationItem