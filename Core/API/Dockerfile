# Usa a imagem oficial do .NET SDK para construir o projeto
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY SenorPratas/Core/API/. .

# Restaura as dependências do projeto
RUN dotnet restore

# Publica o projeto para a pasta /out
RUN dotnet publish -c Release -o /out

# Usa a imagem do runtime do .NET para rodar a aplicação
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copia a publicação da imagem de build para o runtime
COPY --from=build /out .

# Expondo a porta padrão para o ASP.NET
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Comando para iniciar a aplicação
CMD ["dotnet", "Pratas.dll"]
