# TESTGiletJaune
Test technique pour appartoo

Pour utiliser ce repo vous devez dans un premier temps installer les dépendances
```bash
npm i
```

Vous devez ensuite créer un fichier `.env` contenant au minimum la variable suivante :
```bash
PORT = <your-selected-port>
```
Les données sont stockées sur une DB MySQL, vous devez avant d'utiliser ce repo créer une base de données `node-boiler-plate` contenant une table `post` structurées de la manière suivante :
```bash
_id: Auto Increment (AI)
title: VARCHAR 255
content: VARCHAR 255
```

Le fichier `package.json` utilise le module nodemon au niveau du script `start`. Il vous est donc conseillé d'installer ce module en globale avant de lancer la commande :
```bash
npm start
```