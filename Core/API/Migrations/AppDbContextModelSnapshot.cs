﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Pratas.Context;

#nullable disable

namespace Pratas.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.AutoIncrementColumns(modelBuilder);

            modelBuilder.Entity("Pratas.Models.Categoria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Categoria");
                });

            modelBuilder.Entity("Pratas.Models.Collection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Collection");
                });

            modelBuilder.Entity("Pratas.Models.ImagemProduto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Ordem")
                        .HasColumnType("int");

                    b.Property<int?>("ProdutoId")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("ProdutoId");

                    b.ToTable("ImagemProduto");
                });

            modelBuilder.Entity("Pratas.Models.Produto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CategoriaId")
                        .HasColumnType("int");

                    b.Property<int?>("CollectionId")
                        .HasColumnType("int");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<decimal>("Preco")
                        .HasColumnType("decimal(65,30)");

                    b.Property<string>("PrecoParcelado")
                        .HasColumnType("longtext");

                    b.Property<string>("Tamanhos")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("CategoriaId");

                    b.HasIndex("CollectionId");

                    b.ToTable("Produto");
                });

            modelBuilder.Entity("Pratas.Models.ImagemProduto", b =>
                {
                    b.HasOne("Pratas.Models.Produto", "Produto")
                        .WithMany("Imagens")
                        .HasForeignKey("ProdutoId");

                    b.Navigation("Produto");
                });

            modelBuilder.Entity("Pratas.Models.Produto", b =>
                {
                    b.HasOne("Pratas.Models.Categoria", "Categoria")
                        .WithMany()
                        .HasForeignKey("CategoriaId");

                    b.HasOne("Pratas.Models.Collection", "Collection")
                        .WithMany()
                        .HasForeignKey("CollectionId");

                    b.Navigation("Categoria");

                    b.Navigation("Collection");
                });

            modelBuilder.Entity("Pratas.Models.Produto", b =>
                {
                    b.Navigation("Imagens");
                });
#pragma warning restore 612, 618
        }
    }
}
