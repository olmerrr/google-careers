import axios from "axios";
jest.mock("axios");

import getDegrees from "@/api/getDegrees";

const axiosGetMock = axios.get as jest.Mock;

describe("getDegrees", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: 1,
          degree: "Master's",
        },
      ],
    });
  });
  it("fetches all possible degree requirements", async () => {
    await getDegrees();
    expect(axios.get).toHaveBeenCalledWith(newFunction());

    function newFunction(): string {
      return "http://myfakeapi.com/degrees";
    }
  });
  it("extracts jobs from response", async () => {
    const data = await getDegrees();
    expect(data).toEqual([
      {
        id: 1,
        degree: "Master's",
      },
    ]);
  });
});
