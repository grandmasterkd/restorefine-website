import { useFormState } from "../../contact-form-context";
import Image from "next/image";
import { SelectedService } from "../selected-service";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export function StepSix() {
  const { state } = useFormState();
  const { submissionData } = state;

  if (!submissionData) return null;

  return (
    <div className="">
      <div>
        <h2 className="mb-0 text-3xl font-semibold">
          <span className="py-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
            Your Enquiry Was
            <br />
            Made Successfully
          </span>
        </h2>
        <p>Below is an preview of your submitted details.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-4">
          <SelectedService title={state.mainService || ""} />
          <div>
            <Link className="" href="/">
              <Button className="w-full" size="lg" variant="secondary">
                Go Back Home
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="capitalize">
            <div className="text-lg text-[#6D6C6D]">{state.serviceType}</div>
            <div className="text-lg text-white"> {state.budget}</div>
            <div className="text-lg text-white">
              {state.timeline === "other"
                ? state.customTimeline
                : state.timeline}
            </div>
          </div>

          <div className="h-px bg-white/30" />

          <div className="space-y-4">
            <div>
              <div className="text-sm text-[#6D6C6D]">Name</div>
              <div className="text-lg text-white">{submissionData.name}</div>
            </div>

            <div>
              <div className="text-sm text-[#6D6C6D]">Email</div>
              <div className="text-lg text-white">{submissionData.email}</div>
            </div>

            <div>
              <div className="text-sm text-[#6D6C6D]">Mobile Phone</div>
              <div className="text-lg text-white">{submissionData.phone}</div>
            </div>

            <div>
              <div className="text-sm text-[#6D6C6D]">Company Name</div>
              <div className="text-lg text-white">{submissionData.company}</div>
            </div>

            <div>
              <div className="text-sm text-[#6D6C6D]">Message</div>
              <div className="text-lg text-white">{submissionData.message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
