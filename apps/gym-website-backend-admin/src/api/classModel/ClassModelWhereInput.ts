import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ClassModelWhereInput = {
  description?: StringNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
