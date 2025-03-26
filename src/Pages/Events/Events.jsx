import "./Events.css";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import PlaceIcon from "@mui/icons-material/Place";

const events = [
  {
    title: "Murcia AchoTour",
    description:
      "Embárcate en un recorrido único por Murcia, descubriendo la esencia de la ciudad a través de sus rincones más emblemáticos, cultura local y actividades emocionantes.",
    date: "21 de febrero de 2025",
    location: "Murcia, España",
    logo: "/events/logos/murcia.webp",
    img: "",
    highlight: false,
    completed: true,
  },
  {
    title: "London Calling",
    description:
      "Una experiencia urbana en la capital inglesa. Desde sus mercados históricos hasta sus modernas galerías, ¡prepárate para vivir Londres como nunca antes!",
    date: "6 de junio de 2025",
    location: "Londres, Reino Unido",
    logo: "/events/logos/london.webp",
    img: "/events/london.png",
    highlight: true,
    completed: false,
  },
  {
    title: "Bilbao Pura Kalea",
    description:
      "Sumérgete en el corazón de Bilbao, donde las calles cobran vida con música, arte y gastronomía local. Un evento que fusiona tradición y modernidad.",
    date: "26 de septiembre de 2025",
    location: "Bilbao, España",
    logo: "/events/logos/bilbao.webp",
    img: "",
    highlight: false,
    completed: false,
  },
  {
    title: "Sevilla de Tranquis",
    description:
      "Escapa al ritmo relajado de Sevilla, disfrutando de sus plazas, flamenco y tapas. Tres días para dejarse llevar por la serenidad de la ciudad andaluza.",
    date: "7 de noviembre de 2025",
    location: "Sevilla, España",
    logo: "/events/logos/sevilla.webp",
    img: "",
    highlight: false,
    completed: false,
  },
];

const Events = () => {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
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
            <CardContent
              sx={{
                width: "100%",
                padding: "0 !important",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                  margin: { sx: "0", md: "auto" },
                }}
              >
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <img
                    src={event.img}
                    alt="Evento-actual"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "90%", md: "50%" },
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: { xs: "auto", md: "400px" },
                    p: { xs: 2, md: 3 },
                  }}
                >
                  <Typography variant="h5" fontWeight="bold">
                    {event.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ textAlign: "justify" }}
                  >
                    {event.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      width: "100%",
                    }}
                    mt={2}
                  >
                    <Box display="flex" alignItems="center" gap={1} mt={2}>
                      <EventIcon color="action" />
                      <Typography>{event.date}</Typography>
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
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  background: "transparent",
                  border: 0,
                  overflow: "visible",
                }}
              >
                <Box
                  sx={{
                    mr: 2,
                    width: "100%",
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "20px",
                    position: "relative",
                  }}
                >
                  <img
                    src={event.logo}
                    alt="Evento-actual"
                    style={{
                      height: "110px",
                      zIndex: "1",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    backgroundColor: "white",
                    paddingTop: 6,
                    position: "relative",
                  }}
                >
                  <Typography
                    color="text.secondary"
                    sx={{ textAlign: "justify" }}
                  >
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
                  {event.completed && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      Evento Finalizado
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Events;
