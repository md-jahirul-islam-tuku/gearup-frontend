import { z } from "zod";

export const getZodErrors = (error: z.ZodError) => {
  const { fieldErrors, formErrors } = z.flattenError(error);

  return {
    message:
      formErrors[0] ??
      Object.values(fieldErrors).flat()[0] ??
      "Validation Error",

    errorDetails: fieldErrors,
  };
};
