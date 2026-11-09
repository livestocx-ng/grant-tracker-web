# GrantApi

All URIs are relative to *https://infra-granttracker.livestocx.xyz*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**grantControllerAddGrantApplication**](#grantcontrolleraddgrantapplication) | **POST** /v1/grant/grant/add | |
|[**grantControllerAddGrantApplicationAssignee**](#grantcontrolleraddgrantapplicationassignee) | **POST** /v1/grant/grant/add-assignees | |
|[**grantControllerFetchAllAssignees**](#grantcontrollerfetchallassignees) | **GET** /v1/grant/grant/all-assignees | |
|[**grantControllerFetchAssignedGrantApplications**](#grantcontrollerfetchassignedgrantapplications) | **GET** /v1/grant/grant/fetch-assigned | |
|[**grantControllerFetchGrantApplications**](#grantcontrollerfetchgrantapplications) | **GET** /v1/grant/grant/fetch | |
|[**grantControllerFetchUnassignedAssignees**](#grantcontrollerfetchunassignedassignees) | **GET** /v1/grant/grant/unassigned-assignees | |
|[**grantControllerRemoveGrantApplication**](#grantcontrollerremovegrantapplication) | **DELETE** /v1/grant/grant/remove | |
|[**grantControllerRemoveGrantApplicationAssignees**](#grantcontrollerremovegrantapplicationassignees) | **DELETE** /v1/grant/grant/remove-assignees | |
|[**grantControllerUpdateGrantApplication**](#grantcontrollerupdategrantapplication) | **PATCH** /v1/grant/grant/update | |
|[**grantControllerUpdateGrantApplicationStatus**](#grantcontrollerupdategrantapplicationstatus) | **PATCH** /v1/grant/grant/update-status | |

# **grantControllerAddGrantApplication**
> GrantApplicationInfo grantControllerAddGrantApplication(addGrantApplicationDto)


### Example

```typescript
import {
    GrantApi,
    Configuration,
    AddGrantApplicationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let addGrantApplicationDto: AddGrantApplicationDto; //

const { status, data } = await apiInstance.grantControllerAddGrantApplication(
    addGrantApplicationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addGrantApplicationDto** | **AddGrantApplicationDto**|  | |


### Return type

**GrantApplicationInfo**

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

# **grantControllerAddGrantApplicationAssignee**
> Array<GrantApplicationAssigneeInfo> grantControllerAddGrantApplicationAssignee()


### Example

```typescript
import {
    GrantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let assigneeIds: string; //Comma-separated assignee account IDs (e.g. 1,2,3) or repeated query params (default to undefined)
let grantApplicationId: number; //The ID of the grant application to add the assignee to (default to undefined)

const { status, data } = await apiInstance.grantControllerAddGrantApplicationAssignee(
    assigneeIds,
    grantApplicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assigneeIds** | [**string**] | Comma-separated assignee account IDs (e.g. 1,2,3) or repeated query params | defaults to undefined|
| **grantApplicationId** | [**number**] | The ID of the grant application to add the assignee to | defaults to undefined|


### Return type

**Array<GrantApplicationAssigneeInfo>**

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

# **grantControllerFetchAllAssignees**
> Array<AccountInfo> grantControllerFetchAllAssignees()


### Example

```typescript
import {
    GrantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

const { status, data } = await apiInstance.grantControllerFetchAllAssignees();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountInfo>**

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

# **grantControllerFetchAssignedGrantApplications**
> Array<GrantApplicationInfo> grantControllerFetchAssignedGrantApplications()


### Example

```typescript
import {
    GrantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let page: number; //The page number to fetch (default to undefined)
let pageSize: number; //The page size to fetch (default to undefined)

const { status, data } = await apiInstance.grantControllerFetchAssignedGrantApplications(
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number to fetch | defaults to undefined|
| **pageSize** | [**number**] | The page size to fetch | defaults to undefined|


### Return type

**Array<GrantApplicationInfo>**

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

# **grantControllerFetchGrantApplications**
> Array<GrantApplicationInfo> grantControllerFetchGrantApplications()


### Example

```typescript
import {
    GrantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let page: number; //The page number to fetch (default to undefined)
let pageSize: number; //The page size to fetch (default to undefined)

const { status, data } = await apiInstance.grantControllerFetchGrantApplications(
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number to fetch | defaults to undefined|
| **pageSize** | [**number**] | The page size to fetch | defaults to undefined|


### Return type

**Array<GrantApplicationInfo>**

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

# **grantControllerFetchUnassignedAssignees**
> Array<AccountInfo> grantControllerFetchUnassignedAssignees()


### Example

```typescript
import {
    GrantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let grantApplicationId: number; //The ID of the grant application to fetch the unassigned assignees for (default to undefined)

const { status, data } = await apiInstance.grantControllerFetchUnassignedAssignees(
    grantApplicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **grantApplicationId** | [**number**] | The ID of the grant application to fetch the unassigned assignees for | defaults to undefined|


### Return type

**Array<AccountInfo>**

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

# **grantControllerRemoveGrantApplication**
> boolean grantControllerRemoveGrantApplication()


### Example

```typescript
import {
    GrantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let grantApplicationId: number; //The ID of the grant application to remove (default to undefined)

const { status, data } = await apiInstance.grantControllerRemoveGrantApplication(
    grantApplicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **grantApplicationId** | [**number**] | The ID of the grant application to remove | defaults to undefined|


### Return type

**boolean**

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

# **grantControllerRemoveGrantApplicationAssignees**
> boolean grantControllerRemoveGrantApplicationAssignees()


### Example

```typescript
import {
    GrantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let assigneeIds: string; //Comma-separated assignee account IDs (e.g. 1,2,3) or repeated query params (default to undefined)
let grantApplicationId: number; //The ID of the grant application to remove the assignee from (default to undefined)

const { status, data } = await apiInstance.grantControllerRemoveGrantApplicationAssignees(
    assigneeIds,
    grantApplicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assigneeIds** | [**string**] | Comma-separated assignee account IDs (e.g. 1,2,3) or repeated query params | defaults to undefined|
| **grantApplicationId** | [**number**] | The ID of the grant application to remove the assignee from | defaults to undefined|


### Return type

**boolean**

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

# **grantControllerUpdateGrantApplication**
> GrantApplicationInfo grantControllerUpdateGrantApplication(updateGrantApplicationDto)


### Example

```typescript
import {
    GrantApi,
    Configuration,
    UpdateGrantApplicationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let grantApplicationId: number; //The ID of the grant application to update (default to undefined)
let updateGrantApplicationDto: UpdateGrantApplicationDto; //

const { status, data } = await apiInstance.grantControllerUpdateGrantApplication(
    grantApplicationId,
    updateGrantApplicationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGrantApplicationDto** | **UpdateGrantApplicationDto**|  | |
| **grantApplicationId** | [**number**] | The ID of the grant application to update | defaults to undefined|


### Return type

**GrantApplicationInfo**

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

# **grantControllerUpdateGrantApplicationStatus**
> GrantApplicationInfo grantControllerUpdateGrantApplicationStatus()


### Example

```typescript
import {
    GrantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrantApi(configuration);

let status: 'processing' | 'review' | 'submitted' | 'completed' | 'closed' | 'cancelled' | 'rejected'; //The status of the grant application to update (default to undefined)
let grantApplicationId: number; //The ID of the grant application to update (default to undefined)

const { status, data } = await apiInstance.grantControllerUpdateGrantApplicationStatus(
    status,
    grantApplicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**&#39;processing&#39; | &#39;review&#39; | &#39;submitted&#39; | &#39;completed&#39; | &#39;closed&#39; | &#39;cancelled&#39; | &#39;rejected&#39;**]**Array<&#39;processing&#39; &#124; &#39;review&#39; &#124; &#39;submitted&#39; &#124; &#39;completed&#39; &#124; &#39;closed&#39; &#124; &#39;cancelled&#39; &#124; &#39;rejected&#39;>** | The status of the grant application to update | defaults to undefined|
| **grantApplicationId** | [**number**] | The ID of the grant application to update | defaults to undefined|


### Return type

**GrantApplicationInfo**

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

