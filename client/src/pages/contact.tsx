import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { trackFormSubmission } from "@/lib/analytics";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z.string().trim().min(5, "Enter a subject with at least 5 characters."),
  message: z.string().trim().min(10, "Enter a message with at least 10 characters."),
  website: z.string().max(0, "Unable to submit this form."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactResponse {
  message: string;
  persisted: boolean;
  status: "stored" | "stored_temporarily";
}

export default function Contact() {
  const [submissionMessage, setSubmissionMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return (await response.json()) as ContactResponse;
    },
    onSuccess: (response) => {
      trackFormSubmission("contact_form");
      setSubmissionMessage({
        type: "success",
        text: response.message,
      });
      form.reset();
    },
    onError: () => {
      setSubmissionMessage({
        type: "error",
        text: "We could not send your message. Please try again or email info@canaryfoundation.org.",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmissionMessage(null);
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="border-b border-gray-200 bg-white py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact Canary</p>
              <h1 className="mb-5 text-4xl font-bold text-dark md:text-5xl">How can we help?</h1>
              <p className="text-lg leading-relaxed text-gray-600">
                Ask about Canary Foundation research, giving, or general foundation information.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20" aria-labelledby="contact-form-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <aside aria-label="Canary Foundation contact information">
                <h2 className="mb-5 text-2xl font-semibold text-dark">Contact information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary">
                      <Mail aria-hidden="true" className="h-5 w-5 text-dark" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Email</h3>
                      <a
                        href="mailto:info@canaryfoundation.org"
                        className="mt-1 inline-block font-medium text-primary hover:underline"
                      >
                        info@canaryfoundation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary">
                      <MapPin aria-hidden="true" className="h-5 w-5 text-dark" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Mailing address</h3>
                      <address className="mt-1 not-italic leading-relaxed text-gray-700">
                        Canary Foundation
                        <br />
                        PO Box 620134
                        <br />
                        Woodside, CA 94062-9991
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5 text-sm leading-relaxed text-gray-700">
                  <h3 className="mb-2 font-semibold text-dark">Before you send</h3>
                  <p>
                    Please do not include health, medical, financial, or other sensitive personal information. Contact details and messages are used to respond and may be retained as part of ordinary correspondence and record-keeping.
                  </p>
                </div>
              </aside>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <h2 id="contact-form-heading" className="mb-2 text-2xl font-semibold text-dark">
                  Send a message
                </h2>
                <p className="mb-7 text-sm text-gray-600">All fields are required.</p>

                {submissionMessage && (
                  <div
                    role={submissionMessage.type === "error" ? "alert" : "status"}
                    className={`mb-6 rounded-lg border p-4 text-sm font-medium ${
                      submissionMessage.type === "error"
                        ? "border-red-300 bg-red-50 text-red-800"
                        : "border-green-300 bg-green-50 text-green-800"
                    }`}
                  >
                    {submissionMessage.text}
                  </div>
                )}

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                    aria-busy={contactMutation.isPending}
                  >
                    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="contact-website">Website</label>
                      <input
                        id="contact-website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...form.register("website")}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input autoComplete="name" placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input autoComplete="off" placeholder="How can we help?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea rows={7} placeholder="Write your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary font-semibold text-dark hover:bg-primary-dark"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Sending message…" : "Send message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
