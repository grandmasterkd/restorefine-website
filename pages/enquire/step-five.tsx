"use client";

import { ArrowLeft } from "lucide-react";
import { useFormState } from "./contact-form-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const serviceTypeOptions = [
  { id: "logo-design", title: "Logo Design" },
  { id: "brand-identity", title: "Brand Identity" },
  { id: "brand-strategy", title: "Brand Strategy" },
  { id: "rebranding", title: "Re-branding" },
];

const budgetOptions = [
  { id: "tier1", title: "£0 - £499" },
  { id: "tier2", title: "£500 - £999" },
  { id: "tier3", title: "£1000 - £2499" },
  { id: "tier4", title: "£2500 - £4999" },
  { id: "tier5", title: "£5000+" },
];

const timelineOptions = [
  { id: "asap", title: "ASAP" },
  { id: "1-2-weeks", title: "1-2 Weeks" },
  { id: "1-month", title: "1 Month" },
  { id: "1-3-months", title: "1-3 Months" },
  { id: "flexible", title: "Flexible" },
];

export function StepFive() {
  const { state, dispatch } = useFormState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getServiceTypeTitle = (id: string | null) => {
    return serviceTypeOptions.find((option) => option.id === id)?.title || "";
  };

  const getBudgetTitle = (id: string | null) => {
    return budgetOptions.find((option) => option.id === id)?.title || "";
  };

  const getTimelineTitle = (id: string | null) => {
    return timelineOptions.find((option) => option.id === id)?.title || "";
  };

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    const fields = ["name", "email", "phone", "state", "message"];
    fields.forEach((field) => {
      if (!formData.get(field)) {
        newErrors[field] = "This field is required";
      }
    });

    const email = formData.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const message = formData.get("message") as string;
    if (message && message.length < 6) {
      newErrors.message = "Message must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // service: state.service,
          serviceType: getServiceTypeTitle(state.serviceType),
          budget: getBudgetTitle(state.budget),
          timeline: getTimelineTitle(state.timeline),
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          state: formData.get("state"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      // Handle success (could dispatch a success action or show a success message)
      console.log("Form submitted successfully");
      // You might want to add a success message here or redirect the user
    } catch (error) {
      console.error("Submission error:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto">
      <h2 className="mb-12 text-5xl font-medium">
        <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
          Contact Info
        </span>
      </h2>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          {/* Selected service tile from step 1 */}
          <div className="aspect-square rounded-[32px] bg-[#d9d9d9]" />

          {/* Selected service type from step 2 */}
          <div className="flex items-center rounded-xl border border-white/50 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-xl font-normal text-white">
              {getServiceTypeTitle(state.serviceType)}
            </span>
          </div>

          {/* Selected budget from step 3 */}
          <div className="flex items-center rounded-xl border border-white/50 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-xl font-normal text-white">
              {getBudgetTitle(state.budget)}
            </span>
          </div>

          {/* Selected timeline from step 4 */}
          <div className="flex items-center rounded-xl border border-white/50 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-xl font-normal text-white">
              {getTimelineTitle(state.timeline)}
            </span>
          </div>

          {/* Back button */}
          <button
            onClick={() => dispatch({ type: "SET_STEP", payload: 4 })}
            className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000]">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span>Go Back</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter Your Name Here"
              className="border-white/50 bg-transparent text-white placeholder:text-white/50"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email Here"
              className="border-white/50 bg-transparent text-white placeholder:text-white/50"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Mobile Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter Your Phone Here"
              className="border-white/50 bg-transparent text-white placeholder:text-white/50"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state" className="text-white">
              State
            </Label>
            <Input
              id="state"
              name="state"
              placeholder="What State Do You Live In"
              className="border-white/50 bg-transparent text-white placeholder:text-white/50"
            />
            {errors.state && (
              <p className="text-sm text-red-500">{errors.state}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="I'd like to know how you can help me with..."
              className="min-h-[100px] border-white/50 bg-transparent text-white placeholder:text-white/50"
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            Submit
            <div className="flex size-7 items-center justify-center rounded-full bg-[#ff0000]">
              <ArrowLeft className="size-4 rotate-180 text-white" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
