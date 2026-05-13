import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const body = req.body;
        const { name, email, subject, message, type } = body;

        const isCareers = type === 'careers';
        const emailSubject = subject || (isCareers ? `New Job Application from ${name}` : `New Contact Form Submission from ${name}`);

        const htmlContent = isCareers ? `
      <h2>New Job Application: ${name}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Position:</strong> ${body.position}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <hr />
      <h3>Application Details</h3>
      <p><strong>Availability:</strong> ${body.availability}</p>
      <p><strong>Driver's License:</strong> ${body.hasLicense}</p>
      <p><strong>Background Check:</strong> ${body.backgroundCheck}</p>
      <hr />
      <h3>Work Experience</h3>
      <p><strong>Job 1:</strong> ${body.job1}</p>
      <p><strong>Job 2:</strong> ${body.job2}</p>
      <p><strong>Job 3:</strong> ${body.job3}</p>
      <hr />
      <h3>Additional Info</h3>
      <p>${body.additionalInfo || 'None'}</p>
    ` : `
      <h2>New Message from Cave Wave Contact Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

        const { data, error } = await resend.emails.send({
            from: 'system@cavewavecarwash.com',
            to: 'cavewavewash00@gmail.com',
            replyTo: email,
            subject: emailSubject,
            html: htmlContent,
        });

        if (error) {
            return res.status(400).json({ error });
        }

        return res.status(200).json({ data });
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
}
