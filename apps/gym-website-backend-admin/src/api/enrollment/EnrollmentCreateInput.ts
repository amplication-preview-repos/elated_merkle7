import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EnrollmentCreateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
