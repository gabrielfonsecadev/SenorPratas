using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Pratas.Migrations
{
    /// <inheritdoc />
    public partial class Collections : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CollectionId",
                table: "Produto",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PrecoParcelado",
                table: "Produto",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Tamanhos",
                table: "Produto",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Collection",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Collection", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ImagemProduto",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Url = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Ordem = table.Column<int>(type: "int", nullable: false),
                    ProdutoId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImagemProduto", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ImagemProduto_Produto_ProdutoId",
                        column: x => x.ProdutoId,
                        principalTable: "Produto",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Produto_CollectionId",
                table: "Produto",
                column: "CollectionId");

            migrationBuilder.CreateIndex(
                name: "IX_ImagemProduto_ProdutoId",
                table: "ImagemProduto",
                column: "ProdutoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Produto_Collection_CollectionId",
                table: "Produto",
                column: "CollectionId",
                principalTable: "Collection",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Produto_Collection_CollectionId",
                table: "Produto");

            migrationBuilder.DropTable(
                name: "Collection");

            migrationBuilder.DropTable(
                name: "ImagemProduto");

            migrationBuilder.DropIndex(
                name: "IX_Produto_CollectionId",
                table: "Produto");

            migrationBuilder.DropColumn(
                name: "CollectionId",
                table: "Produto");

            migrationBuilder.DropColumn(
                name: "PrecoParcelado",
                table: "Produto");

            migrationBuilder.DropColumn(
                name: "Tamanhos",
                table: "Produto");
        }
    }
}
