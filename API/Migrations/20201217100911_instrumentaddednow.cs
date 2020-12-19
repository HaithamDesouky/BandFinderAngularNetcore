using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class instrumentaddednow : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Instruments",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Instruments",
                table: "Users",
                type: "TEXT",
                nullable: true);
        }
    }
}
