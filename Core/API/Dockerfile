# Etapa Base - imagem para rodar a aplicação
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Etapa de Build - usa a imagem SDK do .NET para compilar o projeto
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
# Copia o arquivo .csproj para o container (assumindo que ele está na mesma pasta do Dockerfile)
COPY ["Pratas.csproj", "./"]
RUN dotnet restore "Pratas.csproj"
# Copia o restante do código
COPY . .
RUN dotnet build "Pratas.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Etapa de Publicação - publica o projeto
FROM build AS publish
RUN dotnet publish "Pratas.csproj" -c $BUILD_CONFIGURATION -o /app/publish

# Etapa Final - imagem final para rodar a aplicação
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Pratas.dll"]
