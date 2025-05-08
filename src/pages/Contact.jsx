import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnndvgyn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thanks! Your message has been sent.");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="mt-1 block w-full border border-gray-300 p-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>

        {status && <p className="text-center text-green-600 mt-4">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
