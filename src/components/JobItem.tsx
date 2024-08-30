import React from "react";
import { JobItemType } from "@/types/types";

function JobItem({
  title,
  company,
  location,
  startDate,
  endDate,
  children,
} : JobItemType) {
  return (
    <article className="mt-5 pt-5 border-t border-slate-200">
      <h6>
        {startDate} - {endDate}
      </h6>
      <h3>{title}</h3>
      <div className="flex flex-row justify-between items-center text-slate-400 font-bold mb-2">
        <small>{location}</small>
        <small>{company}</small>
      </div>
      {children}
    </article>
  );
}

export default JobItem;
