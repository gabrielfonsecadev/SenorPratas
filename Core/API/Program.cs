using Microsoft.EntityFrameworkCore;
using Pratas.Context;
using Pratas.Models;
using Pratas.Services;
using AutoMapper;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string postgresConnection = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
    //APENAS PARA AMBIENTE DEV!!!
    options.AddPolicy("AllowAll", policy =>
    {
        if (builder.Environment.IsDevelopment())
        {
            postgresConnection = builder.Configuration.GetConnectionString("DevelopmentConnection");

            policy.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        }
        else
        {
            // var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
            // builder.WebHost.UseUrls($"http://*:{port}");

            // policy.WithOrigins("https://senorpratas.onrender.com")
            policy.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            // .WithMethods("GET", "POST", "PUT", "DELETE")
            // .AllowCredentials();
        }
    });
});

builder.Services.AddDbContext<AppDbContext>(opt => opt.UseNpgsql(postgresConnection));

builder.Services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);

//Services
builder.Services.AddScoped<IProdutoService, ProdutoService>();

builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

var app = builder.Build();

app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.ConfigureExceptionHandler();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.ConfigureExceptionHandler();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
