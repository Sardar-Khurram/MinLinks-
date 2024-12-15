export default async function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      try {
        // Example: Log the message to the console or handle it as required.
        console.log("Contact Form Data:", { name, email, message });
  
        // Here, you can:
        // - Send the data to a database (e.g., MongoDB)
        // - Send an email notification using an email service (e.g., Nodemailer, SendGrid)
        // - Any other processing you need
  
        return res.status(200).json({ message: "Your message has been received!" });
      } catch (error) {
        console.error("Error handling contact form submission:", error);
        return res.status(500).json({ message: "An error occurred. Please try again later." });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ message: `Method ${req.method} not allowed.` });
    }
  }
  