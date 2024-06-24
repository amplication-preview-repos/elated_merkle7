import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ClassModelTitle } from "../classModel/ClassModelTitle";
import { UserTitle } from "../user/UserTitle";

export const EnrollmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="classField.id"
          reference="ClassModel"
          label="Class"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
