import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  photo: File | null;
  businessIndustry: string;
  companyWebsite: string;
  instagramHandle: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const businessIndustries = [
  "Hair Salon",
  "Nail Salon",
  "Spa & Wellness",
  "Barbershop",
  "Beauty Salon",
  "Massage Therapy",
  "Tattoo Studio",
  "Fitness Studio",
  "Other Service Business",
];

function App() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    photo: null,
    businessIndustry: "",
    companyWebsite: "",
    instagramHandle: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowVideo(false);
      }
    };

    if (showVideo) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showVideo]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
      🔔 New DoJourney Access Request:
    👤 Full Name: ${formData.fullName}
    📧 Email: ${formData.email}
    🏢 Industry: ${formData.businessIndustry}
    🌐 Website: ${formData.companyWebsite}
    📸 Instagram: ${formData.instagramHandle}
    📝 Message: ${formData.message}
        `.trim();

    const whatsappNumber = "972509444706"; // Replace with your phone number (no +, country code only)

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setFormStatus({
      type: "success",
      message:
        "Your request has been sent via WhatsApp. We will contact you shortly!",
    });

    // Optional: reset form
    setFormData({
      fullName: "",
      email: "",
      photo: null,
      businessIndustry: "",
      companyWebsite: "",
      instagramHandle: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-slate-900">
                DoJourney
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-purple-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-purple-600 transition-colors"
              >
                About
              </a>
              <a
                href="#request-access"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Request Access
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Smart Scheduling for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">
                {" "}
                Modern Salons
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your service business with intelligent scheduling,
              automated reminders, and seamless client management. Join
              forward-thinking salons already using DoJourney.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#request-access"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request Early Access
              </a>
              <button
                onClick={() => setShowVideo(true)}
                className="border-2 border-slate-300 hover:border-purple-600 text-slate-700 hover:text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                Watch Demo
              </button>
              {showVideo && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                  <div className="relative w-full max-w-4xl mx-auto p-4">
                    {/* Close button */}
                    <button
                      onClick={() => setShowVideo(false)}
                      className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold z-50 hover:bg-red-500 hover:text-white transition"
                      aria-label="Close"
                    >
                      &times;
                    </button>

                    {/* Video */}
                    <iframe
                      width="100%"
                      height="450"
                      src="https://www.youtube.com/embed/qlX4OXxc79A"
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to manage your business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From appointment booking to client management, DoJourney
              streamlines every aspect of your service business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Smart Scheduling
              </h3>
              <p className="text-slate-600">
                AI-powered scheduling that prevents double bookings and
                optimizes your calendar for maximum efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Client Management
              </h3>
              <p className="text-slate-600">
                Keep detailed client profiles, service history, and preferences
                all in one organized place.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Automated Reminders
              </h3>
              <p className="text-slate-600">
                Reduce no-shows with intelligent SMS and email reminders sent
                automatically to your clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Access Form */}
      <section id="request-access" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Request Early Access
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join our exclusive beta program and be among the first to
              experience the future of salon management.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            {formStatus.type === "success" ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Request Submitted!
                </h3>
                <p className="text-slate-600 text-lg">{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus.type === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-700">{formStatus.message}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="businessIndustry"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Business Industry *
                    </label>
                    <select
                      id="businessIndustry"
                      name="businessIndustry"
                      required
                      value={formData.businessIndustry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select your industry</option>
                      {businessIndustries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="companyWebsite"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="companyWebsite"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="instagramHandle"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    id="instagramHandle"
                    name="instagramHandle"
                    value={formData.instagramHandle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="@yourbusiness"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your business and why you're interested in DoJourney..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus.type === "loading"}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-[1.02] disabled:transform-none shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {formStatus.type === "loading"
                    ? "Submitting..."
                    : "Request Access"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Calendar className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">DoJourney</span>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              © 2025 DoJourney. All rights reserved. Built for the future of
              service businesses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
