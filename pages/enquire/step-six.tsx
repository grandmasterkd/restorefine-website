import { useFormState } from "./contact-form-context";
import Image from "next/image";

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
  const { serviceType, budget, timeline, submissionData } = state;

  if (!submissionData) return null;

  const getServiceTypeTitle = (id: string | null) => {
    return serviceTypeOptions.find((option) => option.id === id)?.title || "";
  };

  const getBudgetTitle = (id: string | null) => {
    return budgetOptions.find((option) => option.id === id)?.title || "";
  };

  const getTimelineTitle = (id: string | null) => {
    return timelineOptions.find((option) => option.id === id)?.title || "";
  };

  return (
    <div className="">
      <h1 className="">
        <span className="block text-6xl font-medium text-white">
          Your Enquiry Was
        </span>
        <span className="block text-6xl font-medium text-[#6D6C6D]">
          Made Successfully
        </span>
      </h1>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="aspect-square rounded-[32px] bg-[#d9d9d9] overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Service preview"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-lg text-[#6D6C6D]">
              {getServiceTypeTitle(serviceType)}
            </div>
            <div className="text-xl text-white">{getBudgetTitle(budget)}</div>
            <div className="text-xl text-white">
              {getTimelineTitle(timeline)}
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-6">
            <div>
              <div className="text-lg text-[#6D6C6D]">Name</div>
              <div className="text-xl text-white">{submissionData.name}</div>
            </div>

            <div>
              <div className="text-lg text-[#6D6C6D]">Email</div>
              <div className="text-xl text-white">{submissionData.email}</div>
            </div>

            <div>
              <div className="text-lg text-[#6D6C6D]">Mobile Phone</div>
              <div className="text-xl text-white">{submissionData.phone}</div>
            </div>

            <div>
              <div className="text-lg text-[#6D6C6D]">Company Name</div>
              <div className="text-xl text-white">{submissionData.company}</div>
            </div>

            <div>
              <div className="text-lg text-[#6D6C6D]">Message</div>
              <div className="text-xl text-white">{submissionData.message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
