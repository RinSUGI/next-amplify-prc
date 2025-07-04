export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('テストです');
    res.status(200).json({ message: 'Success' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 