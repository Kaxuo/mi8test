using System;
using System.Collections.Generic;
using System.ComponentModel;
using ASP.Models;
using ASP.Repository;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ASP.Services
{
    public class DatabaseServices : IInformation
    {
        private readonly IMongoCollection<Information> _info;
        public DatabaseServices(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _info = database.GetCollection<Information>(settings.CollectionName);
        }

        public void Delete(string id)
        {
            if (id == null)
            {
                throw new ArgumentNullException(nameof(id));
            }
            _info.DeleteOne(collection => collection.Id == id);
        }

        public IEnumerable<Information> Get()
        {
            List<Information> data;
            data = _info.Find(data => true).ToList();
            return data;
        }

        public Information GetById(string id)
        {
            return _info.Find<Information>(data => data.Id == id).FirstOrDefault();
        }

        public void Post(Information body)
        {
            if (body == null)
            {
                throw new ArgumentNullException(nameof(body));
            }
            _info.InsertOne(body);
        }

        public void Update(string id, Information body)
        {
            if (body == null)
            {
                throw new ArgumentNullException(nameof(body));
            }
            var filter = Builders<Information>.Filter.Eq("Id", id);
            var updated = Builders<Information>
            .Update
            .Set("description", body.description)
            .Set("completed", body.completed)
            .Set("properties", body.properties);
            _info.UpdateOne(filter, updated);
        }
    }
}