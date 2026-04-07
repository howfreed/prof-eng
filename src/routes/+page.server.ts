import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	contact: async ({ request, locals }) => {
		const fd = await request.formData();
		const name = String(fd.get('name') ?? '').trim();
		const email = String(fd.get('email') ?? '').trim();
		const company = String(fd.get('company') ?? '').trim();
		const message = String(fd.get('message') ?? '').trim();

		const values = { name, email, company, message };

		if (!name || name.length > 200) {
			return fail(400, { ...values, error: 'Please enter your name.' });
		}
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, { ...values, error: 'Please enter a valid email address.' });
		}
		if (!message || message.length < 10) {
			return fail(400, {
				...values,
				error: 'Please add a short note (at least 10 characters) so the reply can be useful.'
			});
		}
		if (message.length > 10000) {
			return fail(400, { ...values, error: 'Message is too long. Please shorten and try again.' });
		}

		// Wire to email (Resend, Postmark, etc.) or a webhook here when ready.
		console.info('[contact enquiry]', {
			site: locals.site,
			name,
			email,
			company: company || undefined,
			messagePreview: message.slice(0, 280) + (message.length > 280 ? '…' : '')
		});

		return { success: true as const };
	}
};
