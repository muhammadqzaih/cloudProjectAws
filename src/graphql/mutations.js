/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      name
      user
      description
      createdAt
      utterances {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      name
      user
      description
      createdAt
      utterances {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      name
      user
      description
      createdAt
      utterances {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const createUtterance = /* GraphQL */ `
  mutation CreateUtterance(
    $input: CreateUtteranceInput!
    $condition: ModelUtteranceConditionInput
  ) {
    createUtterance(input: $input, condition: $condition) {
      id
      text
      author
      conversationId
      data
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUtterance = /* GraphQL */ `
  mutation UpdateUtterance(
    $input: UpdateUtteranceInput!
    $condition: ModelUtteranceConditionInput
  ) {
    updateUtterance(input: $input, condition: $condition) {
      id
      text
      author
      conversationId
      data
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUtterance = /* GraphQL */ `
  mutation DeleteUtterance(
    $input: DeleteUtteranceInput!
    $condition: ModelUtteranceConditionInput
  ) {
    deleteUtterance(input: $input, condition: $condition) {
      id
      text
      author
      conversationId
      data
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
