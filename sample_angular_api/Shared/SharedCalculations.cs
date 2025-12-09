namespace sample_angular_api.Shared;
public static class SharedCalculations
{
    public static double CalculateBMR(DateTime dateOfBirth, string gender, double weight, double height)
    {
        var age = DateTime.Today.Year - dateOfBirth.Year;
        if (dateOfBirth.Date > DateTime.Today.AddYears(-age)) age--;

        if (gender == "Male")
        {
            return (10 * weight) + (6.25 * height) - (5 * age) + 5;
        }
        else
        {
            return (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
    }
}