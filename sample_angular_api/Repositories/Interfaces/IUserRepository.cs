using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using sample_angular_api.Models;

namespace sample_angular_api.Repositories.Interfaces;
public interface IUserRepository
{
    // Reads
    Task<IEnumerable<User>> GetAllAsync();
    Task<User?> GetByIdAsync(int id);

    // Writes
    Task AddAsync(User user);
    Task UpdateAsync(User user);
    Task DeleteAsync(int id);
}