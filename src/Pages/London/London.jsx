// import { useState } from "react";

// const londres_es = {
//   title: "London Calling 2025",
//   introduction: {
//     welcome:
//       "¡Bienvenido a la guía de viaje definitiva para London Calling 2025!",
//     description:
//       "Si no estás acostumbrado a viajar fuera del país, o tienes alguna duda sobre cómo prepararte para el evento… ¡Sigue leyendo!",
//   },
//   sections: {
//     preparativos: {
//       title: "Preparativos antes del viaje",
//       subsections: {
//         documentos: {
//           title: "¿Qué documentos necesito?",
//           items: [
//             {
//               title: "Pasaporte",
//               content:
//                 "Asegúrate de tener un pasaporte válido para viajar a Reino Unido. Es importante que esté en vigor durante todo el tiempo que estarás en el país.",
//             },
//             {
//               title: "Visado",
//               content:
//                 "Si eres ciudadano español o de otro país de la UE, generalmente no necesitas visado para estancias de menos de 6 meses. Sin embargo, si no eres ciudadano de la UE, podrías necesitar un visado, por lo que es recomendable revisar las condiciones antes de viajar.",
//             },
//             {
//               title: "Documentos de identificación",
//               content:
//                 "Si tienes algún documento adicional que te permita identificarte (como un DNI o una tarjeta de residencia), es útil llevarlo en caso de necesitarlo.",
//             },
//             {
//               title: "Billete de vuelta",
//               content:
//                 "A veces es útil tener a mano el billete de vuelta para presentarlo a la autoridad migratoria al llegar a Londres.",
//             },
//           ],
//         },
//         pagar: {
//           title: "Cómo pagar en Reino Unido",
//           intro:
//             "En Londres, la moneda oficial es la libra esterlina (£), por lo que deberás tener en cuenta",
//           items: [
//             {
//               title: "Tarjetas de crédito/débito",
//               content:
//                 "Las tarjetas de crédito/débito Visa o Mastercard son aceptadas en la mayoría de los comercios, restaurantes y tiendas. Sin embargo, asegúrate de que tu tarjeta tenga habilitada la opción para pagos internacionales, y verifica con tu banco las posibles comisiones por su uso en el extranjero.",
//             },
//             {
//               title: "Cambio de dinero",
//               content:
//                 "Aunque puedes cambiar euros a libras en las casas de cambio o en los aeropuertos, los tipos de cambio suelen ser más altos. Es más económico cambiar dinero antes de viajar, o usar cajeros automáticos en Londres. Los bancos en Londres también ofrecen servicio de cambio de divisas.",
//             },
//             {
//               title: "Cajeros automáticos",
//               content:
//                 "En caso de que necesites sacar efectivo, puedes usar los cajeros automáticos de bancos en Londres. Asegúrate de que tu banco no cobre comisiones excesivas por la retirada de dinero. Es recomendable retirar pequeñas cantidades para evitar cargos altos.",
//             },
//           ],
//         },
//         seguros: {
//           title: "Seguros de viaje",
//           items: [
//             {
//               title: "Seguro de salud",
//               content:
//                 "Aunque el sistema de salud en Reino Unido es bueno, los turistas de la UE no siempre tienen acceso gratuito al NHS (Sistema Nacional de Salud). Se recomienda contratar un seguro de viaje que cubra asistencia médica, enfermedades, accidentes y hospitalización.",
//             },
//             {
//               title: "Seguro de cancelación",
//               content:
//                 "En caso de que tengas que cancelar tu vuelo o cambiar las fechas, un seguro de cancelación puede reembolsarte el costo de los billetes de avión y otros servicios reservados.",
//             },
//             {
//               title: "Seguro de equipaje",
//               content:
//                 "Un seguro de equipaje es útil si tu maleta se pierde o se daña en el viaje. Asegúrate de que el seguro cubra tanto la pérdida como los daños.",
//             },
//           ],
//         },
//       },
//     },
//     volar: {
//       title: "Cómo volar a Londres",
//       intro:
//         "No será ninguna sorpresa si te digo que a Londres hay que ir en avión… Aquí te dejo unos consejos para tu viaje.",
//       subsections: {
//         reservar: {
//           title: "Cómo reservar tus vuelos",
//           items: [
//             {
//               title: "Dónde buscar vuelos",
//               content:
//                 "Utiliza comparadores de vuelos como Skyscanner, Google Flights o Kayak para encontrar los mejores precios y horarios. Puedes filtrar los vuelos según tus preferencias (directos, con escalas, horarios…). En este paso, ¡recuerda siempre navegar en modo incógnito! Así evitamos que los rastreadores web nos detecten y suba el precio de los vuelos.",
//             },
//             {
//               title: "Reserva con antelación",
//               content:
//                 "Los precios de los vuelos suelen ser más baratos si se reservan varias semanas antes del viaje. Si tu trabajo no es un problema, asegúrate de tener fechas flexibles para aprovechar las ofertas.",
//             },
//             {
//               title: "Confirmación y check-in",
//               content:
//                 "Una vez reservado tu vuelo, asegúrate de recibir la confirmación y revisar la política de equipaje y los requisitos para hacer el check-in online. Muchos vuelos permiten hacer el check-in online 24 horas antes del vuelo.",
//             },
//           ],
//         },
//         aeropuertos: {
//           title: "Aeropuertos principales",
//           items: [
//             {
//               title: "Heathrow",
//               content:
//                 "El aeropuerto más grande de Londres, con vuelos internacionales y nacionales. Está ubicado a unos 24 km al oeste del centro de Londres y tiene excelentes conexiones en metro, tren y autobús.",
//             },
//             {
//               title: "Gatwick",
//               content:
//                 "Está al sur de Londres y es una opción popular para vuelos internacionales y de bajo coste. Se puede llegar al centro de la ciudad en tren (el Gatwick Express) o en autobús.",
//             },
//             {
//               title: "Stansted",
//               content:
//                 "Un aeropuerto de bajo coste situado al noreste de Londres. Tiene buenas conexiones en tren y autobús con el centro de Londres.",
//             },
//             {
//               title: "Luton",
//               content:
//                 "También es un aeropuerto utilizado por aerolíneas de bajo coste, ubicado al norte de Londres. Conexiones con el centro de la ciudad en autobuses o trenes.",
//             },
//           ],
//         },
//         patines: {
//           title: "Cómo volar con tus patines",
//           intro:
//             "Llevar patines en el equipaje puede ser un problema dependiendo del aeropuerto o la aerolínea, por lo que debes tener cuidado donde los llevas.",
//           items: [
//             {
//               title: "Equipaje de carga",
//               content:
//                 "Si quieres evitar problemas, lo mejor es que vayan dentro de una maleta a la bodega del avión. Lo malo es que deberás facturar el equipaje, por lo que será más costoso.",
//             },
//             {
//               title: "Equipaje de cabina",
//               content:
//                 "También puedes subirlos al avión dentro de una maleta o mochila más pequeña. Si tienes que desmontar los patines para ahorrar espacio, puedes llevar las botas y las guías por separado… Pero ojo, monta siempre las ruedas en las guías, ya que por si solas, pueden considerarlas un objeto contundente y dar problemas en los controles.",
//             },
//             {
//               title: "En los pies",
//               content:
//                 "No es recomendable… Pero si vas muy justo de espacio, puedes intentar entrar con los patines puestos. Lo malo es que es casi seguro que acabes caminando por el aeropuerto solo con las botas.",
//             },
//           ],
//         },
//       },
//     },
//     puntosInteres: {
//       title: "Puntos de Interés en el evento",
//       content:
//         "Todo el evento transcurrirá alrededor de Hyde Park. Es uno de los espacios verdes más emblemáticos de Londres, y su ubicación central lo convierte en el punto de partida perfecto para las actividades del evento.",
//       mapLink: "https://maps.app.goo.gl/BSTDB8HDY3EZKGrU6",
//     },
//     alojamiento: {
//       title: "Cómo encontrar alojamiento",
//       items: [
//         {
//           title: "Reservar con antelación",
//           content:
//             "Igual que los billetes de avión, es recomendable reservar tu alojamiento varias semanas antes del evento. Seguramente encuentres más opciones y precios más económicos.",
//         },
//         {
//           title: "Opciones de alojamiento",
//           content: "",
//           subitems: [
//             "Hoteles: Si tu presupuesto es amplio, Londres tiene una amplia variedad de hoteles, desde económicos hasta lujosos.",
//             "Hostales: Son una opción asequible para quienes viajan con un presupuesto más ajustado.",
//             "Apartamentos: Si viajas en grupo o prefieres más privacidad, un apartamento puede ser ideal. Si buscas algo más económico, también puedes alquilar una habitación en el apartamento de alguien.",
//           ],
//         },
//         {
//           title: "Dónde reservar",
//           content:
//             "Puedes hacerlo a través de plataformas como Booking.com, AirBnb, Expedia o directamente en los sitios web de los hoteles.",
//         },
//         {
//           title: "Zona para alojarse",
//           content:
//             "Teniendo en cuenta el apartado anterior, recomendamos buscar tu alojamiento máximo a 20 minutos patinando de la zona de interés. Puedes usar Google Maps para calcular cuanto te costará llegar utilizando el modo bicicleta. Otra opción es alojarte algo más lejos, pero con buena conexión de transporte público.",
//         },
//       ],
//     },
//     consejos: {
//       title: "Consejos prácticos",
//       items: [
//         {
//           title: "Clima",
//           content:
//             "Londres tiene un clima impredecible, con lluvias durante todo el año… Pero no te preocupes, si el tiempo no acompaña, estamos preparando alternativas a cubierto para no dejar de patinar durante el evento.",
//         },
//         {
//           title: "Hora",
//           content:
//             "Londres está en la zona horaria GMT o BST (hora de verano británica). Ten en cuenta la diferencia horaria con España (1 hora menos en invierno, 2 horas menos en verano).",
//         },
//         {
//           title: "Idioma",
//           content:
//             "El idioma principal es el inglés, pero la mayoría de las personas entiende y habla algo de español, especialmente en áreas turísticas.",
//         },
//         {
//           title: "Adaptadores de enchufe",
//           content:
//             "Los enchufes en Reino Unido son de tipo G (con 3 entradas rectangulares), por lo que necesitarás un adaptador para cargar tus dispositivos.",
//         },
//         {
//           title: "Redes sociales y Wi-Fi",
//           content:
//             "La mayoría de los lugares públicos y cafeterías tienen Wi-Fi gratuito. También puedes comprar una SIM local para tener acceso a datos móviles en tu teléfono.",
//         },
//         {
//           title: "Costumbres locales",
//           content:
//             "Los británicos son muy puntuales, así que asegúrate de llegar a tiempo a las actividades.",
//         },
//       ],
//     },
//     sugerencias: {
//       title: "Buzón de Sugerencias",
//       prompt:
//         "¿Todavía tienes alguna duda? ¿Crees que nos hemos dejado de contar algo?",
//       callToAction: "¡No dudes en dejarnos un mensaje aquí abajo!",
//     },
//   },
// };

