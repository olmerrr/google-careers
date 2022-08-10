import { GlobalState } from "@/store/types";
import { Degree, Job } from "@/api/types";

import {
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  RECEIVE_DEGREES,
} from "@/store/constants";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
};

export default mutations;
