import React from "react";

const Entry = ({ text, link, level }) => {
  let t = "";
  let color = "";
  if (level == "1") {
    t = "Novice";
    color = "difficulty-novice";
  } else if (level == "2") {
    t = "Amateur";
    color = "difficulty-amateur";
  } else if (level == "3") {
    t = "Intermédiaire";
    color = "difficulty-intermediate";
  } else if (level == "4") {
    t = "Avancé";
    color = "difficulty-advance";
  } else if (level == "5") {
    t = "Expert";
    color = "difficulty-expert";
  }
  return (
    <div className="flex w-full justify-between group items-center relative entry">
      <a href={link}>{text}</a>
      <span className={`difficulty ${color}`}>{t}</span>
    </div>
  );
};

export default Entry;
