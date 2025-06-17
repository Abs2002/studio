"use client";

import Section from "@/components/section";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add email sending functionality here
  };

  return (
    <Section id="contact" title="Contact Me" icon={Mail} className="bg-slate-100">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
 className="bg-white"
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required

            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
 className="bg-white"
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required

            />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
 className="bg-white"
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required

            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
 className="bg-white"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
}