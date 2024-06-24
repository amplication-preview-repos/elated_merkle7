import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MembershipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
