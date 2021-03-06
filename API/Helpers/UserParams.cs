namespace API.Helpers
{
    public class UserParams : PaginationParams
    {
   

        public string CurrentUserName { get; set; }
        public int MinAge { get; set; } = 18;

        public int MaxAge { get; set; } = 150;

        public string OrderBy { get; set; } = "lastActive";

        public string Instrument { get; set; }


    }
}