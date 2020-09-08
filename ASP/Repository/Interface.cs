using System.Collections.Generic;
using ASP.Models;
using ASP.Services;

namespace ASP.Repository
{
    public interface IInformation
    {
        // Give me a list of all command available, Model is command (in Models)
        IEnumerable<Information> Get();
        // Return Type is command 
        Information GetById(string id);
        void Post(Information body);
        void Update(string id, Information body);
        void Delete(string id);
    }
}