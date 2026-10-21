# Dataverse Custom API

Dataverse **Custom API** sample project for learning and testing server-side business logic in Microsoft Power Platform.

> Target framework: **.NET Framework 4.6.2**

---

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Local Setup](#local-setup)
- [Build](#build)
- [Deploy to Dataverse](#deploy-to-dataverse)
- [Test the Custom API](#test-the-custom-api)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This repository contains a Dataverse Custom API implementation intended to:

- Define a reusable custom message in Dataverse
- Execute plugin logic through the Dataverse execution pipeline
- Return structured output values to available callers (Power Automate, JavaScript, SDK, etc.)

This project was made following the *Introduction to Extending Power Platform* module exercise, **Creating a custom API**. This sample custom API is designed for educational purposes, personal practice, and can be extended for real-world scenarios.

---

## Requirements

- Visual Studio (with .NET desktop development workload)
- .NET Framework **4.6.2** Developer Pack
- Access to a Dataverse environment
- Dataverse tools:
  - Power Platform CLI (`pac`)
  - Plugin Registration Tool
  - XrmToolBox (optional)

---

## Local Setup

1. Clone the repository.
2. Open `CustomAPILab.csproj` in Visual Studio.
3. Restore NuGet packages.
4. Build the solution.

---

## Build

Using Visual Studio:

1. Open the project.
2. Select **Build > Build Solution**.

---

## Deploy to Dataverse

### 1) Register plugin assembly

Register the compiled DLL (`bin\Release\...dll`) in your Dataverse environment using the Plugin Registration Tool or your deployment process.

### 2) Create/verify Custom API metadata

In Dataverse, create or verify:

- Custom API unique name
- Bound/Unbound setting
- Request parameters
- Response properties
- Plugin type mapped to the API operation

### 3) Publish customizations

Publish all customizations after registration/metadata updates.

---

## Test the Custom API

You can test using:

- Dataverse Web API
- C# SDK client
- Postman
- Power Automate custom connector/action

### Example Web API call (Unbound Custom API)

**Endpoint:**
```http
POST https://<org>.crm.dynamics.com/api/data/v9.2/<custom_api_uniquename>
Content-Type: application/json
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "InputParameterName": "SampleValue"
}
```

---

## Troubleshooting

- **Assembly not executing**  
  Verify plugin step registration and message name.

- **API not found**  
  Confirm Custom API Unique Name and publication status.

- **Permission errors**  
  Check security roles for calling user/app registration.

- **Version mismatch**  
  Ensure runtime and referenced Dataverse SDK packages are compatible with .NET Framework 4.6.2.

---

## Contributing

1. Create a feature branch e.g. `feature/my-new-feature`.
2. Make focused changes.
3. Open a pull request.

---

## License

Licensed under the MIT License. See [LICENSE](https://github.com/elnatoo/DataverseCustomAPI/blob/main/LICENSE) for details.
