﻿using BackendFramework.Models;
using Microsoft.AspNetCore.Http;

namespace BackendFramework.Interfaces
{
    public interface IPermissionService
    {
        bool HasProjectPermission(HttpContext request, Permission permission);
        bool IsUserIdAuthorized(HttpContext request, string userId);
        bool IsViolationEdit(HttpContext request, string userEditId, string projectId);
        string GetUserId(HttpContext request);
    }
}
