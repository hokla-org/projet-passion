# Projet passion - DiploDoc

Dans ce projet, tu vas créer **DiploDoc**, un site internet permettant à des patients de consulter l'annuaire des médecins et de prendre rendez-vous avec eux.
Il se compose de deux pages:

- une pour visualiser l'ensemble des médecins et en rechercher
- une page détaillée pour chacun des médecins avec un mode de prise de rendez-vous

## Déroulement

Ce projet a été créé de façon à ce que tu puisses travailler dessus de façon indépendante, à ton rythme. Si tu restes bloqué.e sur un ticket, n'hésite pas à demander de l'aide à ton coach par mail. Explique-lui où tu en es, ce que tu as essayé de faire et le détail de ton erreur/problème. Tu peux joindre des captures d'écran et vidéos pour illustrer ton propos.

## Comment installer et lancer le projet ?

Avant toute chose, je t'invite à "forker" ce projet, c'est à dire en créer un copie afin de ne pas modifier l'original. Tu peux le faire en cliquant sur le bouton "Fork" sur github, en haut à droite de ton écran.

### Installation

Pour commencer le projet, il te faudra avoir installé Node et Deno.

#### Node

Pour installer node, tu peux suivre télécharger et lancer le fichier d’installation suivant: https://nodejs.org/en/

**Check**

En allant dans ton terminal, la commande `node --version` devrait afficher la version de node

#### Deno

Finalement, pour deno, suis le tutoriel: https://deno.land/manual@v1.29.4/getting_started/installation

### Lancement

Maintenant, tu peux lancer le projet. À l'aide de ton terminal, déplace-toi dans le projet et lance la commence 
```
yarn
```

Dans une première fenêtre de ton terminal, vas dans le dossier backend et lance la commande:
```
node routes.js 
```

Dans une seconde fenêtre de ton terminal, vas ans le dossier frontend et lance la commande
```
deno run --allow-net --allow-read --watch app.js
```
‌

Tu peux maintenant ouvrir ton navigateur et aller sur l’url http://localhost:3000/index.html


Maintenant que tu as lancé le projet, tu peux commencer à t'amuser avec !
