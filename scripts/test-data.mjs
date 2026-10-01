import { portfolioData } from '../src/data/portfolioData.js';
import assert from 'node:assert/strict';

console.log('--- Testing portfolioData.js data integrity ---');

// 1. Personal
assert.ok(portfolioData.personal, 'Missing personal object');
assert.equal(portfolioData.personal.name, 'MARIIA TROIAN');
assert.equal(portfolioData.personal.handle, '@rebel_in_cork');
assert.ok(portfolioData.personal.instagramUrl.includes('instagram.com/rebel_in_cork'));
assert.ok(portfolioData.personal.location.includes('Cork, Ireland'));
assert.ok(portfolioData.personal.heroImage, 'Missing hero image');

// 2. Measurements
assert.ok(portfolioData.measurements, 'Missing measurements object');
assert.ok(portfolioData.measurements.heightCm >= 170, 'Invalid heightCm');
assert.ok(portfolioData.measurements.heightIn.includes("'"), 'Invalid heightIn format');
assert.ok(portfolioData.measurements.eyes, 'Missing eyes');
assert.ok(portfolioData.measurements.hair, 'Missing hair');
assert.ok(portfolioData.measurements.bustCm && portfolioData.measurements.bustIn);
assert.ok(portfolioData.measurements.waistCm && portfolioData.measurements.waistIn);
assert.ok(portfolioData.measurements.hipsCm && portfolioData.measurements.hipsIn);

// 3. Categories
assert.ok(Array.isArray(portfolioData.categories), 'Categories must be an array');
assert.ok(portfolioData.categories.length >= 5, 'Must have at least 5 category filters');

// 4. Shoots
assert.ok(Array.isArray(portfolioData.shoots), 'Shoots must be an array');
assert.ok(portfolioData.shoots.length >= 10, 'Must have at least 10 portfolio shoots');
for (const shoot of portfolioData.shoots) {
  assert.ok(shoot.id, 'Shoot missing id');
  assert.ok(shoot.title, 'Shoot missing title');
  assert.ok(shoot.category, 'Shoot missing category');
  assert.ok(shoot.image, 'Shoot missing image URL');
  assert.ok(shoot.photographer, 'Shoot missing photographer');
}

// 5. Digitals / Snaps
assert.ok(Array.isArray(portfolioData.digitals), 'Digitals must be an array');
assert.equal(portfolioData.digitals.length, 4, 'Must have exactly 4 standard agency digitals');

// 6. CompCard
assert.ok(Array.isArray(portfolioData.compCardImages), 'compCardImages must be an array');
assert.equal(portfolioData.compCardImages.length, 4, 'CompCard requires 4 editorial shots');

// 7. Press & Accolades
assert.ok(Array.isArray(portfolioData.press), 'Press must be an array');
assert.ok(portfolioData.press.length >= 4, 'Press should have at least 4 publications');

// 8. Contact & Representation
assert.ok(portfolioData.contact, 'Missing contact info');
assert.ok(portfolioData.contact.email, 'Missing email');
assert.ok(portfolioData.contact.whatsapp, 'Missing whatsapp');

console.log('✓ All portfolioData assertions PASSED successfully!');
