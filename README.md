## **Architecture du Projet**

### **Structure des Fichiers**

```
ProjetNode.js/
├── app/
│   ├── index.js          # Application Node.js
│   ├── package.json      # Dépendances du projet
│   └── Dockerfile        # Configuration Docker
├── deployment.yaml       # Configuration Kubernetes - Déploiement
├── service.yaml          # Configuration Kubernetes - Service
└── README.md            # Documentation du projet
```

### **Technologies Utilisées**

- **Node.js** : Environnement d'exécution JavaScript
- **Docker** : Plateforme de conteneurisation
- **Kubernetes** : Orchestrateur de conteneurs
- **Minikube** : Cluster Kubernetes local
- **kubectl** : Outil de ligne de commande pour Kubernetes

### **Description de l'Application**

L'application est un serveur HTTP Node.js minimaliste qui :

- Écoute sur le port 8000
- Retourne une page HTML simple
- Sert de proof-of-concept pour la chaîne de déploiement

---

## **Étapes de Réalisation**

### **1. Développement de l'Application**

Création d'une application Node.js basique avec un serveur HTTP exposant un endpoint simple.

### **2. Conteneurisation avec Docker**

- **Dockerfile** : Définition de l'environnement d'exécution
- **Construction de l'image** : `docker build -t joulalinajlaa/projet-nodejs:v2 .`
- **Optimisation** : Utilisation d'images Alpine, gestion des permissions utilisateur

### **3. Publication sur Docker Hub**

- Authentification : `docker login`
- Publication : `docker push joulalinajlaa/projet-nodejs:v2`
- **Image disponible** : [joulalinajlaa/projet-nodejs:v2](https://hub.docker.com/)

### **4. Configuration Kubernetes**

### **Deployment (`deployment.yaml`)**

- Déploiement de 2 réplicas de l'application
- Gestion du cycle de vie des pods
- Configuration des ports conteneur

### **Service (`service.yaml`)**

- Type : LoadBalancer
- Exposition sur le port 80
- Redirection vers le port 8000 des conteneurs

### **5. Déploiement avec Minikube**

- Initialisation du cluster : `minikube start`
- Application des configurations : `kubectl apply -f`
- Vérification des ressources déployées

---

## **Résultats et Validation**

### **Vérifications Effectuées**

### **État du Cluster**

bash

```
kubectl cluster-info
kubectl get nodes
```

**Résultat** : Cluster Minikube opérationnel avec un nœud actif

### **Pods Déployés**

bash

```
kubectl get pods
```

**Résultat** : 2 pods en statut "Running" pour l'application

### **Services Actifs**

bash

```
kubectl get services
```

**Résultat** :

- `projet-nodejs-service` : Type LoadBalancer, port 80:31667/TCP
- Service interne : ClusterIP sur le port 8000

### **Test d'Accès**

- Accès à l'application via : `minikube service projet-nodejs-service`
- Page web accessible avec le contenu attendu
- Réponse HTTP 200 validée

---

## **Difficultés Rencontrées et Solutions**

### **Problème 1 : Authentification Docker Hub**

- **Symptôme** : Difficulté avec l'authentification web-based
- **Solution** : Utilisation du code device et authentification manuelle

### **Problème 2 : Configuration du Service**

- **Symptôme** : External IP en "pending" dans Minikube
- **Solution** : Utilisation de `minikube service` pour l'accès local

### **Problème 3 : Permissions Docker**

- **Symptôme** : Erreurs de permission dans le conteneur
- **Solution** : Ajout d'un utilisateur non-root dans le Dockerfile
