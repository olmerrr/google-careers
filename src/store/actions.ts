import { Commit } from "vuex";

import {
  FETCH_JOBS,
  RECEIVE_JOBS,
  FETCH_DEGREES,
  RECEIVE_DEGREES,
} from "@/store/constants";

import getJobs from "@/api/getJobs";
import getDegrees from "@/api/getDegrees";

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
  [FETCH_DEGREES]: async (context: Context) => {
    const degreeListings = await getDegrees();
    context.commit(RECEIVE_DEGREES, degreeListings);
  },
};

export default actions;
