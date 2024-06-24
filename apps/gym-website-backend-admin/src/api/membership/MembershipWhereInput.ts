import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MembershipWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
