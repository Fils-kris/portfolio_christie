# Portfolio - Installation Locale Tailwind CSS

## Installation & Configuration

Ce projet utilise maintenant **Tailwind CSS v3** installé localement au lieu du CDN, ce qui élimine tous les problèmes de péage réseau.

### Prérequis
- Node.js v14+ et npm installés

### Première utilisation

1. **Installer les dépendances** (déjà fait) :
```bash
npm install
```

2. **Compiler le CSS Tailwind** :
```bash
npm run build
```

Cela génère `styles.css` à partir de `styles.tailwind.css`.

### Développement en continu

Pour recompiler automatiquement lors de modifications :
```bash
npm run dev
```

Cette commande compile et watch les changements du fichier `styles.tailwind.css`.

### Fichiers importants

- `styles.tailwind.css` - Source CSS Tailwind (entrez vos styles ici)
- `styles.css` - Fichier CSS compilé généré (ne pas modifier)
- `tailwind.config.js` - Configuration Tailwind
- `postcss.config.js` - Configuration PostCSS
- `package.json` - Scripts npm et dépendances

### Pourquoi local ?

✅ **Avantages** :
- Pas de problème CDN / Tracking Prevention
- Compilation optimisée (tree-shaking)
- Fonctionnelle offline
- Production-ready

## Modifications récentes

- Suppression du CDN Tailwind (`cdn.tailwindcss.com`)
- Suppression des CDN bloqués (AOS, Font Awesome)
- Remplacement des icônes par Unicode
- Installation de Tailwind CSS v3 en local

## Support

Pour tout changement CSS, modifiez `styles.tailwind.css` et relancez `npm run build`.
