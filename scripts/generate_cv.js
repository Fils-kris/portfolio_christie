const fs = require('fs');
const PDFDocument = require('pdfkit');

const outDir = './assets/docs';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const filePath = `${outDir}/CV-Christie-Grace.pdf`;

const doc = new PDFDocument({ size: 'A4', margin: 50 });
const stream = fs.createWriteStream(filePath);

doc.pipe(stream);

// Theme colors
const violet = '#55198b';
const teal = '#09d3ac';
const darkBg = '#171c28';
const darkText = '#ffffff';
const lightText = '#b8c5d6';

// Header
doc.fillColor(violet).fontSize(22).font('Helvetica-Bold').text('MBOLONDINGA Christie Grâce', { align: 'left' });
doc.moveDown(0.2);
doc.fillColor(lightText).fontSize(11).font('Helvetica').text('Développeuse / Designer Senior — Portfolio: MBOLONDINGA', { align: 'left' });

// Contact line
doc.moveDown(0.6);
doc.fillColor('#999999').fontSize(10).text('Email: christie@example.com  •  Téléphone: +33 6 00 00 00 00  •  Localisation: France', { align: 'left' });

// Separator
doc.moveTo(50, doc.y + 8).lineTo(545, doc.y + 8).lineWidth(1).strokeColor('#2a3142').stroke();

// Summary
doc.moveDown(1);
doc.fillColor(darkText).fontSize(12).font('Helvetica-Bold').text('Résumé', { continued: false });

const summary = "Développeuse et designer senior avec plus de 8 ans d'expérience en création d'interfaces web modernes et performantes. Spécialisée en design UI/UX, développement front-end (HTML, CSS, JavaScript, Tailwind) et optimisation des expériences utilisateurs. Leadership technique, conception d'architecture d'interface et mentorat d'équipes.";

doc.moveDown(0.3);
doc.fillColor(lightText).fontSize(10).font('Helvetica').text(summary, { align: 'left' });

// Experience
function addSectionTitle(title) {
  doc.moveDown(0.8);
  doc.fillColor(violet).fontSize(12).font('Helvetica-Bold').text(title);
}

function addExperience(role, company, period, bullets) {
  doc.moveDown(0.3);
  doc.fillColor('#ffffff').fontSize(11).font('Helvetica-Bold').text(`${role} — ${company}`, { continued: true }).fillColor('#b8c5d6').fontSize(10).text(`  (${period})`);
  doc.moveDown(0.2);
  bullets.forEach(b => {
    doc.circle(58, doc.y + 6, 2).fill('#b8c5d6');
    doc.fillColor(lightText).fontSize(10).text('  ' + b, { indent: 12, continued: false, lineGap: 2 });
    doc.moveDown(0.2);
  });
}

addSectionTitle('Expérience');
addExperience('Lead Frontend Developer', 'SaaS Creative Agency', '2021 — Présent', [
  'Dirigé la refonte UI d’une plateforme B2B augmentant la rétention de 18%.',
  'Conception et implémentation de design system basé sur Tailwind CSS.',
  'Mentorat d’une équipe de 5 développeurs front-end.'
]);

addExperience('Senior UI/UX Developer', 'Studio Digital', '2017 — 2021', [
  'Création de prototypes haute fidélité et tests utilisateurs.',
  'Intégration front-end responsive et optimisation des performances.',
  'Collaboration étroite avec équipes produit et marketing.'
]);

// Education
addSectionTitle('Formation');
doc.moveDown(0.2);
doc.fillColor('#ffffff').fontSize(11).font('Helvetica-Bold').text('Master Design & Interactivité — Université Tech', { continued: true }).fillColor(lightText).font('Helvetica').fontSize(10).text('  (2014 — 2016)');

// Skills
addSectionTitle('Compétences');
doc.moveDown(0.2);
const skills = ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React', 'Figma', 'Adobe XD', 'Design System', 'Accessibility'];
const colX = [50, 260, 420];
let sx = 0; let sy = doc.y;
skills.forEach((s, i) => {
  const x = colX[i % 3];
  if (i % 3 === 0 && i !== 0) sy += 16;
  doc.fillColor(teal).rect(x - 6, sy - 2, 6, 12).fill();
  doc.fillColor(lightText).fontSize(10).text(s, x, sy);
});

// Projects (short list)
addSectionTitle('Projets notables');
doc.moveDown(0.3);
doc.fillColor(lightText).fontSize(10).text('• Plateforme SaaS — optimisation UI et dashboard flexible.');
doc.moveDown(0.2);
doc.text('• Application mobile hybride — design et front-end réactif.');

// Footer
doc.addPage();
doc.fillColor(violet).fontSize(14).font('Helvetica-Bold').text('Services', 50, 60);
doc.moveDown(0.4);
doc.fillColor(lightText).fontSize(10).text('Conception UI/UX · Frontend engineering · Design systems · Prototypage · Audit performance', { align: 'left' });

// Contact block
doc.moveDown(2);
doc.fillColor('#ffffff').fontSize(12).font('Helvetica-Bold').text('Contact', { underline: false });
doc.moveDown(0.2);
doc.fillColor(lightText).fontSize(10).text('Email: christie@example.com');

// Finish
doc.end();

stream.on('finish', () => {
  console.log('PDF generated:', filePath);
});
