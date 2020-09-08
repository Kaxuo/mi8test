using System.Net;
using System.Collections.Generic;
using ASP.Models;
using ASP.Repository;
using ASP.Services;
using Microsoft.AspNetCore.Mvc;

namespace ASP.Controller
{
    [Route("api/info")]
    [ApiController]
    public class InfoController : ControllerBase
    {

        private readonly DatabaseServices _repository;

        public InfoController(DatabaseServices services)
        {
            _repository = services;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Information>> GetEverything()
        {
            var items = _repository.Get();
            return Ok(items);
        }

        [HttpGet("{id:length(24)}", Name ="GetById")]
        public ActionResult<Information> Get(string id)
        {
            var singleData = _repository.GetById(id);
            if(singleData == null){
                return NotFound();
            }
            return singleData;
        }

        [HttpPost]
        public ActionResult<Information> CreateData(Information body)
        {
            _repository.Post(body);
            return Ok(body);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteData(string id)
        {
            var singleData = _repository.GetById(id);
            if (singleData == null)
            {
                return NotFound();
            }
            _repository.Delete(id);
            return NoContent();
        }
        [HttpPut("{id}")]
        public ActionResult UpdateData(string id, Information body)
        {
            var singleData = _repository.GetById(id);
            if (singleData == null)
            {
                return NotFound();
            }
            _repository.Update(id,body);
            return NoContent();
        }
    }
}