import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs", () => {
  it("fetches jobs", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });
});
