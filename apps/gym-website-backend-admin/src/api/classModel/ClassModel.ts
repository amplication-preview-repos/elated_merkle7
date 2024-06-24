import { Enrollment } from "../enrollment/Enrollment";

export type ClassModel = {
  createdAt: Date;
  description: string | null;
  enrollments?: Array<Enrollment>;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
