import { Job, Degree } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  degrees: Degree[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
  skillsSearchTerm: string;
}
