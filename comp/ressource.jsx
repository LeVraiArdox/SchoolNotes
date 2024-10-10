import React from "react";

const Entry = ({ text, link, format }) => {
  let t = "";
  let color = "";
  if (format == "excel") {
    t = "Xlsx (Excel)";
    color = "green";
  } else if (format == "pdf") {
    t = "PDF";
    color = "red";
  } else if (format == "word") {
    t = "docx (Word)";
    color = "blue";
  } else if (format == "powerpoint") {
    t = "pptx (Powerpoint)";
    color = "orange";
  }
  return (
    <div className="flex w-full justify-between group items-center relative entry">
      <a href={link} download>{text}</a>
      <span className={`difficulty ${color}`}>{t}</span>
    </div>
  );
};

export default Entry;
