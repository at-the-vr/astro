import assert from 'node:assert/strict';
import { describe, before, it } from 'node:test';
import * as cheerio from 'cheerio';
import { loadFixture } from './test-utils.js';

describe('Slots with client: directives', () => {
	/** @type {import('./test-utils').Fixture} */
	let fixture;

	before(async () => {
		fixture = await loadFixture({ root: './fixtures/astro-slot-with-client/' });
		await fixture.build();
	});

	it('Tags of dynamic tags works', async () => {
		const html = await fixture.readFile('/index.html');
		const $ = cheerio.load(html);
		assert.equal($('script').length, 1);
	});

	it('Astro slot tags are cleaned', async () => {
		const html = await fixture.readFile('/index.html');
		const $ = cheerio.load(html);
		assert.equal($('astro-slot').length, 0);
	});
});
