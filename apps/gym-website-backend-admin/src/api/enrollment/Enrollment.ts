import { ClassModel } from "../classModel/ClassModel";
import { User } from "../user/User";

export type Enrollment = {
  classField?: ClassModel | null;
  createdAt: Date;
  id: string;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
