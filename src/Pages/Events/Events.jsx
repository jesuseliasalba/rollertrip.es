import "./Events.css";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const events = [
  {
    title: "Murcia AchoTour",
    description:
      "Embárcate en un recorrido único por Murcia, descubriendo la esencia de la ciudad a través de sus rincones más emblemáticos, cultura local y actividades emocionantes.",
    date: "Viernes, 21 de febrero de 2025 - Domingo, 23 de febrero de 2025",
    location: "Murcia, España",
    highlight: false,
  },
  {
    title: "London Calling",
    description:
      "Una experiencia urbana en la capital inglesa. Desde sus mercados históricos hasta sus modernas galerías, ¡prepárate para vivir Londres como nunca antes!",
    date: "Viernes, 6 de junio de 2025 - Domingo, 8 de junio de 2025",
    location: "Londres, Reino Unido",
    highlight: true,
  },
  {
    title: "Bilbao Pura Kalea",
    description:
      "Sumérgete en el corazón de Bilbao, donde las calles cobran vida con música, arte y gastronomía local. Un evento que fusiona tradición y modernidad.",
    date: "Viernes, 26 de septiembre de 2025 - Domingo, 28 de septiembre de 2025",
    location: "Bilbao, España",
    highlight: false,
  },
  {
    title: "Sevilla de Tranquis",
    description:
      "Escapa al ritmo relajado de Sevilla, disfrutando de sus plazas, flamenco y tapas. Tres días para dejarse llevar por la serenidad de la ciudad andaluza.",
    date: "Viernes, 7 de noviembre de 2025 - Domingo, 9 de noviembre de 2025",
    location: "Sevilla, España",
    highlight: false,
  },
];

const Events = () => {
  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", p: 3 }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        textAlign="center"
        mb={3}
        sx={{
          color: "var(--jea-color-primary)",
          textShadow: "0px 0px 20px #000",
          fontSize: "4rem",
        }}
      >
        Eventos
      </Typography>

      {events.map((event, index) =>
        event.highlight ? (
          <Card key={index} sx={{ mb: 3, padding: "0" }}>
            <CardContent sx={{ width: "100%", padding: "0 !important" }}>
              <Box display="flex" alignItems="center">
                <Box sx={{ mr: 2, width: "50%" }}>
                  <img
                    src="/events/london.png"
                    alt="Event-actual"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Chip label="Next Event" color="primary" sx={{ mb: 1 }} />
                  <Typography variant="h5" fontWeight="bold">
                    {event.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {event.description}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} mt={2}>
                    <EventIcon color="action" />
                    <Typography>{event.date}</Typography>
                    <AccessTimeIcon color="action" />
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <PlaceIcon color="action" />
                    <Typography>{event.location}</Typography>
                  </Box>
                  <Box mt={2} display="flex">
                    <Button variant="outlined">Más detalles</Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ) : null
      )}

      <Grid container spacing={3}>
        {events
          .filter((event) => !event.highlight)
          .map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {event.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {event.description}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} mt={2}>
                    <EventIcon color="action" />
                    <Typography>{event.date}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <PlaceIcon color="action" />
                    <Typography>{event.location}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Events;
