import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EnrollmentWhereInput = {
  classField?: ClassModelWhereUniqueInput;
  id?: StringFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
