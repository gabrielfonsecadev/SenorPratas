# Use the official ASP.NET Core runtime as a base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

# Use the official .NET SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["Pratas.csproj", "./"]
RUN dotnet restore "Pratas.csproj"
COPY . .
RUN dotnet build "Pratas.csproj" -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "Pratas.csproj" -c Release -o /app/publish

# Final stage/image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Pratas.dll"]