using sample_angular_api.Models;

namespace sample_angular_api.Interfaces;
public interface IUserService
{
    IEnumerable<User> GetAllUsers();
    User? GetUserById(int id);
    Task AddUserAsync(User user);
    Task UpdateUserAsync(User user);
    Task DeleteUserAsync(int id);
}