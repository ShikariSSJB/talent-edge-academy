import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SPREADSHEET_ID = "1O3fGucthLH4sYcd68LZWogpZVgfL7UNTS47cFsfNiJo";
const SHEET_RANGE = "Inquiries!A:J";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

const inquirySchema = z.object({
  form: z.string().trim().max(60).default("Website"),
  studentName: z.string().trim().min(2, "Please enter a name").max(100),
  parentName: z.string().trim().max(100).optional().default(""),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30)
    .regex(/^[0-9+()\-\s]+$/, "Please enter a valid phone number"),
  email: z.union([z.string().trim().email().max(255), z.literal("")]).optional().default(""),
  grade: z.string().trim().max(60).optional().default(""),
  program: z.string().trim().max(80).optional().default(""),
  subjects: z.string().trim().max(300).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
});

export type InquiryInput = z.input<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];

    if (!lovableApiKey || !connectionKey) {
      throw new Error("The inquiry sheet is not connected yet. Please contact the academy directly.");
    }

    const row = [
      new Date().toISOString(),
      data.form,
      data.studentName,
      data.parentName,
      data.phone,
      data.email,
      data.grade,
      data.program,
      data.subjects,
      data.message,
    ];

    const response = await fetch(
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": connectionKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({ values: [row] }),
      },
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Google Sheets append failed [${response.status}]: ${errorBody}`);
      throw new Error(`Could not save the inquiry [${response.status}]: ${errorBody}`);
    }

    return { ok: true as const };
  });
