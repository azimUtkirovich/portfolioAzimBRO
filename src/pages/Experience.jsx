import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../data/Experience";

export default function Experience() {
  return (
    <div className="">
      <VerticalTimeline lineColor="#3e497a">
        {experience.map((item) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={item.date}
            iconStyle={
              item.type === "Education"
                ? { background: "#3e497a", color: "#fff" }
                : { background: "red", color: "#fff" }
            }
            icon={
              item.type === "Education" ? (
                <GraduationCap />
              ) : (
                <BriefcaseBusiness />
              )
            }
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <p className="text-[#3e497a] text-xs">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
