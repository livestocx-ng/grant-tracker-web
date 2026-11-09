# SupportApi

All URIs are relative to *https://infra-granttracker.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**supportControllerContactUs**](#supportcontrollercontactus) | **POST** /v1/account/support/contact-us | |
|[**supportControllerContactUs_0**](#supportcontrollercontactus_0) | **POST** /v1/account/support/contact-us | |

# **supportControllerContactUs**
> supportControllerContactUs(contactUsDTO)


### Example

```typescript
import {
    SupportApi,
    Configuration,
    ContactUsDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let contactUsDTO: ContactUsDTO; //

const { status, data } = await apiInstance.supportControllerContactUs(
    contactUsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactUsDTO** | **ContactUsDTO**|  | |


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
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportControllerContactUs_0**
> supportControllerContactUs_0(contactUsDTO)


### Example

```typescript
import {
    SupportApi,
    Configuration,
    ContactUsDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let contactUsDTO: ContactUsDTO; //

const { status, data } = await apiInstance.supportControllerContactUs_0(
    contactUsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactUsDTO** | **ContactUsDTO**|  | |


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
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

