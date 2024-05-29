// import mailchimp from '@mailchimp/mailchimp_marketing';

// mailchimp.setConfig({
//   apiKey: 'YOUR_API_KEY',
//   server: 'YOUR_SERVER_PREFIX', // e.g. 'us1'
// });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     try {
//       const response = await mailchimp.lists.addListMember('YOUR_AUDIENCE_ID', {
//         email_address: email,
//         status: 'subscribed',
//       });

//       return res.status(200).json({ message: 'Subscription successful' });
//     } catch (error) {
//       return res.status(500).json({ message: 'Subscription failed', error: error.response.body });
//     }
//   } else {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }
// }
