using Bridge;

namespace TicketWebsite.Common
{
    class FileService
    {
        public static string GetFileContent(string fileName)
        {
            return Script.Write<string>("TicketWebsite.FileContents[fileName];");
        }
    }
}