using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ASP.Models
{
    public class Information
    {
        // ObjectId in MongoDB will equal to Id here
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string description { get; set; }
        public bool completed { get; set; } = false;
        public Properties properties {get; set;}
    }

    public class Properties
    {
        public string name { get; set; }
        public int age { get; set; }
    }
}