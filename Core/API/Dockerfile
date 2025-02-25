# Etapa base - imagem para rodar a aplicação
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
# Definindo o usuário e o diretório de trabalho
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Etapa de build - usa a imagem SDK do .NET para compilar o projeto
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
# Copia o arquivo .csproj para a imagem
COPY ["SenorPratas/Core/API/Api/Pratas.csproj", "SenorPratas/Core/API/Api/"]
# Restaura as dependências
RUN dotnet restore "SenorPratas/Core/API/Api/Pratas.csproj"
# Copia o restante do código para o contêiner
COPY . .
# Compila o projeto
RUN dotnet build "SenorPratas/Core/API/Api/Pratas.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Etapa de publicação - publica o projeto
FROM build AS publish
RUN dotnet publish "SenorPratas/Core/API/Api/Pratas.csproj" -c $BUILD_CONFIGURATION -o /app/publish

# Etapa final - usa a imagem base para rodar a aplicação
FROM base AS final
WORKDIR /app
# Copia os arquivos compilados da etapa de publicação
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Pratas.Render.dll"]
