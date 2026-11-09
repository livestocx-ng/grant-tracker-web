# HelpersApi

All URIs are relative to *https://infra-granttracker.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authHelperControllerCheckEmailAvailability**](#authhelpercontrollercheckemailavailability) | **GET** /v1/auth/helper/availability/email | |

# **authHelperControllerCheckEmailAvailability**
> AvailabilityCheckInfo authHelperControllerCheckEmailAvailability()


### Example

```typescript
import {
    HelpersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HelpersApi(configuration);

let email: string; // (default to undefined)

const { status, data } = await apiInstance.authHelperControllerCheckEmailAvailability(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|


### Return type

**AvailabilityCheckInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