// const London = () => {
//   const [data, setData] = useState(londres_es);

//   return <></>;
// };

// export default London;

"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Box,
  Link,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ParkIcon from "@mui/icons-material/Park";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import PowerIcon from "@mui/icons-material/Power";
import WifiIcon from "@mui/icons-material/Wifi";
import PeopleIcon from "@mui/icons-material/People";
import SendIcon from "@mui/icons-material/Send";
import LuggageIcon from "@mui/icons-material/Luggage";

export default function LondonCallingGuide() {
  // Estado para los paneles expandidos
  const [expanded, setExpanded] = useState(false);
  // Estado para el campo de sugerencias
  const [suggestion, setSuggestion] = useState("");

  // Datos de la guía almacenados en estado
  const [guideData] = useState({
    introduction: {
      title: "London Calling 2025",
      subtitle: "Guía de Viaje",
      welcome:
        "¡Bienvenido a la guía de viaje definitiva para London Calling 2025!",
      description:
        "Si no estás acostumbrado a viajar fuera del país, o tienes alguna duda sobre cómo prepararte para el evento… ¡Sigue leyendo!",
    },
    preparations: {
      title: "Preparativos antes del viaje",
      documents: {
        title: "¿Qué documentos necesito?",
        items: [
          {
            title: "Pasaporte",
            description:
              "Asegúrate de tener un pasaporte válido para viajar a Reino Unido. Es importante que esté en vigor durante todo el tiempo que estarás en el país.",
          },
          {
            title: "Visado",
            description:
              "Si eres ciudadano español o de otro país de la UE, generalmente no necesitas visado para estancias de menos de 6 meses. Sin embargo, si no eres ciudadano de la UE, podrías necesitar un visado, por lo que es recomendable revisar las condiciones antes de viajar.",
          },
          {
            title: "Documentos de identificación",
            description:
              "Si tienes algún documento adicional que te permita identificarte (como un DNI o una tarjeta de residencia), es útil llevarlo en caso de necesitarlo.",
          },
          {
            title: "Billete de vuelta",
            description:
              "A veces es útil tener a mano el billete de vuelta para presentarlo a la autoridad migratoria al llegar a Londres.",
          },
        ],
      },
      payment: {
        title: "Cómo pagar en Reino Unido",
        intro:
          "En Londres, la moneda oficial es la libra esterlina (£), por lo que deberás tener en cuenta:",
        items: [
          {
            title: "Tarjetas de crédito/débito",
            description:
              "Las tarjetas de crédito/débito Visa o Mastercard son aceptadas en la mayoría de los comercios, restaurantes y tiendas. Sin embargo, asegúrate de que tu tarjeta tenga habilitada la opción para pagos internacionales, y verifica con tu banco las posibles comisiones por su uso en el extranjero.",
          },
          {
            title: "Cambio de dinero",
            description:
              "Aunque puedes cambiar euros a libras en las casas de cambio o en los aeropuertos, los tipos de cambio suelen ser más altos. Es más económico cambiar dinero antes de viajar, o usar cajeros automáticos en Londres. Los bancos en Londres también ofrecen servicio de cambio de divisas.",
          },
          {
            title: "Cajeros automáticos",
            description:
              "En caso de que necesites sacar efectivo, puedes usar los cajeros automáticos de bancos en Londres. Asegúrate de que tu banco no cobre comisiones excesivas por la retirada de dinero. Es recomendable retirar pequeñas cantidades para evitar cargos altos.",
          },
        ],
      },
      insurance: {
        title: "Seguros de viaje",
        items: [
          {
            title: "Seguro de salud",
            description:
              "Aunque el sistema de salud en Reino Unido es bueno, los turistas de la UE no siempre tienen acceso gratuito al NHS (Sistema Nacional de Salud). Se recomienda contratar un seguro de viaje que cubra asistencia médica, enfermedades, accidentes y hospitalización.",
          },
          {
            title: "Seguro de cancelación",
            description:
              "En caso de que tengas que cancelar tu vuelo o cambiar las fechas, un seguro de cancelación puede reembolsarte el costo de los billetes de avión y otros servicios reservados.",
          },
          {
            title: "Seguro de equipaje",
            description:
              "Un seguro de equipaje es útil si tu maleta se pierde o se daña en el viaje. Asegúrate de que el seguro cubra tanto la pérdida como los daños.",
          },
        ],
      },
    },
    flying: {
      title: "Cómo volar a Londres",
      intro:
        "No será ninguna sorpresa si te digo que a Londres hay que ir en avión… Aquí te dejo unos consejos para tu viaje.",
      booking: {
        title: "Cómo reservar tus vuelos",
        items: [
          {
            title: "Dónde buscar vuelos",
            description:
              "Utiliza comparadores de vuelos como Skyscanner, Google Flights o Kayak para encontrar los mejores precios y horarios. Puedes filtrar los vuelos según tus preferencias (directos, con escalas, horarios…). En este paso, ¡recuerda siempre navegar en modo incógnito! Así evitamos que los rastreadores web nos detecten y suba el precio de los vuelos.",
          },
          {
            title: "Reserva con antelación",
            description:
              "Los precios de los vuelos suelen ser más baratos si se reservan varias semanas antes del viaje. Si tu trabajo no es un problema, asegúrate de tener fechas flexibles para aprovechar las ofertas.",
          },
          {
            title: "Confirmación y check-in",
            description:
              "Una vez reservado tu vuelo, asegúrate de recibir la confirmación y revisar la política de equipaje y los requisitos para hacer el check-in online. Muchos vuelos permiten hacer el check-in online 24 horas antes del vuelo.",
          },
        ],
      },
      airports: {
        title: "Aeropuertos principales",
        items: [
          {
            title: "Heathrow",
            description:
              "El aeropuerto más grande de Londres, con vuelos internacionales y nacionales. Está ubicado a unos 24 km al oeste del centro de Londres y tiene excelentes conexiones en metro, tren y autobús.",
          },
          {
            title: "Gatwick",
            description:
              "Está al sur de Londres y es una opción popular para vuelos internacionales y de bajo coste. Se puede llegar al centro de la ciudad en tren (el Gatwick Express) o en autobús.",
          },
          {
            title: "Stansted",
            description:
              "Un aeropuerto de bajo coste situado al noreste de Londres. Tiene buenas conexiones en tren y autobús con el centro de Londres.",
          },
          {
            title: "Luton",
            description:
              "También es un aeropuerto utilizado por aerolíneas de bajo coste, ubicado al norte de Londres. Conexiones con el centro de la ciudad en autobuses o trenes.",
          },
        ],
      },
      skates: {
        title: "Cómo volar con tus patines",
        items: [
          {
            title: "Equipaje de carga",
            description:
              "Si quieres evitar problemas, lo mejor es que vayan dentro de una maleta a la bodega del avión. Lo malo es que deberás facturar el equipaje, por lo que será más costoso.",
          },
          {
            title: "Equipaje de cabina",
            description:
              "También puedes subirlos al avión dentro de una maleta o mochila más pequeña. Si tienes que desmontar los patines para ahorrar espacio, puedes llevar las botas y las guías por separado… Pero ojo, monta siempre las ruedas en las guías, ya que por si solas, pueden considerarlas un objeto contundente y dar problemas en los controles.",
          },
          {
            title: "En los pies",
            description:
              "No es recomendable… Pero si vas muy justo de espacio, puedes intentar entrar con los patines puestos. Lo malo es que es casi seguro que acabes caminando por el aeropuerto solo con las botas.",
          },
        ],
      },
    },
    pointsOfInterest: {
      title: "Puntos de Interés en el evento",
      hydePark: {
        title: "Hyde Park",
        description:
          "Todo el evento transcurrirá alrededor de Hyde Park. Es uno de los espacios verdes más emblemáticos de Londres, y su ubicación central lo convierte en el punto de partida perfecto para las actividades del evento.",
        mapUrl: "https://maps.app.goo.gl/BSTDB8HDY3EZKGrU6",
      },
    },
    accommodation: {
      title: "Cómo encontrar alojamiento",
      options: {
        title: "Opciones de alojamiento",
        items: [
          {
            title: "Reservar con antelación",
            description:
              "Igual que los billetes de avión, es recomendable reservar tu alojamiento varias semanas antes del evento. Seguramente encuentres más opciones y precios más económicos.",
          },
          {
            title: "Opciones de alojamiento",
            description: [
              "Hoteles: Si tu presupuesto es amplio, Londres tiene una amplia variedad de hoteles, desde económicos hasta lujosos.",
              "Hostales: Son una opción asequible para quienes viajan con un presupuesto más ajustado.",
              "Apartamentos: Si viajas en grupo o prefieres más privacidad, un apartamento puede ser ideal. Si buscas algo más económico, también puedes alquilar una habitación en el apartamento de alguien.",
            ],
          },
          {
            title: "Dónde reservar",
            description:
              "Puedes hacerlo a través de plataformas como Booking.com, AirBnb, Expedia o directamente en los sitios web de los hoteles.",
          },
          {
            title: "Zona para alojarse",
            description:
              "Teniendo en cuenta el apartado anterior, recomendamos buscar tu alojamiento máximo a 20 minutos patinando de la zona de interés. Puedes usar Google Maps para calcular cuanto te costará llegar utilizando el modo bicicleta. Otra opción es alojarte algo más lejos, pero con buena conexión de transporte público.",
          },
        ],
      },
    },
    practicalTips: {
      title: "Consejos prácticos",
      tips: [
        {
          icon: "weather",
          title: "Clima",
          description:
            "Londres tiene un clima impredecible, con lluvias durante todo el año… Pero no te preocupes, si el tiempo no acompaña, estamos preparando alternativas a cubierto para no dejar de patinar durante el evento.",
        },
        {
          icon: "time",
          title: "Hora",
          description:
            "Londres está en la zona horaria GMT o BST (hora de verano británica). Ten en cuenta la diferencia horaria con España (1 hora menos en invierno, 2 horas menos en verano).",
        },
        {
          icon: "language",
          title: "Idioma",
          description:
            "El idioma principal es el inglés, pero la mayoría de las personas entiende y habla algo de español, especialmente en áreas turísticas.",
        },
        {
          icon: "power",
          title: "Adaptadores de enchufe",
          description:
            "Los enchufes en Reino Unido son de tipo G (con 3 entradas rectangulares), por lo que necesitarás un adaptador para cargar tus dispositivos.",
        },
        {
          icon: "wifi",
          title: "Redes sociales y Wi-Fi",
          description:
            "La mayoría de los lugares públicos y cafeterías tienen Wi-Fi gratuito. También puedes comprar una SIM local para tener acceso a datos móviles en tu teléfono.",
        },
        {
          icon: "customs",
          title: "Costumbres locales",
          description:
            "Los británicos son muy puntuales, así que asegúrate de llegar a tiempo a las actividades.",
        },
      ],
    },
    suggestions: {
      title: "Buzón de Sugerencias",
      description:
        "¿Todavía tienes alguna duda? ¿Crees que nos hemos dejado de contar algo?",
      callToAction: "¡No dudes en dejarnos un mensaje aquí abajo!",
    },
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmitSuggestion = () => {
    alert("¡Gracias por tu sugerencia!");
    setSuggestion("");
  };

  const renderTipIcon = (iconType) => {
    switch (iconType) {
      case "weather":
        return <WbSunnyIcon sx={{ color: "var(--jea-color-secondary)" }} />;
      case "time":
        return <AccessTimeIcon sx={{ color: "var(--jea-color-secondary)" }} />;
      case "language":
        return <LanguageIcon sx={{ color: "var(--jea-color-secondary)" }} />;
      case "power":
        return <PowerIcon sx={{ color: "var(--jea-color-secondary)" }} />;
      case "wifi":
        return <WifiIcon sx={{ color: "var(--jea-color-secondary)" }} />;
      case "customs":
        return <PeopleIcon sx={{ color: "var(--jea-color-secondary)" }} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "var(--jea-color-secondary)" }}
        >
          {guideData.introduction.title}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontStyle: "italic", mb: 4 }}
        >
          {guideData.introduction.subtitle}
        </Typography>

        <Typography variant="body1" paragraph>
          {guideData.introduction.welcome}
        </Typography>

        <Typography variant="body1" paragraph>
          {guideData.introduction.description}
        </Typography>
      </Paper>

      {/* Preparativos antes del viaje */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ backgroundColor: "#f0f7ff" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {guideData.preparations.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <DocumentScannerIcon
                sx={{ mr: 1, color: "var(--jea-color-secondary)" }}
              />
              <Typography variant="h6">
                {guideData.preparations.documents.title}
              </Typography>
            </Box>
            <List>
              {guideData.preparations.documents.items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <AttachMoneyIcon
                sx={{ mr: 1, color: "var(--jea-color-secondary)" }}
              />
              <Typography variant="h6">
                {guideData.preparations.payment.title}
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {guideData.preparations.payment.intro}
            </Typography>
            <List>
              {guideData.preparations.payment.items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <HealthAndSafetyIcon
                sx={{ mr: 1, color: "var(--jea-color-secondary)" }}
              />
              <Typography variant="h6">
                {guideData.preparations.insurance.title}
              </Typography>
            </Box>
            <List>
              {guideData.preparations.insurance.items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Cómo volar a Londres */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{ backgroundColor: "#f0f7ff" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {guideData.flying.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            {guideData.flying.intro}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FlightIcon sx={{ mr: 1, color: "var(--jea-color-secondary)" }} />
              <Typography variant="h6">
                {guideData.flying.booking.title}
              </Typography>
            </Box>
            <List>
              {guideData.flying.booking.items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FlightIcon sx={{ mr: 1, color: "var(--jea-color-secondary)" }} />
              <Typography variant="h6">
                {guideData.flying.airports.title}
              </Typography>
            </Box>
            <List>
              {guideData.flying.airports.items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LuggageIcon
                sx={{ mr: 1, color: "var(--jea-color-secondary)" }}
              />
              <Typography variant="h6">
                {guideData.flying.skates.title}
              </Typography>
            </Box>
            <List>
              {guideData.flying.skates.items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Puntos de Interés en el evento */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{ backgroundColor: "#f0f7ff" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {guideData.pointsOfInterest.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <ParkIcon sx={{ mr: 1, color: "var(--jea-color-secondary)" }} />
            <Typography variant="h6">
              {guideData.pointsOfInterest.hydePark.title}
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {guideData.pointsOfInterest.hydePark.description}
          </Typography>
          <Box sx={{ width: "100%", textAlign: "center", my: 2 }}>
            <Link
              href={guideData.pointsOfInterest.hydePark.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "var(--jea-color-secondary)" }}
              >
                Ver en Google Maps
              </Button>
            </Link>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Cómo encontrar alojamiento */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{ backgroundColor: "#f0f7ff" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {guideData.accommodation.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <HotelIcon sx={{ mr: 1, color: "var(--jea-color-secondary)" }} />
            <Typography variant="h6">
              {guideData.accommodation.options.title}
            </Typography>
          </Box>
          <List>
            {guideData.accommodation.options.items.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.title}
                  secondary={
                    Array.isArray(item.description) ? (
                      <React.Fragment>
                        {item.description.map((desc, i) => (
                          <React.Fragment key={i}>
                            <Typography variant="body2" component="span">
                              {desc}
                            </Typography>
                            {i < item.description.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    ) : (
                      item.description
                    )
                  }
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Consejos prácticos */}
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          sx={{ backgroundColor: "#f0f7ff" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {guideData.practicalTips.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {guideData.practicalTips.tips.map((tip, index) => (
              <ListItem key={index}>
                <ListItemIcon>{renderTipIcon(tip.icon)}</ListItemIcon>
                <ListItemText primary={tip.title} secondary={tip.description} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Buzón de Sugerencias */}
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          {guideData.suggestions.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {guideData.suggestions.description}
        </Typography>
        <Typography variant="body1" paragraph>
          {guideData.suggestions.callToAction}
        </Typography>

        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Tu sugerencia"
            variant="outlined"
            value={suggestion}
            onChange={handleSuggestionChange}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmitSuggestion}
            sx={{ backgroundColor: "var(--jea-color-secondary)" }}
          >
            Enviar sugerencia
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
