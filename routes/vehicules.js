// importing express router
import Router from "express";
// creation d'un routeur express
const router = Router();
// notre base de donnees
let vehicules = [
  {
    id: 1,
    marque: "Dacia",
    modele: "Logan",
    immatriculation: "12345-A-6",
    disponible: true,
  },
  {
    id: 2,
    marque: "Renault",
    modele: "Clio",
    immatriculation: "67890-B-6",
    disponible: false,
  },
  {
    id: 3,
    marque: "Peugeot",
    modele: "208",
    immatriculation: "24680-D-1",
    disponible: true,
  },
];

// une route pour recuperer tous les vehicules
router.get("/", (req, res) => {
  // si le parametre de requete "disponible" est present et vaut "true", on retourne seulement les vehicules disponibles
  if (req.query.disponible === "true") {
    return res.status(200).json(vehicules.filter((v) => v.disponible));
    // sinon, on retourne tous les vehicules
  } else {
    res.status(200).json(vehicules);
  }
});

// une route pour recuperer un vehicule par son id
router.get("/:id", (req, res) => {
  // on cherche le vehicule correspondant a l'id passe en parametre
  const vehicule = vehicules.find((v) => v.id === parseInt(req.params.id));
  // si le vehicule n'existe pas, on retourne une erreur 404
  if (!vehicule) {
    return res.status(404).json({ error: "Vehicule non trouve" });
  }
  // sinon le vehicule
  res.status(200).json(vehicule);
});


router.post("/", (req, res) => {
    const { marque, modele, immatriculation} = req.body;
    if (!marque || !modele || !immatriculation) {
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    const nouveauVehicule = {
      id: vehicules.length + 1,
      marque,
      modele,
      immatriculation,
      disponible: true,
    };
    vehicules.push(nouveauVehicule);
    res.status(201).json(nouveauVehicule);
})