import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./TimeLine.css";
import { useEffect, useState } from "react";

const TimeLineData = [
  {
    index: 1,
    year: "2020",
    text: "Se crea rollertrip",
  },
  {
    index: 2,
    year: "2021",
    text: "Se unen a la comunidad más de 1000 personas",
  },
  {
    index: 3,
    year: "2022",
    text: "Se realizan más de 100 eventos en toda España",
  },
  {
    index: 4,
    year: "2023",
    text: "Se realiza el primer evento internacional",
  },
  {
    index: 5,
    year: "2024",
    text: "Se convierte en la comunidad de patinaje más grande de Europa",
  },
];

const TimeLine = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="timeline">
      <h2>Nuestra historia</h2>
      <h3>Antes de RollerTrip</h3>
      <Timeline
        position={size < 800 ? "" : "alternate"}
        sx={
          size < 800
            ? {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
            : ""
        }
      >
        {TimeLineData.map((data) => {
          return (
            <TimelineItem key={data.index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div
                  className="timeline-content"
                  style={{
                    alignItems:
                      size < 800
                        ? "flex-start"
                        : data.index % 2 === 0
                        ? "flex-end"
                        : "flex-start",
                  }}
                >
                  <h4>{data.year}</h4>
                  <p
                    style={{
                      textAlign:
                        size < 800
                          ? "start"
                          : data.index % 2 === 0
                          ? "end"
                          : "start",
                    }}
                  >
                    {data.text}
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default TimeLine;
