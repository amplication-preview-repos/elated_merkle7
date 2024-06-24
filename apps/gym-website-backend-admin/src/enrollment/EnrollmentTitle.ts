import { Enrollment as TEnrollment } from "../api/enrollment/Enrollment";

export const ENROLLMENT_TITLE_FIELD = "status";

export const EnrollmentTitle = (record: TEnrollment): string => {
  return record.status?.toString() || String(record.id);
};
