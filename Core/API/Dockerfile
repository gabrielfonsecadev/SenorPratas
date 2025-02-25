# Usa a imagem oficial do .NET SDK para construir o projeto
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copia os arquivos do projeto e restaura as dependências
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /out

# Usa a imagem do runtime do .NET para rodar o app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /out .

# Expõe a porta padrão do ASP.NET
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Comando para iniciar a aplicação
CMD ["dotnet", "Pratas.dll"]
