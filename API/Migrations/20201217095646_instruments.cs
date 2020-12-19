using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class instruments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "KnownAs",
                table: "Users",
                newName: "Instruments");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "Users",
                newName: "BandName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Instruments",
                table: "Users",
                newName: "KnownAs");

            migrationBuilder.RenameColumn(
                name: "BandName",
                table: "Users",
                newName: "Gender");
        }
    }
}
