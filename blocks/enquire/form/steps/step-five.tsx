"use client";

import { ArrowLeft } from "lucide-react";
import { useFormState } from "../../contact-form-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { SelectedService } from "../selected-service";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export function StepFive() {
  const { state, dispatch } = useFormState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    const fields = ["name", "email", "phone", "company", "message"];
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
          mainService: state.mainService,
          serviceType: state.serviceType,
          budget: state.budget,
          timeline:
            state.timeline === "other" ? state.customTimeline : state.timeline,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      dispatch({ type: "SET_SUBMITTED", payload: true });
      dispatch({
        type: "SET_SUBMISSION_DATA",
        payload: {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          company: formData.get("company") as string,
          message: formData.get("message") as string,
        },
      });
      dispatch({ type: "SET_STEP", payload: 6 });

      toast({
        title: "Success",
        description: "Your enquiry was sent, thank you.",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        submit:
          "An error occurred while submitting the form. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      <h2 className="mb-2 text-3xl font-semibold">
        <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
          Contact Info
        </span>
      </h2>

      <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 cursor-pointer">
        <div className="order-2 lg:order-1 space-y-4">
          <SelectedService title={state.mainService || ""} />

          <div className="flex items-center rounded-xl border border-white/50 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-md font-normal text-white">
              {state.serviceType}
            </span>
          </div>

          <div className="flex items-center rounded-xl border border-white/50 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-md font-normal text-white">
              {state.budget}
            </span>
          </div>

          <div className="flex items-center rounded-xl border border-white/50 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-md font-normal text-white">
              {state.timeline === "other"
                ? state.customTimeline
                : state.timeline}
            </span>
          </div>

          <button
            onClick={() => dispatch({ type: "SET_STEP", payload: 4 })}
            className="w-fit inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-4 py-2 text-white transition-colors hover:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000]">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm">Go Back</span>
          </button>
        </div>

        <section className="order-1 lg:order-2 lg:space-y-0 space-y-12">
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
              <Label htmlFor="company" className="text-white">
                Company
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Enter Your Company Name"
                className="border-white/50 bg-transparent text-white placeholder:text-white/50"
              />
              {errors.company && (
                <p className="text-sm text-red-500">{errors.company}</p>
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

            {errors.submit && (
              <p className="text-sm text-red-500 mb-4">{errors.submit}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              <div className="flex size-7 items-center justify-center rounded-full bg-[#ff0000]">
                <ArrowLeft className="size-4 rotate-180 text-white" />
              </div>
            </button>
          </form>
          <div className="grid lg:hidden w-full h-px bg-white/40"></div>
        </section>
      </div>
    </div>
  );
}
