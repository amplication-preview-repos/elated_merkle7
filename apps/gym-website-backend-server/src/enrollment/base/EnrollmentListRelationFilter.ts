/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnrollmentWhereInput } from "./EnrollmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EnrollmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EnrollmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EnrollmentWhereInput)
  @IsOptional()
  @Field(() => EnrollmentWhereInput, {
    nullable: true,
  })
  every?: EnrollmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnrollmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EnrollmentWhereInput)
  @IsOptional()
  @Field(() => EnrollmentWhereInput, {
    nullable: true,
  })
  some?: EnrollmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnrollmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EnrollmentWhereInput)
  @IsOptional()
  @Field(() => EnrollmentWhereInput, {
    nullable: true,
  })
  none?: EnrollmentWhereInput;
}
export { EnrollmentListRelationFilter as EnrollmentListRelationFilter };