# AuthApi

All URIs are relative to *https://infra-granttracker.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authControllerSignIn**](#authcontrollersignin) | **POST** /v1/auth/signin | |

# **authControllerSignIn**
> SigninResponsePayload authControllerSignIn(signinDTO)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    SigninDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let signinDTO: SigninDTO; //

const { status, data } = await apiInstance.authControllerSignIn(
    signinDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signinDTO** | **SigninDTO**|  | |


### Return type

**SigninResponsePayload**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

