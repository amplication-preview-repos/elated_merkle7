import { EnrollmentUpdateManyWithoutClassModelsInput } from "./EnrollmentUpdateManyWithoutClassModelsInput";

export type ClassModelUpdateInput = {
  description?: string | null;
  enrollments?: EnrollmentUpdateManyWithoutClassModelsInput;
  name?: string | null;
  price?: number | null;
};
