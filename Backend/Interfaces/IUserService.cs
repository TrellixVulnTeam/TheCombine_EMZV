﻿using BackendFramework.ValueModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackendFramework.Interfaces
{
    public interface IUserService
    {
        Task<List<User>> GetAllUsers();
        Task<User> GetUser(string userId);
        Task<string> GetUserAvatar(string userId);
        Task<User> Create(User user);
        Task<ResultOfUpdate> Update(string userId, User user);
        Task<bool> Delete(string userId);
        Task<bool> DeleteAllUsers();
        Task<User> Authenticate(string username, string password);
        Task<User> MakeJWT(User user);
    }
}
