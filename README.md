# 🚗 Taxi VTC - Site Web de Réservation

Site web professionnel pour entreprise de transport VTC (Voiture de Transport avec Chauffeur) développé avec Next.js 15 et optimisé pour la conversion.

## 🌟 Fonctionnalités

### Pages Principales
- **Page d'accueil** - Landing page optimisée avec formulaire de réservation
- **Services** - Présentation de la flotte et des services
- **Tarifs** - Grille tarifaire transparente par zones
- **Réservation** - Formulaire complet en 3 étapes
- **À propos** - Présentation de l'entreprise, licences et certifications
- **Contact** - Multiples moyens de contact et urgences

### Fonctionnalités Techniques
- ✅ **Responsive Design** - Optimisé mobile-first
- ✅ **SEO Optimisé** - Métadonnées complètes pour chaque page
- ✅ **Performance** - Next.js 15 avec App Router
- ✅ **Formulaires Interactifs** - Validation côté client et serveur
- ✅ **API Routes** - Gestion des réservations
- ✅ **TypeScript** - Type safety complète
- ✅ **Tailwind CSS** - Design moderne et cohérent

### Optimisations Conversion
- 📞 **Numéros cliquables** partout
- 🎯 **CTA multiples** sur chaque page
- ⚡ **Réservation rapide** dès la page d'accueil
- 💰 **Estimation prix** en temps réel
- 🕒 **Service 24h/24** mis en avant
- ⭐ **Témoignages clients** pour la confiance

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le projet (si depuis un repo)
git clone <votre-repo>
cd taxi-vtc

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts Disponibles

```bash
npm run dev      # Mode développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Vérification ESLint
```

## 📁 Structure du Projet

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   ├── api/               # API Routes
│   │   └── booking/       # API réservations
│   ├── reservation/       # Page réservation
│   ├── tarifs/           # Page tarifs
│   ├── services/         # Page services
│   ├── a-propos/         # Page à propos
│   └── contact/          # Page contact
├── components/            # Composants React
│   ├── layout/           # Header, Footer
│   ├── booking/          # Formulaires réservation
│   └── ui/               # Composants UI réutilisables
└── lib/                  # Utilitaires et helpers
    └── utils.ts          # Fonctions communes
```

## 🎨 Design et UX

### Palette de Couleurs
- **Primary**: Bleu (#2563eb) - Confiance et professionnalisme
- **Secondary**: Jaune (#fbbf24) - CTA et urgence
- **Success**: Vert (#059669) - Confirmation et disponibilité
- **Alert**: Rouge (#dc2626) - Urgences et erreurs

### Typography
- **Font**: Inter (Google Fonts) - Lisibilité optimale
- **Hiérarchie**: H1-H6 bien définie pour le SEO

## 🔧 Personnalisation

### Configuration des Tarifs
Modifiez les tarifs dans `src/lib/utils.ts` :

```typescript
export const ZONE_PRICES = {
  'paris-centre': { standard: 25, premium: 40, luxury: 60 },
  'paris-etendu': { standard: 30, premium: 45, luxury: 65 },
  // ...
}
```

### Informations de Contact
Mettez à jour dans :
- `src/components/layout/Header.tsx` - Numéro dans le header
- `src/components/layout/Footer.tsx` - Infos complètes
- `src/app/contact/page.tsx` - Page contact

### Métadonnées SEO
Chaque page a ses métadonnées dans le fichier `page.tsx` correspondant.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Tous les composants sont optimisés pour ces breakpoints avec Tailwind CSS.

## 🛠 Technologies Utilisées

- **Framework**: [Next.js 15](https://nextjs.org/) - React avec App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Icons**: [Lucide React](https://lucide.dev/) - Icônes modernes
- **Deployment**: Optimisé pour [Vercel](https://vercel.com/)

## 🔒 Sécurité et Conformité

### RGPD
- Mentions légales dans les formulaires
- Politique de confidentialité (à ajouter)
- Consentement explicite pour les données

### Sécurité
- Validation côté client et serveur
- Sanitisation des données
- Protection CSRF native Next.js

## 📈 SEO et Performance

### SEO
- Métadonnées optimisées par page
- Structure HTML sémantique
- URL explicites
- Données structurées (à ajouter)

### Performance
- Images optimisées (Next.js Image)
- Code splitting automatique
- Lazy loading des composants
- CSS critique en inline

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Build Local
```bash
npm run build
npm run start
```

## 🔮 Évolutions Futures

### Intégrations à Prévoir
- [ ] **Google Maps API** - Calcul précis des distances
- [ ] **Système de Paiement** - Stripe ou PayPal
- [ ] **Base de Données** - PostgreSQL ou MongoDB
- [ ] **Email Service** - SendGrid ou Mailgun
- [ ] **SMS Service** - Twilio pour confirmations
- [ ] **Analytics** - Google Analytics 4
- [ ] **Chat en Direct** - Intercom ou Crisp

### Fonctionnalités Avancées
- [ ] **Espace Client** - Historique des courses
- [ ] **Suivi en Temps Réel** - Géolocalisation
- [ ] **Application Mobile** - React Native
- [ ] **Panel Admin** - Gestion des réservations
- [ ] **API Publique** - Pour intégrations tierces

## 📞 Support

Pour toute question technique :
- **Documentation**: Ce README
- **Issues**: GitHub Issues (si applicable)
- **Email**: contact@taxi-vtc.com

## 📄 Licence

Ce projet est sous licence propriétaire. Tous droits réservés.

---

**Développé avec ❤️ pour optimiser les conversions et offrir une expérience utilisateur exceptionnelle.**
