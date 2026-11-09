# AuthAdminApi

All URIs are relative to *https://infra-granttracker.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authAdminControllerBlockUserAccount**](#authadmincontrollerblockuseraccount) | **PATCH** /v1/auth/admin/block-user | |
|[**authAdminControllerCreateUserAccount**](#authadmincontrollercreateuseraccount) | **POST** /v1/auth/admin/add-user | |
|[**authAdminControllerDeleteUserAccount**](#authadmincontrollerdeleteuseraccount) | **DELETE** /v1/auth/admin/delete-user | |
|[**authAdminControllerUpdateUserPassword**](#authadmincontrollerupdateuserpassword) | **PATCH** /v1/auth/admin/update-user-password | |

# **authAdminControllerBlockUserAccount**
> authAdminControllerBlockUserAccount()


### Example

```typescript
import {
    AuthAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthAdminApi(configuration);

let email: string; // (default to undefined)
let status: 'pending' | 'active' | 'inactive' | 'shadow_banned' | 'disabled'; // (default to undefined)

const { status, data } = await apiInstance.authAdminControllerBlockUserAccount(
    email,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;active&#39; | &#39;inactive&#39; | &#39;shadow_banned&#39; | &#39;disabled&#39;**]**Array<&#39;pending&#39; &#124; &#39;active&#39; &#124; &#39;inactive&#39; &#124; &#39;shadow_banned&#39; &#124; &#39;disabled&#39;>** |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authAdminControllerCreateUserAccount**
> authAdminControllerCreateUserAccount(createUserAccountDto)


### Example

```typescript
import {
    AuthAdminApi,
    Configuration,
    CreateUserAccountDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthAdminApi(configuration);

let createUserAccountDto: CreateUserAccountDto; //

const { status, data } = await apiInstance.authAdminControllerCreateUserAccount(
    createUserAccountDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserAccountDto** | **CreateUserAccountDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authAdminControllerDeleteUserAccount**
> authAdminControllerDeleteUserAccount()


### Example

```typescript
import {
    AuthAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthAdminApi(configuration);

let email: string; // (default to undefined)

const { status, data } = await apiInstance.authAdminControllerDeleteUserAccount(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authAdminControllerUpdateUserPassword**
> authAdminControllerUpdateUserPassword()


### Example

```typescript
import {
    AuthAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthAdminApi(configuration);

let email: string; // (default to undefined)
let password: string; // (default to undefined)

const { status, data } = await apiInstance.authAdminControllerUpdateUserPassword(
    email,
    password
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|
| **password** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

