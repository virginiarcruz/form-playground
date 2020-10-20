export interface AppContextInterface {
  loading?: boolean;
  data?: {
    publicForm?: {
      publicFormSettings?: {
        organizationName?: string;
        title?: string;
        submitButtonText: string;
        __typename: string;
      };
      formFields?: Array<object>;
    };
  };
}
