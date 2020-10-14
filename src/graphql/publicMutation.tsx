import { gql } from '@apollo/client';

const SUBMIT_FORM = gql`
  mutation {
    submitPublicForm(
      input: {
        formId: "1lf_E0x4"
        filledFields: [{ fieldId: "your_name", fieldValue: "Teste" }]
      }
    ) {
      repoItem {
        id
        title
      }
    }
  }
`;

export default SUBMIT_FORM;
