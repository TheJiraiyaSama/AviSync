import * as z from "zod";

export const maintenanceFormSchema = z.object({
  type: z.string(),
  categories: z.string().array().nonempty(),
  description: z.string().min(40, { message: "Min 40 chars" }),
  labourHours: z.string(),
  parts: z
    .object({
      type: z.string(),
      serialNumber: z.string(),
      newOrReplace: z.string(),
    })
    .array(),
  personnel: z
    .object({
      name: z.string(),
    })
    .array(),
  supervisorName: z.string(),
  supervisorUploadSign: z.any(),
  supervisorApprovalTimeStamp: z.string().datetime(),
  attachments: z
    .object({
      type: z.string(),
      attachment: z.any(),
    })
    .array(),
  complianceCheckList: z
    .object({
      checked: z.boolean(),
      description: z.string(),
    })
    .array().optional(),
  qCTestList: z
    .object({
      description: z.string(),
    })
    .array().optional(),
  envDocs: z
    .object({
      type: z.string(),
      attachment: z.any(),
    })
    .array(),
  emergencyProcedures: z.object({
    name: z.string(),
  }).array().optional(),
  other: z.string().optional(),
  applyForAirworthiness: z.boolean().default(false),
});
