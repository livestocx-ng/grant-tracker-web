# ManageContactInfoApi

All URIs are relative to *https://infra-granttracker.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountControllerUpdateAccountEmail**](#accountcontrollerupdateaccountemail) | **POST** /v1/account/me/update-email | |
|[**accountControllerUpdateAccountName**](#accountcontrollerupdateaccountname) | **PATCH** /v1/account/me/update-name | |

# **accountControllerUpdateAccountEmail**
> accountControllerUpdateAccountEmail(updateAccountEmailDTO)


### Example

```typescript
import {
    ManageContactInfoApi,
    Configuration,
    UpdateAccountEmailDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new ManageContactInfoApi(configuration);

let updateAccountEmailDTO: UpdateAccountEmailDTO; //

const { status, data } = await apiInstance.accountControllerUpdateAccountEmail(
    updateAccountEmailDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountEmailDTO** | **UpdateAccountEmailDTO**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountControllerUpdateAccountName**
> AccountInfo accountControllerUpdateAccountName(updateAccountNameDTO)


### Example

```typescript
import {
    ManageContactInfoApi,
    Configuration,
    UpdateAccountNameDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new ManageContactInfoApi(configuration);

let updateAccountNameDTO: UpdateAccountNameDTO; //

const { status, data } = await apiInstance.accountControllerUpdateAccountName(
    updateAccountNameDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountNameDTO** | **UpdateAccountNameDTO**|  | |


### Return type

**AccountInfo**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

