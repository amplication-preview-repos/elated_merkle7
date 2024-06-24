import { EnrollmentCreateNestedManyWithoutClassModelsInput } from "./EnrollmentCreateNestedManyWithoutClassModelsInput";

export type ClassModelCreateInput = {
  description?: string | null;
  enrollments?: EnrollmentCreateNestedManyWithoutClassModelsInput;
  name?: string | null;
  price?: number | null;
};
