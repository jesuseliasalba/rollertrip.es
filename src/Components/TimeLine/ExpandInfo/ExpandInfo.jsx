import { ExpandMore } from "@mui/icons-material";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Collapse } from "@mui/material";
import React, { useState } from "react";

const ExpandInfo = ({ data, size, length }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <TimelineItem key={data.index}>
      <TimelineSeparator>
        <TimelineDot />
        {data.index !== length && <TimelineConnector />}
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
          <h4>{data.title}</h4>
          <p
            style={{
              textAlign:
                size < 800 ? "start" : data.index % 2 === 0 ? "end" : "start",
            }}
          >
            {data.text}
          </p>
          {data.long_text && (
            <>
              <ExpandMore
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{
                  cursor: "pointer",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              ></ExpandMore>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <p className="expanded-text">{data.long_text}</p>
              </Collapse>
            </>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExpandInfo;
