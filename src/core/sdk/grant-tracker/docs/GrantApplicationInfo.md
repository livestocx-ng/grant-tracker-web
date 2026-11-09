# GrantApplicationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**applicationUrl** | **string** |  | [default to undefined]
**deadline** | **string** |  | [optional] [default to undefined]
**author** | [**AccountInfo**](AccountInfo.md) |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**dateAdded** | **string** |  | [default to undefined]
**assignees** | [**Array&lt;GrantApplicationAssigneeInfo&gt;**](GrantApplicationAssigneeInfo.md) |  | [default to undefined]

## Example

```typescript
import { GrantApplicationInfo } from './api';

const instance: GrantApplicationInfo = {
    id,
    name,
    applicationUrl,
    deadline,
    author,
    status,
    dateAdded,
    assignees,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
