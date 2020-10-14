import { gql } from '@apollo/client';


export const GET_FORMDATA = gql`
  query {
    publicForm(formId: "1lf_E0x4") {
      publicFormSettings {
        organizationName
        submitButtonText
        title
      }

      formFields {
        ... on ShortTextField {
          id
          label
        }
        ... on LongTextField {
          id
          label
        }
        ... on SelectField {
          id
          label
          options
        }
        ... on RadioVerticalField {
          id
          label
          options
        }
        ... on ChecklistVerticalField {
          id
          label
          options
        }
        ... on DateField {
          id
          label
        }
        __typename
      }
    }
  }
`;

export default GET_FORMDATA;
