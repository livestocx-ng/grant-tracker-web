# AddGrantApplicationDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the grant application | [optional] [default to undefined]
**applicationUrl** | **string** | The URL of the grant application | [default to undefined]
**deadline** | **string** | The deadline of the grant application | [optional] [default to undefined]
**assignees** | **Array&lt;string&gt;** | The assignees of the grant application | [default to undefined]
**assignToSelf** | **boolean** | Whether to assign the grant application to the user | [default to undefined]

## Example

```typescript
import { AddGrantApplicationDto } from './api';

const instance: AddGrantApplicationDto = {
    name,
    applicationUrl,
    deadline,
    assignees,
    assignToSelf,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
