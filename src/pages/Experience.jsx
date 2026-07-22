import { GraduationCap } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <div className="">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
