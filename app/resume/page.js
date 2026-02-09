import Resume from "@/components/resume/Resume";
import { getCertifications } from "@/lib/credlyService";

export default async function ResumePage() {
  const certifications = await getCertifications();
  return <Resume certifications={certifications} />;
}
