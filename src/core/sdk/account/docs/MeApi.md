# MeApi

All URIs are relative to *https://infra-granttracker.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountControllerDeleteAccount**](#accountcontrollerdeleteaccount) | **DELETE** /v1/account/me/delete | |
|[**accountControllerGetDetailedAccountInfo**](#accountcontrollergetdetailedaccountinfo) | **GET** /v1/account/me/detailed | |
|[**accountControllerUpdateAccountPassword**](#accountcontrollerupdateaccountpassword) | **PATCH** /v1/account/me/update-password | |
|[**accountControllerUpdateProfileImage**](#accountcontrollerupdateprofileimage) | **PATCH** /v1/account/me/update-profile-image | |

# **accountControllerDeleteAccount**
> accountControllerDeleteAccount(deleteAccountDTO)


### Example

```typescript
import {
    MeApi,
    Configuration,
    DeleteAccountDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

let deleteAccountDTO: DeleteAccountDTO; //

const { status, data } = await apiInstance.accountControllerDeleteAccount(
    deleteAccountDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteAccountDTO** | **DeleteAccountDTO**|  | |


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

# **accountControllerGetDetailedAccountInfo**
> AccountInfo accountControllerGetDetailedAccountInfo()


### Example

```typescript
import {
    MeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

const { status, data } = await apiInstance.accountControllerGetDetailedAccountInfo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AccountInfo**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountControllerUpdateAccountPassword**
> accountControllerUpdateAccountPassword(updateAccountPasswordDTO)


### Example

```typescript
import {
    MeApi,
    Configuration,
    UpdateAccountPasswordDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

let updateAccountPasswordDTO: UpdateAccountPasswordDTO; //

const { status, data } = await apiInstance.accountControllerUpdateAccountPassword(
    updateAccountPasswordDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountPasswordDTO** | **UpdateAccountPasswordDTO**|  | |


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

# **accountControllerUpdateProfileImage**
> AccountInfo accountControllerUpdateProfileImage(updateProfileImageDTO)


### Example

```typescript
import {
    MeApi,
    Configuration,
    UpdateProfileImageDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

let updateProfileImageDTO: UpdateProfileImageDTO; //

const { status, data } = await apiInstance.accountControllerUpdateProfileImage(
    updateProfileImageDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProfileImageDTO** | **UpdateProfileImageDTO**|  | |


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

