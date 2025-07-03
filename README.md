# 🚗 drive-me24 - Premium Chauffeur Service

Site web professionnel pour drive-me24, service de transport premium avec chauffeur disponible 24h/24 dans plusieurs villes européennes. Développé avec Next.js 15 et optimisé pour les conversions téléphoniques.

## 🌍 Villes Couvertes

### Pages Actives
- **Paris** - Page d'accueil principale (`/`) - **📞 +33 1 85 09 53 99**
- **Genève** - Page dédiée (`/geneve`) - **📞 +41 22 51 97 227**
- **Bruxelles** - Page dédiée (`/bruxelles`) - *En développement*

Chaque ville a sa propre page optimisée avec :
- Numéro de téléphone local
- Zones de service spécifiques
- Données structurées SEO adaptées
- Images et contenus localisés

## 🌟 Fonctionnalités

### Approche "Call-First"
- 📞 **CTA téléphonique prioritaire** - Numéros cliquables partout
- ⚡ **Réservation en 2 minutes** par téléphone
- 🕒 **Service 24h/24** mis en avant
- 🎯 **Conversion optimisée** pour les appels

### Fonctionnalités Techniques
- ✅ **Responsive Design** - Optimisé mobile-first
- ✅ **SEO Multi-villes** - Métadonnées et données structurées par ville
- ✅ **Performance** - Next.js 15 avec App Router
- ✅ **TypeScript** - Type safety complète
- ✅ **Tailwind CSS** - Design moderne et cohérent
- ✅ **Données Structurées** - Schema.org pour chaque ville

### Zones de Service
**Paris & Île-de-France**
- Tous aéroports (CDG, Orly, Le Bourget)
- Gares principales (Gare du Nord, Lyon, Montparnasse)
- Quartiers d'affaires (La Défense, Châtelet, Opéra)
- Événements (Palais des Congrès, Bercy, Roland Garros)

**Genève & Région**
- Aéroport GVA, Cointrin, Terminal privé
- Gares (Cornavin, Eaux-Vives, Annemasse)
- Organisations internationales (ONU, CERN, WTO)
- Centre-ville, Carouge, Meyrin

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le projet
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
npm run dev      # Mode développement avec Turbopack
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Vérification ESLint
```

## 📁 Structure du Projet

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout global avec Header/Footer
│   ├── page.tsx           # Page Paris (principale)
│   ├── globals.css        # Styles globaux
│   ├── geneve/           # Page Genève
│   │   └── page.tsx      # Landing page Genève
│   └── bruxelles/        # Page Bruxelles
│       └── page.tsx      # Landing page Bruxelles
├── components/            # Composants React
│   ├── layout/           # Header, Footer
│   │   ├── Header.tsx    # Navigation principale
│   │   └── Footer.tsx    # Pied de page
│   └── ui/               # Composants UI (shadcn/ui)
│       ├── button.tsx    # Boutons CTA
│       ├── card.tsx      # Cards de présentation
│       ├── badge.tsx     # Badges de statut
│       └── ...           # Autres composants UI
├── lib/                  # Utilitaires et helpers
│   └── utils.ts          # Fonctions communes (cn, etc.)
└── public/               # Assets statiques
    ├── paris.jpeg        # Image hero Paris
    ├── brussels.webp     # Image hero Bruxelles
    └── mick-haupt-*.jpg  # Image hero Genève
```

## 🎨 Design et UX

### Approche Visual
- **Hero Full-Screen** avec image de ville
- **CTA Téléphonique Central** avec drapeaux nationaux
- **Trust Indicators** (4.9/5, 24h/7j, 2 min)
- **Sections Why Call Us** avec icônes explicatives

### Palette de Couleurs
- **Primary**: Bleu (#2563eb) - Confiance et professionnalisme
- **Secondary**: Adaptable selon la ville
- **Background**: Blanc pour le contraste
- **Text**: Noir pour la lisibilité

### Typography
- **Font**: Inter (via Tailwind) - Lisibilité optimale
- **Hiérarchie**: H1 très large (7xl) pour l'impact

## 🔧 Personnalisation par Ville

### Ajouter une Nouvelle Ville
1. Créer le dossier `src/app/[ville]/`
2. Ajouter `page.tsx` avec le template
3. Adapter les informations :
   - Numéro de téléphone local
   - Zones de service
   - Image de hero
   - Données structurées

### Configuration des Contacts
**Paris**: `+33 1 85 09 53 99`
**Genève**: `+41 22 51 97 227`
**Bruxelles**: *À définir*

### Métadonnées SEO
Chaque ville a ses propres :
- `structuredData` avec localisation
- Meta title/description
- URL canonique
- `areaServed` spécifique

## 📱 Responsive Design

- **Mobile First** - CTA téléphonique prioritaire sur mobile
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px  
  - Desktop: > 1024px
- **Touch-Friendly** - Boutons d'appel larges

## 🛠 Technologies Utilisées

- **Framework**: [Next.js 15](https://nextjs.org/) - React avec App Router et Turbopack
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/) - Composants React modernes
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Icons**: [Lucide React](https://lucide.dev/) - Icônes modernes
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Maps**: [@google/maps](https://www.npmjs.com/package/@google/maps) - Intégration Google Maps

## 📈 SEO et Performance

### SEO Multi-villes
- **Données Structurées** par ville (Schema.org LocalBusiness)
- **Meta Tags** adaptés par localisation  
- **URLs Sémantiques** (`/geneve`, `/bruxelles`)
- **Images Optimisées** avec Next.js Image

### Performance
- **Turbopack** pour le développement rapide
- **App Router** avec composants serveur
- **Lazy Loading** automatique
- **Code Splitting** par route

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Variables d'Environnement
```env
NEXT_PUBLIC_SITE_URL=https://drive-me24.com
GOOGLE_MAPS_API_KEY=your_api_key
```

## 🔮 Évolutions Futures

### Nouvelles Villes
- [ ] **Lyon** - Marché français étendu
- [ ] **Nice** - Côte d'Azur et aéroport
- [ ] **Zurich** - Complément Suisse
- [ ] **Amsterdam** - Expansion Benelux

### Fonctionnalités Techniques
- [ ] **Système de Réservation** - Base de données
- [ ] **Suivi en Temps Réel** - API de géolocalisation
- [ ] **Paiement en Ligne** - Stripe intégration
- [ ] **SMS/Email** - Confirmations automatiques
- [ ] **Panel Admin** - Gestion multi-villes

### Intégrations
- [ ] **Google Maps API** - Calcul de trajets précis
- [ ] **Analytics Multi-villes** - Suivi par localisation
- [ ] **CRM** - Gestion clients centralisée

## 📞 Contact & Support

- **Email**: contact@drive-me24.com
- **Paris**: +33 1 85 09 53 99
- **Genève**: +41 22 51 97 227

---

**drive-me24** - Votre chauffeur premium, disponible 24h/24 dans toute l'Europe 🚗✨
