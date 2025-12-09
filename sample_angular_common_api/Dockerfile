from mcr.microsoft.com/dotnet/sdk:8.0 AS build
workdir /src

copy ["sample_angular_common_api.csproj", "./"]
run dotnet restore "sample_angular_common_api.csproj"

copy . .

run dotnet publish "sample_angular_common_api.csproj" -c Release -o /app/publish /p:UseAppHost=false

from mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
workdir /app

copy --from=build /app/publish .
expose 8081

cmd ["dotnet", "sample_angular_common_api.dll"]