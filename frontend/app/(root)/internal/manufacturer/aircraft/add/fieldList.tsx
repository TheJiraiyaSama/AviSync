import * as z from "zod";
const ACCEPTED_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];
export const formSchema = z.object({
  serialNumber: z
    .string({
      required_error: "It is required.",
    })
    .min(2, {
      message: "Serial Number must be at least 2 characters.",
    }),
  aircraftName: z
    .string({
      required_error: "It is required.",
    })
    .min(2, {
      message: "AirCraft name must be at least 2 characters.",
    }),
  engineNumber: z
    .string({
      required_error: "It is required.",
    })
    .min(2, {
      message: "Engine Number must be at least 2 characters.",
    }),
  manufacturePrice: z
    .number({
      required_error: "It is required.",
    })
    .gte(1000, {
      message: "Manufacture Price must be at least 1000 wei.",
    }),
  image: z
    .any(),
});

const fieldList = [
  {
    name: "serialNumber",
    placeHolder: "Enter serial number",
    label: "Serial Number",
  },
  {
    name: "engineNumber",
    placeHolder: "Enter engine number",
    label: "Engine Number",
  },
  {
    name: "aircraftName",
    placeHolder: "Enter name",
    label: "Aircraft Name",
  },
  {
    name: "manufacturePrice",
    placeHolder: "Enter manufacture price",
    label: "Manufacture Price",
  },
];

export default fieldList;
