import Timeline from "@mui/lab/Timeline";
import "./TimeLine.css";
import { useEffect, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tab,
} from "@mui/material";
import ExpandInfo from "./ExpandInfo/ExpandInfo";
import { TabContext, TabList, TabPanel, timelineItemClasses } from "@mui/lab";

const AntesDe = [
  {
    index: 1,
    title: "2022 - Zaragoza Megatrip",
    text: "Todo comienza en un grupo de WhatsApp. ",
    long_text:
      "Los eventos en patines, surgieron de manera espontánea de la propia comunidad, el verano de 2022. La mayoría de nosotros participó en ellos, y a principios de 2024, decidimos iniciar este proyecto, como una manera de agrupar, difundir, organizar y mejorar al máximo estos eventos, siempre de la mano de la comunidad. Nuestro primer año organizamos 5 eventos en: Palma de Mallorca, Murcia, Zaragoza, Madrid y Málaga. En ellos, contamos con entre 500 y 1.200 patinadores de toda España, incluyendo viajeros de Londres, Italia, Portugal, Polonia y Dubai, entre otros.",
  },
  {
    index: 2,
    title: "2022 - Valencia a Fuego",
    text: "Se organiza el primer evento en Valencia",
    long_text: "",
  },
  {
    index: 3,
    title: "2023 - Mallorca en Llamas",
    text: "Se organiza el primer evento en Mallorca",
    long_text: "",
  },
  {
    index: 4,
    title: "2023 - Zaragoza Megatrip",
    text: "Se organiza el segundo evento en Zaragoza",
    long_text: "",
  },
  {
    index: 5,
    title: "2023 - Sevilla de Tranquis",
    text: "Se organiza el primer evento en Sevilla",
    long_text: "",
  },
];

const Ano2024 = [
  {
    index: 1,
    title: "Nacimiento de RollerTrip",
    text: "Se crea la marca RollerTrip",
    long_text: "",
  },
  {
    index: 2,
    title: "Mallorca en Llamas",
    text: "Se organiza el primer evento en Mallorca",
    long_text: "",
  },
  {
    index: 3,
    title: "Murcia AchoTour",
    text: "",
    long_text: "",
  },
  {
    index: 4,
    title: "Zaragoza Megatrip",
    text: "",
    long_text: "",
  },
  {
    index: 5,
    title: "Madrid al Cielo",
    text: "",
    long_text: "",
  },
  {
    index: 6,
    title: "Malaga Vibes",
    text: "",
    long_text: "",
  },
];

const Ano2025 = [
  {
    index: 1,
    title: "Murcia AchoTour",
    text: "",
    long_text: "",
  },
  {
    index: 2,
    title: "London Calling",
    text: "",
    long_text: "",
  },
  {
    index: 3,
    title: "Bilbao Pura Kalea",
    text: "",
    long_text: "",
  },
  {
    index: 4,
    title: "Sevilla de Tranquis",
    text: "",
    long_text: "",
  },
];

const timeGenerator = ({ size, array }) => {
  return (
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
      {array.map((data) => (
        <ExpandInfo data={data} size={size} length={array.length} />
      ))}
    </Timeline>
  );
};

const TimeLine = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="timeline">
      <h2>Nuestra historia</h2>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "var(--jea-color-primary)",
          marginBottom: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1-header"
        >
          <h3>Antes de RollerTrip</h3>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "white" }}>
          {timeGenerator({ size, array: AntesDe })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "var(--jea-color-primary)",
          marginBottom: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1-header"
        >
          <h3>Año 2024</h3>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "white" }}>
          {timeGenerator({ size, array: Ano2024 })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "var(--jea-color-primary)",
          marginBottom: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1-header"
        >
          <h3>Año 2025</h3>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "white" }}>
          {timeGenerator({ size, array: Ano2025 })}
        </AccordionDetails>
      </Accordion>

      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="tabs" centered>
          <Tab value="one" label="Antes de RollerTrip" />
          <Tab value="two" label="Año 2024" />
          <Tab value="three" label="Año 2025" />
        </TabList>
        <TabPanel value="one">
          {timeGenerator({ size, array: AntesDe })}
        </TabPanel>
        <TabPanel value="two">
          {timeGenerator({ size, array: Ano2024 })}
        </TabPanel>
        <TabPanel value="three">
          {timeGenerator({ size, array: Ano2025 })}
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default TimeLine;
