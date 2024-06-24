import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EnrollmentUpdateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
