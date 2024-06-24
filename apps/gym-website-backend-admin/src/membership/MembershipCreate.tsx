import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MembershipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};